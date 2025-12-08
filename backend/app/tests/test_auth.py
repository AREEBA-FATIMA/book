from fastapi.testclient import TestClient
from sqlmodel import Session, SQLModel, create_engine
from app.main import app
from app.database import get_session
import pytest

client = TestClient(app)

# Use in-memory SQLite for testing
sqlite_file_name = "database_test.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
engine = create_engine(sqlite_url, connect_args={"check_same_thread": False})

def create_test_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_test_session():
    with Session(engine) as session:
        yield session

app.dependency_overrides[get_session] = get_test_session

@pytest.fixture(name="session")
def session_fixture():
    create_test_db_and_tables()
    with Session(engine) as session:
        yield session
    SQLModel.metadata.drop_all(engine)

def test_register_flow_bonus(session: Session):
    # Test valid registration with bonus fields
    response = client.post(
        "/api/auth/register",
        json={
            "email": "bonus@test.com",
            "password": "pass",
            "full_name": "Bonus User",
            "software_exp": "expert",
            "hardware_exp": "beginner"
        },
    )
    assert response.status_code == 200, response.text
    data = response.json()
    assert data["software_exp"] == "expert"
    assert data["hardware_exp"] == "beginner"

def test_register_invalid_enum(session: Session):
    # Test validation for bonus fields
    response = client.post(
        "/api/auth/register",
        json={
            "email": "fail@test.com",
            "password": "pass",
            "software_exp": "guru", # Invalid enum
            "hardware_exp": "beginner"
        },
    )
    assert response.status_code == 400

def test_login_and_protect_route(session: Session):
    # Register
    client.post(
        "/api/auth/register",
        json={
            "email": "auth@test.com",
            "password": "pass",
            "software_exp": "intermediate",
            "hardware_exp": "intermediate"
        },
    )
    
    # Login
    login_res = client.post(
        "/api/auth/login",
        data={"username": "auth@test.com", "password": "pass"},
    )
    assert login_res.status_code == 200
    token = login_res.json()["access_token"]
    
    # Access Protected Route
    me_res = client.get(
        "/api/auth/me",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert me_res.status_code == 200
    assert me_res.json()["email"] == "auth@test.com"
