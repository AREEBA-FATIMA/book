
import os
import time
from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI

# Load .env manually to be sure
env_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(env_path)

api_key = os.getenv("LLM_API_KEY")

if not api_key:
    print("❌ Error: LLM_API_KEY not found in .env file")
    exit(1)

print(f"🔑 Found API Key: {api_key[:5]}...{api_key[-5:]}")

def test_embeddings():
    print("\n--- Testing Embeddings (gemini-pro) ---")
    try:
        embeddings = GoogleGenerativeAIEmbeddings(
            model="models/embedding-001",
            google_api_key=api_key
        )
        print("Attempting to embed 'test'...")
        res = embeddings.embed_query("test")
        print(f"✅ Embeddings Working! Vector length: {len(res)}")
        return True
    except Exception as e:
        print(f"❌ Embeddings Failed: {e}")
        return False

def test_chat():
    print("\n--- Testing Chat (gemini-1.5-pro) ---")
    try:
        llm = ChatGoogleGenerativeAI(
            model="gemini-1.5-pro", 
            google_api_key=api_key
        )
        print("Attempting to say 'Hello'...")
        res = llm.invoke("Hello, are you working?")
        print(f"✅ Chat Working! Response: {res.content}")
        return True
    except Exception as e:
        print(f"❌ Chat Failed: {e}")
        return False

if __name__ == "__main__":
    emb_success = test_embeddings()
    time.sleep(1) # Be nice to the rate limit
    chat_success = test_chat()

    if emb_success and chat_success:
        print("\n🎉 ALL SYSTEMS GO! The API key is valid and working.")
    else:
        print("\n⚠️ PROBLEMS DETECTED. See above for details.")
