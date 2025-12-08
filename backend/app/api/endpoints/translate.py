from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Annotated
from app.models.user import User
from app.api.endpoints.auth import get_current_user
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

LLM_API_KEY = os.getenv("GOOGLE_API_KEY") or os.getenv("LLM_API_KEY")

router = APIRouter()

class TranslateRequest(BaseModel):
    content: str
    target_language: str = "ur"

class TranslateResponse(BaseModel):
    translated_content: str

# Initialize LLM with explicit API key
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key=LLM_API_KEY,
    temperature=0.3
)

# Prompt for translation
template = """You are an expert technical translator.
Translate the following technical text into professional Urdu.

Rules:
1. Preserve all Markdown formatting (headers, bold, lists).
2. DO NOT translate Code Blocks, Variable Names, or Library Names (keep them in English).
3. Use standard Urdu technical terminology where appropriate, or keep the English term in brackets.
4. Tone: Professional, Educational.

Text:
{content}
"""
prompt = ChatPromptTemplate.from_template(template)

@router.post("/translate", response_model=TranslateResponse)
async def translate_content(
    request: TranslateRequest,
    current_user: Annotated[User, Depends(get_current_user)] 
):
    # Added Auth dependency to ensure only logged users use this (Bonus requirement)
    if not LLM_API_KEY:
         raise HTTPException(status_code=500, detail="LLM API Key not configured.")
    
    chain = prompt | llm | StrOutputParser()
    
    try:
        response = chain.invoke({"content": request.content})
        return TranslateResponse(translated_content=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
