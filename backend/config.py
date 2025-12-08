import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env"), 
        extra='ignore'
    )

    # Qdrant can use URL or host/port
    QDRANT_URL: str | None = None
    QDRANT_HOST: str = "localhost"
    QDRANT_PORT: int = 6333
    QDRANT_API_KEY: str | None = None

    LLM_API_KEY: str
    LLM_MODEL_NAME: str = "gemini-1.5-flash"

    DATABASE_URL: str = "sqlite:///./sql_app.db"

settings = Settings()
