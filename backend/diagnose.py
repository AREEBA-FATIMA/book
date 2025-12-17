import sys
import os
import asyncio
from qdrant_client import QdrantClient
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from config import settings

# Force stdout to be unbuffered
sys.stdout.reconfigure(encoding='utf-8')

async def diagnose():
    with open("diagnosis_report.txt", "w", encoding="utf-8") as f:
        def log(msg):
            print(msg)
            f.write(msg + "\n")

        log("--- DIAGNOSTIC START ---")
        
        # 1. Check API Key
        if not settings.LLM_API_KEY:
            log("[FAIL] LLM_API_KEY is missing!")
            return
        else:
            log(f"[PASS] API Key found: {settings.LLM_API_KEY[:5]}...")

        # 2. Check Qdrant Connection
        log("\nTesting Qdrant Connection...")
        try:
            if settings.QDRANT_URL:
                client = QdrantClient(url=settings.QDRANT_URL, api_key=settings.QDRANT_API_KEY)
            else:
                client = QdrantClient(host=settings.QDRANT_HOST, port=settings.QDRANT_PORT, api_key=settings.QDRANT_API_KEY)
            
            collections = client.get_collections()
            log(f"[PASS] Connected to Qdrant. Collections: {[c.name for c in collections.collections]}")
        except Exception as e:
            log(f"[FAIL] Qdrant Connection Error: {e}")
            log("  -> Is Docker running? (docker ps)")
            log("  -> Is Qdrant started? (docker run -p 6333:6333 ...)")

        # 3. Check Embedding
        log("\nTesting Gemini Embeddings...")
        try:
            embeddings = GoogleGenerativeAIEmbeddings(
                model="models/text-embedding-004",
                google_api_key=settings.LLM_API_KEY
            )
            vec = embeddings.embed_query("Test query")
            log(f"[PASS] Embedding generated. Vector length: {len(vec)}")
        except Exception as e:
            log(f"[FAIL] Embedding Error: {e}")

        # 4. Check LLM
        log(f"\nTesting Gemini LLM ({settings.LLM_MODEL_NAME})...")
        try:
            llm = ChatGoogleGenerativeAI(
                model=settings.LLM_MODEL_NAME, 
                google_api_key=settings.LLM_API_KEY
            )
            resp = llm.invoke("Say 'Hello' if you can hear me.")
            log(f"[PASS] LLM Response: {resp.content}")
        except Exception as e:
            log(f"[FAIL] LLM Error: {e}")

        log("\n--- DIAGNOSTIC END ---")

if __name__ == "__main__":
    asyncio.run(diagnose())
