# Use Python 3.11
FROM python:3.11-slim

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file from the backend folder
COPY backend/requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend directory into the container
COPY backend/ .

# Expose port 7860 (Standard for Hugging Face Spaces)
EXPOSE 7860

# Run the command
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
