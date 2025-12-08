from typing import List, Optional
from app.agents.base import AgentSkill
from app.agents.skills.quiz import QuizSkill # We will create this next

class SkillRegistry:
    def __init__(self):
        self.skills: List[AgentSkill] = []
        self._register_default_skills()
    
    def _register_default_skills(self):
        """Registers all available skills."""
        self.skills.append(QuizSkill())

    def get_handling_skill(self, query: str) -> Optional[AgentSkill]:
        """
        Iterates through registered skills to find one that can handle the query.
        Returns the first matching skill or None.
        """
        for skill in self.skills:
            if skill.can_handle(query):
                return skill
        return None

# Singleton instance
registry = SkillRegistry()
