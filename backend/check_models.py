
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY") or os.getenv("LLM_API_KEY")

if not api_key:
    print("Error: No API KEY found in environment variables.")
    exit(1)

genai.configure(api_key=api_key)

print(f"Checking models for API Key: {api_key[:5]}...")

try:
    print("\n--- Available Generate Content Models ---")
    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(f"- {m.name}")
            
    print("\n--- Available Embedding Models ---")
    for m in genai.list_models():
        if 'embedContent' in m.supported_generation_methods:
            print(f"- {m.name}")

except Exception as e:
    print(f"Error listing models: {e}")
