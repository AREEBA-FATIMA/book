import asyncio
import google.generativeai as genai
from config import settings

def list_safe():
    print(f"DEBUG: Using API Key from config: {settings.LLM_API_KEY[:5]}...")
    genai.configure(api_key=settings.LLM_API_KEY)
    
    print("\n--- Available Models ---")
    try:
        for m in genai.list_models():
            if 'generateContent' in m.supported_generation_methods:
                print(f"Model: {m.name}")
    except Exception as e:
        print(f"Error listing models: {e}")

if __name__ == "__main__":
    list_safe()
