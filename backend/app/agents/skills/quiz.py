from app.agents.base import AgentSkill
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from config import settings

class QuizSkill(AgentSkill):
    name = "quiz_generator"
    description = "Generates a multiple-choice quiz based on the context."

    def __init__(self):
        self.llm = ChatGoogleGenerativeAI(
            model="gemini-pro",
            google_api_key=settings.LLM_API_KEY or "",
            temperature=0.7
        )
        template = """You remain a helpful AI assistant.
        Generate a 3-question multiple-choice quiz based on the following text context.
        
        Format:
        **Question 1:** [Question text]
        A) [Option]
        B) [Option]
        C) [Option]
        D) [Option]
        *Correct Answer: [Option]*

        Context:
        {context}
        """
        self.prompt = ChatPromptTemplate.from_template(template)

    def can_handle(self, user_query: str) -> bool:
        keywords = ["quiz", "test", "exam", "questions"]
        return any(k in user_query.lower() for k in keywords)

    def execute(self, user_query: str, context: str) -> str:
        if not settings.LLM_API_KEY:
            return "Error: LLM API Key missing."
            
        chain = self.prompt | self.llm | StrOutputParser()
        try:
            # If context is empty, fallback or ask generic
            ctx = context if context else "General Artificial Intelligence"
            return chain.invoke({"context": ctx})
        except Exception as e:
            return f"Error generating quiz: {str(e)}"
