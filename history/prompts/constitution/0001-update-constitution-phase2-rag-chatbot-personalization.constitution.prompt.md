---
id: 0001
title: Update Constitution to Phase 2: RAG Chatbot & Personalization
stage: constitution
date: 2025-12-06
surface: agent
model: claude-haiku-4-5-20251001
feature: none
branch: 001-ai-book-spec-templates
user: user
command: /sp.constitution
labels: ["constitution", "phase-2", "rag-chatbot", "personalization"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests: null
---

## Prompt

```text
You are Spec-Kit Plus. Generate a formal and complete `constitution.md` update for Phase 2 of the project. This constitution will now govern "Phase 2: Intelligent RAG Chatbot & Personalization" in addition to the existing book creation.

# Project Title
AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook (Phase 2)

# Project Description
Phase 2 expands the static AI-generated textbook into a dynamic, intelligent learning platform. This includes integrating a RAG (Retrieval-Augmented Generation) chatbot, user authentication, and personalized learning experiences. All new features must continue to be spec-driven and AI-generated.

# Core Principles (New & Updated)
1.  **100% Spec-Driven Development (Maintained)**
    *   No manual code or content allowed.
    *   Everything is generated from `.spec` files.

2.  **Zero Manual Edits (Maintained)**
    *   Changes can only occur via Spec-Kit Plus specifications.

3.  **Intelligent Interactivity (New)**
    *   The book must support interactive AI queries via a RAG chatbot.
    *   Chatbot must answer questions based *strictly* on book content.

4.  **Secure & Personalized (New)**
    *   User authentication must be secure and privacy-focused.
    *   Content should adapt to user profiles (personalization) and language preferences (translation).

5.  **Seamless Integration (New)**
    *   The backend (FastAPI, Qdrant) must integrate seamlessly with the Docusaurus frontend.
    *   Deployment must handle both static assets and dynamic backend services (or clear separation).

# Tech Stack updates
*   **Frontend**: Docusaurus v3 (TypeScript) - *Existing*
*   **Backend**: FastAPI (Python) - *New*
*   **Vector DB**: Qdrant (Cloud) - *New*
*   **Auth**: Better-Auth - *New*
*   **AI Models**: Gemini 1.5 Pro / OpenAI GPT-4o - *New*
*   **Deployment**: GitHub Pages (Frontend), [Backend Hosting TBD]

# Requirements (Phase 2)
*   **RAG Chatbot**:
    *   Ingest book content into Qdrant.
    *   Provide accurate answers with citations.
    *   Maintain conversation history.
*   **Authentication**:
    *   Sign up / Login / Logout flows.
    *   User profile management.
*   **Personalization**:
    *   Track reading progress.
    *   Adaptive quizzes based on progress.
*   **Documentation**:
    *   Update `constitution.md` to reflect these changes.
    *   Ensure all new components are documented in `specs/`.

# Success Criteria
*   Chatbot answers 90%+ of book-related queries accurately.
*   Users can log in and see their profile.
*   "Deterministic Regeneration" principle applies to backend code as well.

# Governance
*   Constitution remains the highest authority.
*   Phase 2 specifications must be reviewed before generation.

# Version
*   Version: 2.0.0
*   Ratified: [Today's Date]

OUTPUT:
Return a fully formatted, professional `constitution.md` that incorporates these Phase 2 elements while preserving Phase 1 successes. Update the "Principles", "Tech Stack", and "Requirements" sections accordingly. Increment version to 2.0.0.
```

## Response snapshot

Updated `.specify/memory/constitution.md` to version 2.0.0, incorporating Phase 2 requirements for Intelligent RAG Chatbot & Personalization. Key updates include new core principles, an expanded tech stack (FastAPI, Qdrant, Better-Auth, Gemini/GPT-4o), and detailed requirements for chatbot, authentication, and personalization features. Templates `plan-template.md`, `spec-template.md`, and `tasks-template.md` are marked as pending for updates to align with the new constitution.

## Outcome

- ✅ Impact: Constitution updated to reflect Phase 2 scope and requirements.
- 🧪 Tests: N/A
- 📁 Files: 1 file modified: .specify/memory/constitution.md
- 🔁 Next prompts: Update template files: plan-template.md, spec-template.md, tasks-template.md.
- 🧠 Reflection: Successfully updated constitution. Proceed with template alignment.

## Evaluation notes (flywheel)

- Failure modes observed: Scripted PHR creation failed, resorted to agent-native approach.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Improve PHR script reliability or enhance agent-native PHR creation.
