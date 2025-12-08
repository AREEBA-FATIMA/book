import uvicorn
import os
import sys
import logging
import traceback

# Configure logging to file
logging.basicConfig(filename='debug_log.txt', level=logging.DEBUG)

sys.path.append(os.getcwd())

logging.info("Attempting to import app...")
print("Attempting to import app...")
try:
    from main import app
    logging.info("App imported successfully.")
    print("App imported successfully.")
except Exception as e:
    logging.error(f"Failed to import app: {e}")
    logging.error(traceback.format_exc())
    print(f"Failed to import app: {e}")
    print(traceback.format_exc())
    sys.exit(1)

logging.info("Starting server on port 8000...")
print("Starting server on port 8000...")
if __name__ == "__main__":
    try:
        uvicorn.run(app, host="127.0.0.1", port=8000)
    except Exception as e:
        logging.error(f"Server failed to start: {e}")
        logging.error(traceback.format_exc())
        print(f"Server failed to start: {e}")
        print(traceback.format_exc())
