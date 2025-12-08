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

# Ideally move valid API Key check to settings/startup
LLM_API_KEY = os.getenv("GOOGLE_API_KEY") or os.getenv("LLM_API_KEY")

router = APIRouter()

class PersonalizeRequest(BaseModel):
    content: str

class PersonalizeResponse(BaseModel):
    personalized_content: str

# Initialize LLM with explicit API key
# Initialize LLM with explicit API key
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key=LLM_API_KEY,
    temperature=0.7

)

# Prompt for rewriting
template = """You are an expert educational content adapter.
Rewrite the following text to suit a user who is:
- Software Experience: {software_exp}
- Hardware Experience: {hardware_exp}

Guidelines:
- If Beginner: Use simple language, analogies (e.g., explaining variables like boxes), and avoid dense jargon.
- If Intermediate: Use standard technical language but explain complex edge cases.
- If Expert: Be concise, high-bandwidth, focus on implementation details and advanced concepts. Omit basic tutorials.

Technical Text:
{content}
"""
prompt = ChatPromptTemplate.from_template(template)

@router.post("/personalize", response_model=PersonalizeResponse)
async def personalize_content(
    request: PersonalizeRequest, 
    current_user: Annotated[User, Depends(get_current_user)]
):
    if not LLM_API_KEY:
         raise HTTPException(status_code=500, detail="LLM API Key not configured.")
    
    chain = prompt | llm | StrOutputParser()
    
    try:
        response = chain.invoke({
            "software_exp": current_user.software_exp, 
            "hardware_exp": current_user.hardware_exp,
            "content": request.content
        })
        return PersonalizeResponse(personalized_content=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
