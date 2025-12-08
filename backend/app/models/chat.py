from pydantic import BaseModel, Field
from typing import List, Optional

class ChatMessage(BaseModel):
    content: str = Field(..., description="The content of the chat message.")
    role: str = Field(..., description="The role of the sender (e.g., 'user', 'assistant').")
    timestamp: Optional[str] = Field(None, description="Timestamp of the message in ISO format.")

class ChatResponse(BaseModel):
    response: str = Field(..., description="The assistant's response content.")
    citations: Optional[List[str]] = Field(None, description="List of citations or source documents.")
    timestamp: Optional[str] = Field(None, description="Timestamp of the response in ISO format.")
