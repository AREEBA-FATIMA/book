
from fastapi import APIRouter, HTTPException, Depends
from app.models.chat import ChatMessage, ChatResponse
from config import settings
from qdrant_client import QdrantClient
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

# --- Rate Limiting Import (Conceptual - requires installation) ---
# from fastapi_limiter.depends import RateLimiter
# ------------------------------------------------------------------

router = APIRouter()

# Clients
# Clients
if settings.QDRANT_URL:
    qdrant_client = QdrantClient(
        url=settings.QDRANT_URL,
        api_key=settings.QDRANT_API_KEY,
    )
else:
    qdrant_client = QdrantClient(
        url=settings.QDRANT_HOST,
        port=settings.QDRANT_PORT,
        api_key=settings.QDRANT_API_KEY,
    )
COLLECTION_NAME = "textbook_collection"

llm = ChatGoogleGenerativeAI(
    model=settings.LLM_MODEL_NAME, 
    google_api_key=settings.LLM_API_KEY,
    temperature=0.3,
    max_retries=3
)

embeddings = GoogleGenerativeAIEmbeddings(
    model="models/text-embedding-004",
    google_api_key=settings.LLM_API_KEY
)

# RAG Prompt
template = """Answer the question based ONLY on the following context:
{context}

Question: {question}
"""
prompt = ChatPromptTemplate.from_template(template)

def get_retriever(query: str):
    """Manual retrieval compatible with Qdrant Client"""
    # Generate embedding
    query_vector = embeddings.embed_query(query)
    
    # Search Qdrant
    hits = qdrant_client.search(
        collection_name=COLLECTION_NAME,
        query_vector=query_vector,
        limit=5
    )
    
    # Format context and extract sources
    context_parts = []
    sources = []
    for h in hits:
        text = h.payload.get("text", "")
        source = h.payload.get("source", "Unknown")
        context_parts.append(text)
        if source not in sources:
            sources.append(source)
            
    context = "\n\n".join(context_parts)
    return context, sources

def generate_answer(context: str, question: str) -> str:
    """Generates answer using LLM Chain"""
    chain = prompt | llm | StrOutputParser()
    return chain.invoke({"context": context, "question": question})

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(message: ChatMessage):
    if not settings.LLM_API_KEY or "INSERT" in settings.LLM_API_KEY:
         raise HTTPException(status_code=500, detail="LLM API Key not configured.")

    try:
        print(f"DEBUG: Endpoint started. Message: {message.content[:50]}...")
        
        # 1. Check for Subagents/Skills
        from app.agents.registry import registry
        skill = registry.get_handling_skill(message.content)

        # Retrieve context (Shared for both paths)
        print("DEBUG: Generating embedding...")
        context, sources = get_retriever(message.content)
        print(f"DEBUG: Context retrieved. Sources: {len(sources)}")
        
        response_text = ""
        
        if skill:
            print(f"DEBUG: Delegating to skill: {skill}")
            # Delegate to Subagent
            response_text = skill.execute(message.content, context)
            # Skills might not use citations, but passing sources keeps UI consistent
        else:
            # 2. Standard RAG Flow
            print("DEBUG: Generating answer with LLM...")
            try:
                response_text = generate_answer(context, message.content)
                print("DEBUG: Answer generated.")
            except Exception as llm_error:
                print(f"DEBUG: LLM Generation failed: {llm_error}")
                # Fallback or re-raise
                raise llm_error
            
        return ChatResponse(response=response_text, citations=sources)
        
    except Exception as e:
        error_msg = str(e)
        import traceback
        traceback_str = traceback.format_exc()
        
        # Write to file for debugging
        try:
            with open("error_log.txt", "w") as f:
                f.write(f"Error: {error_msg}\n")
                f.write(traceback_str)
        except:
            pass
            
        print(f"!!! UPSTREAM API ERROR: {error_msg}")
        if "429" in error_msg or "quota" in error_msg.lower():
            raise HTTPException(status_code=429, detail="Rate limit exceeded. Please wait a moment and try again.")
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=error_msg)
