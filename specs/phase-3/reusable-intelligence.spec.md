# Specification: Reusable Intelligence & Subagents (Bonus 4)

## 1. Introduction
This feature enhances the RAG Chatbot by introducing "Reusable Intelligence" via Subagents and Agent Skills. This modular architecture allows the chatbot to perform specific tasks (like generating quizzes) beyond simple Q&A. This fulfills Bonus 4.

## 2. User Stories
- **US4.1:** As a student, I want to ask the chatbot to "Give me a quiz on Chapter 1" and have it switch to a "Quiz Agent" to generate questions.
- **US4.2:** As a developer, I want a standard `AgentSkill` interface so I can add new capabilities (e.g., "Code Reviewer", "Math Solver") without modifying the core chat logic.
- **US4.3:** As a student, I want the chatbot to seamlessly switch between general conversation and specific skills based on my intent.

## 3. Architecture & Concepts

### 3.1 Agent Skill Interface
We will define a base class `AgentSkill` (or Protocol) that all subagents must implement.
```python
class AgentSkill(ABC):
    name: str
    description: str
    
    @abstractmethod
    def can_handle(self, user_query: str) -> bool:
        """Determines if this skill should handle the query."""
        pass

    @abstractmethod
    def execute(self, user_query: str, context: str) -> str:
        """Executes the skill logic."""
        pass
```

### 3.2 Quiz Generator Agent (The Proof of Concept)
-   **Name:** `quiz_generator`
-   **Trigger:** User asks for "quiz", "test", "exam".
-   **Logic:**
    1.  Identify the topic from the query or current chapter context.
    2.  Use LLM to generate 3 multiple-choice questions.
    3.  Return questions formatted in Markdown.

## 4. Acceptance Criteria
1.  **Skill Registry:**
    -   A mechanism to register skills in the main Chat Endpoint.
    -   File: `backend/app/agents/registry.py`.
2.  **Intent Detection:**
    -   The main chat loop must check `skill.can_handle(query)` before defaulting to RAG.
    -   If a skill matches, delegate execution to `skill.execute()`.
3.  **Quiz Output:**
    -   Must produce valid Markdown with: Question text, Options (A, B, C, D), and Answer Key (hidden or at bottom).

## 5. Technical Design

### 5.1 Modified Chat Flow
Current: `Retrieve -> Generate -> Return`
New:
```text
1. Receive Query
2. Check Skills Registry
   - Loop through skills: if skill.can_handle(query) -> return skill.execute()
3. If no skill matches -> Proceed to standard RAG (Retrieve -> Generate -> Return)
```

### 5.2 Folder Structure
```text
backend/app/
  agents/
    __init__.py
    base.py       # AgentSkill abstract class
    registry.py   # Manager to load skills
    skills/
       quiz.py    # The specific Quiz Subagent
```

## 6. Future Extensibility
This design allows adding infinite "Bonus" features (e.g., "Summarize Agent", "Flashcard Agent") by simply adding a file in `agents/skills/` and registering it.
