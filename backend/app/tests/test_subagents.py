from fastapi.testclient import TestClient
from unittest.mock import patch
from app.main import app
from app.agents.base import AgentSkill
from app.agents.registry import SkillRegistry

client = TestClient(app)

class MockSkill(AgentSkill):
    name = "mock_skill"
    description = "Mock Skill"
    def can_handle(self, user_query: str) -> bool:
        return "mock" in user_query
    def execute(self, user_query: str, context: str) -> str:
        return "Mock Skill Handling"

@patch("app.agents.registry.registry.get_handling_skill")
@patch("app.api.endpoints.chat.get_retriever")
@patch("app.api.endpoints.chat.generate_answer")
def test_chat_delegation(mock_gen, mock_retriever, mock_registry_get):
    # Setup
    mock_retriever.return_value = ("context", [])
    mock_skill = MockSkill()
    
    # Test 1: Subagent Triggered
    mock_registry_get.return_value = mock_skill
    res = client.post("/api/chat", json={"content": "run mock skill", "role": "user"})
    assert res.status_code == 200
    assert res.json()["response"] == "Mock Skill Handling"
    mock_gen.assert_not_called()
    
    # Test 2: Standard RAG (No skill)
    mock_registry_get.return_value = None
    mock_gen.return_value = "RAG Answer"
    res = client.post("/api/chat", json={"content": "what is AI", "role": "user"})
    assert res.json()["response"] == "RAG Answer"
    mock_gen.assert_called()

def test_quiz_skill_logic():
    # Helper to test the actual QuizSkill class logic (simple unit test)
    from app.agents.skills.quiz import QuizSkill
    skill = QuizSkill()
    assert skill.can_handle("make a quiz") is True
    assert skill.can_handle("what is ai") is False
