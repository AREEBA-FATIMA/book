
import os
import sys
import asyncio
from typing import List
from pathlib import Path
import time

# Add project root to path to import backend config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.config import settings
from qdrant_client import QdrantClient
from qdrant_client.http import models
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import DirectoryLoader, TextLoader

# Initialize Qdrant Client
if settings.QDRANT_URL:
    qdrant_client = QdrantClient(
        url=settings.QDRANT_URL,
        api_key=settings.QDRANT_API_KEY,
    )
else:
    qdrant_client = QdrantClient(
        host=settings.QDRANT_HOST,
        port=settings.QDRANT_PORT,
        api_key=settings.QDRANT_API_KEY,
    )

COLLECTION_NAME = "textbook_collection"

def init_collection():
    """Re-creates the Qdrant collection."""
    print(f"Creating collection: {COLLECTION_NAME}")
    qdrant_client.recreate_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=models.VectorParams(
            size=768,  # Gemini Embedding Size
            distance=models.Distance.COSINE,
        ),
    )

def load_documents(docs_path: str):
    """Loads markdown files from the docs directory."""
    print(f"Loading documents from: {docs_path}")
    loader = DirectoryLoader(docs_path, glob="**/*.md*", loader_cls=TextLoader, loader_kwargs={'encoding': 'utf-8'})
    docs = loader.load()
    print(f"Loaded {len(docs)} documents.")
    return docs

def chunk_documents(docs):
    """Splits documents into chunks."""
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
    )
    chunks = splitter.split_documents(docs)
    print(f"Split into {len(chunks)} chunks.")
    return chunks

async def ingest():
    if not settings.LLM_API_KEY or "INSERT" in settings.LLM_API_KEY:
        print("ERROR: LLM_API_KEY is missing in backend/.env")
        return

    print(f"Using API Key: {settings.LLM_API_KEY[:5]}... (verified)")

    embeddings_model = GoogleGenerativeAIEmbeddings(
        model="models/text-embedding-004",
        google_api_key=settings.LLM_API_KEY
    )

    # 1. Init Collection
    init_collection()

    # 2. Load Docs (Adjust path to your book-1/docs)
    docs_dir = Path("d:/book-project-1/book/book-1/docs") # Explicit path for stability
    if not docs_dir.exists():
         # Fallback try relative
         docs_dir = Path("book-1/docs")
    
    docs = load_documents(str(docs_dir))

    # 3. Chunk
    chunks = chunk_documents(docs)

    # 4. Embed & Upload
    print("Generating embeddings and uploading...")
    
    # Process in small batches to respect free tier rate limits
    # Batch size 1 is safest for debugging 429
    batch_size = 1
    total_chunks = len(chunks)
    
    for i in range(0, total_chunks, batch_size):
        batch = chunks[i:i+batch_size]
        texts = [c.page_content for c in batch]
        metadatas = [c.metadata for c in batch]
        
        try:
            # Generate Embeddings
            print(f"Embedding batch {i//batch_size + 1}/{(total_chunks + batch_size - 1)//batch_size}...")
            vectors = embeddings_model.embed_documents(texts)
            
            # Upload
            points = [
                models.PointStruct(
                    id=i + idx,
                    vector=v,
                    payload={"text": t, "source": m.get("source", "")}
                )
                for idx, (v, t, m) in enumerate(zip(vectors, texts, metadatas))
            ]
            
            qdrant_client.upsert(
                collection_name=COLLECTION_NAME,
                points=points
            )
            print(f"Uploaded batch {i}/{total_chunks}")
            
            # Sleep to respect rate limits (e.g. 10-15 RPM)
            # 5 seconds sleep + processing time should be safe
            time.sleep(5)
            
        except Exception as e:
            print(f"Error processing batch {i}: {e}")
            # Wait longer on error before continuing or retrying
            time.sleep(20)

    print("Ingestion Complete!")

if __name__ == "__main__":
    asyncio.run(ingest())
