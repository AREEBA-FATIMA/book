# Phase 2 Tasks: Intelligent RAG Chatbot & Personalization

## Phase 1: Setup - Core Infrastructure

- [x] T001 Create `backend/` directory in the monorepo root
  - File: `backend/` (directory creation)
  - Verification: Directory `backend/` exists.
- [x] T002 Initialize FastAPI project in `backend/`
  - File: `backend/main.py`, `backend/requirements.txt`
  - Verification: Basic FastAPI app runs successfully (`uvicorn backend.main:app --reload`).
- [x] T003 Configure Qdrant client library installation in `backend/requirements.txt`
  - File: `backend/requirements.txt`
  - Verification: `pip install -r backend/requirements.txt` completes without error.
- [x] T004 Define environment variables for Qdrant, LLM, and Database connections
  - File: `backend/.env.example` (template), `backend/config.py` (loading logic)
  - Verification: Environment variables are loaded correctly in FastAPI application.

## Phase 2: Foundational - Shared Components

- [x] T005 [P] Create base Pydantic models for `ChatMessage` and `ChatResponse`
  - File: `backend/app/models/chat.py`
  - Verification: Models can be instantiated with sample data.
- [x] T006 [P] Create base Pydantic models for `UserInDB` and `UserProfile`
  - File: `backend/app/models/user.py`
  - Verification: Models can be instantiated with sample data.
- [x] T007 Implement CORS middleware for FastAPI
  - File: `backend/main.py` (or `backend/app/middleware/cors.py`)
  - Verification: Frontend (local Docusaurus) can make requests to backend without CORS errors.

## Phase 3: Implement RAG Chatbot (User Story 1)

- [ ] T008 [US1] Create content ingestion script (`scripts/ingest.py`)
  - File: `scripts/ingest.py`
  - Verification: Script executes and connects to Qdrant successfully.
- [ ] T009 [US1] Implement Docusaurus content scraping logic in `scripts/ingest.py`
  - File: `scripts/ingest.py`
  - Verification: Script successfully scrapes markdown content from Docusaurus build output.
- [ ] T010 [US1] Implement text chunking and embedding generation in `scripts/ingest.py`
  - File: `scripts/ingest.py`
  - Verification: Text chunks are generated and embeddings are created for each chunk.
- [ ] T011 [US1] Implement Qdrant upload logic in `scripts/ingest.py`
  - File: `scripts/ingest.py`
  - Verification: Chunks and embeddings are successfully uploaded to Qdrant collection.
- [ ] T012 [US1] Execute initial content ingestion to populate Qdrant
  - File: (Execution of `scripts/ingest.py`)
  - Verification: Qdrant collection contains embedded book content.
- [ ] T013 [US1] Develop `POST /api/chat` endpoint in FastAPI
  - File: `backend/app/api/endpoints/chat.py`
  - Verification: Endpoint accepts `ChatMessage` and returns a placeholder `ChatResponse`.
- [ ] T014 [US1] Implement Qdrant retrieval logic in chat endpoint
  - File: `backend/app/services/rag.py`, `backend/app/api/endpoints/chat.py`
  - Verification: Chat endpoint retrieves relevant documents from Qdrant based on query.
- [ ] T015 [US1] Integrate LLM (Gemini/OpenAI) for response generation in chat endpoint
  - File: `backend/app/services/rag.py`, `backend/app/api/endpoints/chat.py`
  - Verification: Chat endpoint uses LLM to generate responses based on retrieved context.
- [ ] T016 [US1] Add citation extraction and formatting to chat response
  - File: `backend/app/services/rag.py`
  - Verification: Chat responses include accurate citations from the retrieved content.
- [ ] T017 [US1] Implement RAG accuracy unit and integration tests
  - File: `backend/app/tests/test_rag.py`
  - Verification: All RAG tests pass, ensuring accuracy and performance.

## Phase 4: Implement Authentication System (User Story 2)

- [ ] T018 [US2] Install and configure Better-Auth library in `backend/requirements.txt`
  - File: `backend/requirements.txt`, `backend/main.py`
  - Verification: Better-Auth is successfully integrated and initialized.
- [ ] T019 [US2] Set up User Database schema (SQLite for development)
  - File: `backend/app/database.py`, `backend/app/models/user.py` (SQLAlchemy/SQLModel)
  - Verification: Database tables for users are created on application startup/migration.
- [ ] T020 [US2] Implement user registration endpoint (`POST /api/auth/register`)
  - File: `backend/app/api/endpoints/auth.py`
  - Verification: New users can register with hashed passwords.
- [ ] T021 [US2] Implement user login endpoint (`POST /api/auth/login`)
  - File: `backend/app/api/endpoints/auth.py`
  - Verification: Registered users can log in and receive JWT token.
- [ ] T022 [US2] Implement user logout endpoint (`POST /api/auth/logout`)
  - File: `backend/app/api/endpoints/auth.py`
  - Verification: User sessions/tokens can be invalidated.
- [ ] T023 [US2] Implement `GET /api/user/profile` endpoint
  - File: `backend/app/api/endpoints/user.py`
  - Verification: Authenticated users can retrieve their profile data.
- [ ] T024 [US2] Implement `POST /api/user/progress` endpoint
  - File: `backend/app/api/endpoints/user.py`
  - Verification: Authenticated users can update their reading progress.
- [ ] T025 [US2] Implement authentication security verification tests
  - File: `backend/app/tests/test_auth.py`
  - Verification: All authentication tests pass, covering secure token handling, input validation, and access control.

## Phase 5: Frontend Integration (User Story 3)

- [ ] T026 [P] [US3] Create `ChatWidget` React component in Docusaurus
  - File: `frontend/src/components/ChatWidget.tsx`
  - Verification: Component renders in Docusaurus application.
- [ ] T027 [US3] Implement chat message display and input in `ChatWidget`
  - File: `frontend/src/components/ChatWidget.tsx`
  - Verification: User can type messages and see conversation history displayed.
- [ ] T028 [US3] Connect `ChatWidget` to `POST /api/chat` endpoint
  - File: `frontend/src/components/ChatWidget.tsx`, `frontend/src/api/chat.ts` (API client)
  - Verification: Chat messages are sent to backend and responses are displayed.
- [ ] T029 [P] [US3] Create `NavBarAuth` React component for Login/Logout
  - File: `frontend/src/theme/Navbar/UserAuth.tsx` (or similar custom theme component)
  - Verification: Component renders Login/Logout buttons in navigation bar.
- [ ] T030 [US3] Integrate `NavBarAuth` with authentication API endpoints
  - File: `frontend/src/theme/Navbar/UserAuth.tsx`, `frontend/src/api/auth.ts` (API client)
  - Verification: Users can log in/out via the UI, and UI state reflects authentication status.
- [ ] T031 [P] [US3] Create `ProfilePage` React component for user dashboard
  - File: `frontend/src/pages/profile.tsx`
  - Verification: Profile page renders and displays placeholder user data.
- [ ] T032 [US3] Connect `ProfilePage` to `GET /api/user/profile` and `POST /api/user/progress`
  - File: `frontend/src/pages/profile.tsx`, `frontend/src/api/user.ts` (API client)
  - Verification: Profile page displays actual user data and allows progress updates.
- [ ] T033 [P] [US3] Implement React Context/Hooks for global authentication state management
  - File: `frontend/src/contexts/AuthContext.tsx`, `frontend/src/hooks/useAuth.ts`
  - Verification: Auth state is accessible and updated across relevant frontend components.
- [ ] T034 [US3] Implement API client (Axios/Fetch) setup for backend communication
  - File: `frontend/src/api/index.ts`
  - Verification: Frontend can reliably communicate with all backend API endpoints.
- [ ] T035 [US3] Implement frontend integration end-to-end tests
  - File: `frontend/e2e/integration.test.ts`
  - Verification: All end-to-end tests pass, covering chat, authentication, and profile interactions.

## Phase 6: Polish & Cross-Cutting Concerns

- [ ] T036 Review and refine error handling across frontend and backend
  - File: `backend/app/`, `frontend/src/`
  - Verification: Consistent error responses and user-friendly error messages.
- [ ] T037 Optimize Qdrant usage and LLM API calls for cost efficiency
  - File: `backend/app/services/rag.py`
  - Verification: Monitored usage shows optimized costs per interaction.
- [ ] T038 Update documentation (`constitution.md`, `specs/`) with latest implementation details
  - File: `constitution.md`, `specs/phase-2/*.spec.md`, `specs/phase-2/plan.md`
  - Verification: All documentation accurately reflects the implemented system.
- [ ] T039 Set up CI/CD pipelines for automated deployment to GitHub Pages and Render
  - File: `.github/workflows/main.yml`
  - Verification: Automated deployments trigger and complete successfully.

## Task Dependencies

- Phase 1 tasks are foundational for all subsequent phases.
- Phase 2 tasks are foundational for Phase 3, 4, and 5.
- Phase 3 tasks (RAG Chatbot) are independent of Phase 4 (Auth) and Phase 5 (Frontend for Auth) in core implementation, but Frontend integration in Phase 5 depends on both Phase 3 and 4 completion.
- Phase 4 tasks (Authentication) are independent of Phase 3 (RAG Chatbot) but Frontend integration in Phase 5 depends on both Phase 3 and 4 completion.
- Phase 5 tasks (Frontend Integration) depend on the completion of Phase 3 and Phase 4.
- Phase 6 tasks (Polish & Cross-Cutting Concerns) depend on the completion of all other phases.

## Parallel Execution Examples

- **Phase 1 Setup**:
  - `T001 Create backend/ directory` and `T002 Initialize FastAPI project` could be done sequentially, but `T003 Configure Qdrant client` can be done in parallel once `T002` is started.
- **Phase 3 (RAG Chatbot)** and **Phase 4 (Authentication)** can be developed in parallel as their core backend logic has minimal direct dependencies, integrating later in Phase 5.
- Within **Phase 5 (Frontend Integration)**:
  - `T026 Create ChatWidget` and `T029 Create NavBarAuth` and `T031 Create ProfilePage` can be developed in parallel.
  - `T033 Implement React Context/Hooks` can start in parallel with other frontend component development.

## Implementation Strategy

The project will follow an iterative, incremental delivery approach. An MVP for Phase 2 would focus on core RAG Chatbot functionality (Phase 3) and basic user authentication (Phase 4), followed by minimal frontend integration (sub-tasks of Phase 5). Subsequent iterations will build out personalization features, advanced UI/UX, and comprehensive testing.

**Tasks Version**: 1.0.0 | **Created**: 2025-12-06 | **Last Modified**: 2025-12-06
