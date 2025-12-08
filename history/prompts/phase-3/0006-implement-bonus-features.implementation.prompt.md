---
id: 0006
title: Implement Phase 3 Bonus Features
stage: implementation
date: 2025-12-07
surface: agent
model: gemini-pro-1.5
feature: phase-3
branch: main
user: user
command: /run.impl
labels: ["impl", "bonus", "phase-3"]
links:
  spec: specs/phase-3/tasks.md
  ticket: null
  adr: null
  pr: null
files:
- backend/app/models/user.py
- backend/app/api/endpoints/auth.py
- backend/app/api/endpoints/personalize.py
- backend/app/api/endpoints/translate.py
- backend/app/agents/
tests:
- backend/app/tests/test_auth.py
- backend/app/tests/test_personalize.py
- backend/app/tests/test_subagents.py

---

## Prompt

```text
Act as a Lead Developer. Implement the features described in `specs/phase-3/tasks.md`.

**Tasks:**
1.  **Auth (Bonus 5):** User Model, Signup/Login Endpoints, Profile.
2.  **Personalization (Bonus 6):** Content Rewrite Endpoint.
3.  **Translation (Bonus 7):** Urdu Translation Endpoint.
4.  **Subagents (Bonus 4):** Skill Registry, Quiz Generator.

Verify implementation with `pytest`.
```

## Response snapshot

```text
Implementation complete.
- Created `User` model with experience fields.
- Implemented `/api/auth` endpoints.
- Implemented `/api/personalize` and `/api/translate`.
- Implemented `QuizSkill` subagent logic.
- Verified with unit tests (All Green).
```

## Outcome

- ✅ Impact: All Bonus Features implemented.
- 🧪 Tests: 3 new test files created and passed.
- 📁 Files: Backend Updated.
- 🔁 Next prompts: Frontend Integration (Phase 4).
