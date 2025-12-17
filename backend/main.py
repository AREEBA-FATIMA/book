from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import chat, auth, personalize, translate
from app.database import create_db_and_tables

# --- Rate Limiting Imports (Conceptual - requires installation) ---
# from fastapi_limiter import FastAPILimiter
# import redis.asyncio as redis
# ------------------------------------------------------------------

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield

app = FastAPI(lifespan=lifespan)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Rate Limiting Startup (Conceptual - requires Redis and fastapi-limiter) ---
# @app.on_event("startup")
# async def startup():
#     # Connect to a Redis instance for rate limiting (replace with your Redis connection string)
#     redis_connection = redis.from_url("redis://localhost:6379", encoding="utf-8", decode_responses=True)
#     await FastAPILimiter.init(redis_connection)
# ---------------------------------------------------------------------------------

app.include_router(chat.router, prefix="/api")
app.include_router(auth.router, prefix="/api")
app.include_router(personalize.router, prefix="/api")
app.include_router(translate.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Hello World"}
