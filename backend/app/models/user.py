from typing import Optional
from sqlmodel import Field, SQLModel

class UserBase(SQLModel):
    email: str = Field(index=True, unique=True)
    full_name: Optional[str] = None
    software_exp: str = Field(default="beginner", description="Level: beginner, intermediate, expert")
    hardware_exp: str = Field(default="beginner", description="Level: beginner, intermediate, expert")

class User(UserBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    hashed_password: str

class UserCreate(UserBase):
    password: str

class UserRead(UserBase):
    id: int
