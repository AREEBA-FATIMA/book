import os
import google.generativeai as genai

def run():
    # 1. Read .env manually to avoid Pydantic/Config issues
    api_key = None
    try:
        with open(".env", "r") as f:
            for line in f:
                if line.startswith("LLM_API_KEY="):
                    api_key = line.strip().split("=", 1)[1]
                    break
        
        if not api_key:
            # Try reading GOOGLE_API_KEY
             with open(".env", "r") as f:
                for line in f:
                    if line.startswith("GOOGLE_API_KEY="):
                        api_key = line.strip().split("=", 1)[1]
                        break
    except Exception as e:
        print(f"Error reading .env: {e}")
        return

    if not api_key:
        print("NO API KEY FOUND in .env")
        return

    # Clean the key (remove quotes if any)
    api_key = api_key.strip().strip('"').strip("'")
    print(f"Using API Key: {api_key[:5]}...")

    # 2. Configure GenAI
    genai.configure(api_key=api_key)

    # 3. List Models
    print("\n--- Listing Models ---")
    found = False
    try:
        for m in genai.list_models():
            if 'generateContent' in m.supported_generation_methods:
                print(f"- {m.name}")
                found = True
    except Exception as e:
        print(f"API Error: {e}")
    
    if not found:
        print("No models found. Check API Key validity and Region availability.")

if __name__ == "__main__":
    run()
