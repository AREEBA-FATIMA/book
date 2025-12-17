import sys
import traceback

try:
    print("Attempting to import settings...")
    from config import settings
    print(f"Settings imported. API Key present: {bool(settings.LLM_API_KEY)}")
except Exception:
    print("Failed to import settings:")
    traceback.print_exc()
