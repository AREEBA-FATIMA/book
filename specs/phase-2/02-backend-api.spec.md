# Specification: Backend API: Phase 2 Core API Endpoints

## Purpose
This specification defines the FastAPI project structure, core API endpoints, Pydantic models for requests and responses, and error handling standards for the Phase 2 backend. It ensures the API design supports Intelligent Interactivity, Secure & Personalized features, and Seamless Integration as per Constitution v2.0.0.

## Inputs & Dependencies

### Inputs
- **Prompt:** Define the FastAPI project structure, API endpoints (`/api/chat`, `/api/auth/*`, `/api/user/profile`, `/api/user/progress`), corresponding Pydantic models, and error handling standards.
    - **Target Audience:** Backend and frontend developers.
    - **Desired Tone:** Technical, precise, and unambiguous.
    - **Approximate Length:** Detailed definitions for all endpoints and models.
    - **Key Topics/Sections:** FastAPI project structure, API endpoints (paths, methods, descriptions), request/response Pydantic models, error handling.
- **Parameters:**
  - `bookTitle`: AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook (Phase 2)
  - `chapterNumber`: N/A
  - `chapterTitle`: N/A
  - `moduleName`: N/A
  - `componentName`: Backend API
  - `contentType`: MARKDOWN
  - `outputFilePath`: specs/phase-2/02-backend-api.spec.md
  - `docusaurusSpecificFields`: N/A

### Dependencies
- `constitution.md`: Ensures compliance with project governance and core principles (v2.0.0).
- `specs/phase-2/01-system-architecture.spec.md`: Provides context on the overall system architecture and tech stack.

## Expected Outputs

### Generated Files
- **Primary Output:** `specs/phase-2/02-backend-api.spec.md`
  - **Format:** MARKDOWN
  - **Content:** A detailed markdown file containing:
    - Description of a standard FastAPI project structure (e.g., `main.py`, `routers/`, `schemas/`, `dependencies/`).
    - Clear definitions for each API endpoint:
      - `POST /api/chat`: For user interaction with the RAG chatbot.
        - Request: Pydantic model for chat message (e.g., `ChatMessage(content: str, conversation_id: Optional[str])`).
        - Response: Pydantic model for chatbot response (e.g., `ChatResponse(response: str, citation_urls: List[str], conversation_id: str)`).
      - `POST /api/auth/*`: Authentication endpoints (e.g., `/api/auth/register`, `/api/auth/login`, `/api/auth/logout`). These should primarily leverage Better-Auth, with custom wrappers for project-specific needs if required.
        - Request/Response: Defined by Better-Auth's requirements, with explicit examples for register/login.
      - `GET /api/user/profile`: Retrieve authenticated user's profile information.
        - Response: Pydantic model for user profile (e.g., `UserProfile(user_id: str, email: str, learning_goals: List[str], language_preference: str)`).
      - `POST /api/user/progress`: Update a user's reading progress.
        - Request: Pydantic model for progress update (e.g., `ProgressUpdate(chapter_id: str, page_number: int, completed: bool)`).
        - Response: Pydantic model for confirmation (e.g., `StatusResponse(status: str)`).
    - Standardized error handling, including custom exceptions and HTTP status codes (e.g., `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, `500 Internal Server Error`).

### Docusaurus Integration
N/A.

## Constraints

1.  **AI-Only Generation:** All content, code, and configuration specified herein must be generated exclusively by Claude Code via Spec-Kit Plus. Manual human intervention or direct coding is strictly forbidden.
2.  **No Manual Edits:** Any modifications to generated output must originate from updates to this specification or other `.spec` files.
3.  **Constitution v2.0.0 Compliance:** The API design must strictly adhere to the principles outlined in `constitution.md` v2.0.0.
4.  **FastAPI Best Practices:** The API structure and implementation should follow recommended FastAPI best practices.
5.  **Secure API Design:** Endpoints must be designed with security in mind, including proper authentication, authorization, and input validation.
6.  **Pydantic for Data Validation:** All request and response bodies must use Pydantic models for data validation and serialization.
7.  **Clear Error Responses:** API error responses must be consistent and provide clear information for debugging and user feedback.

## Acceptance Criteria

*   The generated output file `specs/phase-2/02-backend-api.spec.md` exists at the specified path.
*   The FastAPI project structure is clearly described.
*   All specified API endpoints (`/api/chat`, `/api/auth/*`, `/api/user/profile`, `/api/user/progress`) are defined with their HTTP methods, paths, and clear descriptions.
*   Pydantic models for all major request and response bodies are provided.
*   Error handling standards, including relevant HTTP status codes, are clearly documented.
*   The API design aligns with the overall system architecture and `constitution.md` principles.

## Generation Instructions for Claude Code

Claude Code, using Spec-Kit Plus, is instructed to generate the `02-backend-api.spec.md` file. This file must provide a comprehensive definition of the Phase 2 backend API, including FastAPI project structure, endpoint details, Pydantic models, and error handling. Ensure strict adherence to Constitution v2.0.0 principles.

## Validation Checklist

### Content Validation
- [ ] Output content is coherent and grammatically correct.
- [ ] Technical accuracy is maintained.
- [ ] Adherence to Markdown formatting standards.

### Docusaurus Integration Validation
N/A

### Compliance Validation
- [ ] No evidence of manual edits in the generated files.
- [ ] Output is reproducible.
- [ ] API design aligns with Constitution v2.0.0 principles.

## Version Block

**Spec Version**: 1.0.0 | **Created**: 2025-12-06 | **Last Modified**: 2025-12-06
