from abc import ABC, abstractmethod

class AgentSkill(ABC):
    """
    Abstract base class for all Agent Skills (Subagents).
    Each skill must define a name, description, and implement specific logic.
    """
    name: str
    description: str

    @abstractmethod
    def can_handle(self, user_query: str) -> bool:
        """
        Determines if this skill should handle the user query.
        Returns True if the intent matches the skill's capability.
        """
        pass

    @abstractmethod
    def execute(self, user_query: str, context: str) -> str:
        """
        Executes the skill logic.
        Args:
            user_query: The user's input text.
            context: Optional context (e.g., current chapter content).
        Returns:
            The agent's response as a string (Markdown supported).
        """
        pass
