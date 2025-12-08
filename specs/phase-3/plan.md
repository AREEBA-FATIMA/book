# Phase 3 Implementation Plan: Bonus Features

## Goal
Implement Reusable Intelligence, Authentication, Personalization, and Translation features strictly following the generated Specifications.

## Specifications Reference
This plan executes the following specs:
1.  **Bonus 5**: [`authentication-profiling.spec.md`](./authentication-profiling.spec.md)
2.  **Bonus 6 & 7**: [`personalization-translation.spec.md`](./personalization-translation.spec.md)
3.  **Bonus 4**: [`reusable-intelligence.spec.md`](./reusable-intelligence.spec.md)

## Execution Steps

### Step 1: Authentication & Profiling (Bonus 5)
**Objective**: Enable strict signup with 'Software/Hardware Experience' levels.
-   [NEW] `backend/app/models/user.py`: Define `User` model with `software_exp`, `hardware_exp` Enums.
-   [NEW] `backend/app/database.py`: Configure SQLModel/SQLite.
-   [NEW] `backend/app/api/endpoints/auth.py`: Implement `/register` (hashing), `/login` (access_token), `/me`.
-   [MODIFY] `backend/main.py`: Include Auth router.
-   **Verification**: Run `pytest backend/app/tests/test_auth.py`.

### Step 2: Personalization & Translation (Bonus 6 & 7)
**Objective**: Use Gemini to rewrite or translate content based on User Profile.
-   [NEW] `backend/app/api/endpoints/personalize.py`: Implement `/personalize` using User's experience level from context.
-   [NEW] `backend/app/api/endpoints/translate.py`: Implement `/translate` for professional Urdu translation.
-   [MODIFY] `backend/main.py`: Include Personalize/Translate routers.
-   **Verification**: Run `curl` tests against endpoints with mock tokens.

### Step 3: Reusable Intelligence (Bonus 4)
**Objective**: Upgrade Chatbot to use Subagents.
-   [NEW] `backend/app/agents/base.py`: Define `AgentSkill` interface.
-   [NEW] `backend/app/agents/skills/quiz.py`: Implement `QuizSkill`.
-   [MODIFY] `backend/app/api/endpoints/chat.py`: Add Intent Detection loop -> Delegate to Skill or Fallback to RAG.
-   **Verification**: Test query "Give me a quiz" vs "What is AI".
