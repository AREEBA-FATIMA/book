
from fastapi.testclient import TestClient
from unittest.mock import patch
import sys
import os

# Add backend to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from main import app

client = TestClient(app)

@patch("app.api.endpoints.chat.get_retriever")
@patch("app.api.endpoints.chat.generate_answer")
def test_chat_endpoint_rag(mock_generate, mock_retriever):
    # Mock Retrieve
    mock_retriever.return_value = ("Context text", ["source1.md", "source2.md"])
    
    # Mock Generate
    mock_generate.return_value = "This is a mocked answer."
    
    # Request
    response = client.post("/api/chat", json={"content": "What is AI?", "role": "user"})
    
    # Verify
    assert response.status_code == 200
    data = response.json()
    assert data["response"] == "This is a mocked answer."
    assert data["citations"] == ["source1.md", "source2.md"]
    
    # Check calls
    mock_retriever.assert_called_once_with("What is AI?")
    mock_generate.assert_called_once_with("Context text", "What is AI?")
