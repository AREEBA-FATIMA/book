# Specification: Authentication & User Profiling - Phase 3 auth-user

## Purpose
This specification serves as a declarative blueprint for generating a specific artifact or set of artifacts within the AI/Spec-Driven Book project, particularly for Phase 3 (Authentication & User Profiling). It ensures adherence to the core principles of 100% Spec-Driven Development, Zero Manual Edits, Intelligent Interactivity, Secure & Personalized, and Seamless Integration as defined in `constitution.md` v2.0.0.

## Inputs & Dependencies

### Inputs
- **Prompt:** Provide comprehensive instructions for Claude Code to generate the artifact(s). This includes:
    - **Target Audience:** backend developers, frontend engineers, technical architects
    - **Desired Tone:** formal and technical, concise, detailed and explanatory
    - **Approximate Length:** medium-length markdown file
    - **Key Topics/Sections:**
        - User Stories
        - Functional Requirements
        - API Contracts
        - Database Schema
        - Acceptance Criteria
    - **Cross-references:** `constitution.md`
    - **Specific Examples/Code:** include Pydantic models for request/response for FastAPI, demonstrate React component structure
- **Parameters:**
  - `featureName`: Authentication & User Profiling
  - `phaseNumber`: 3
  - `artifactType`: auth-user
  - `outputFilePath`: `specs/001-user-auth-profile/spec.md`

### Dependencies
- `constitution.md`: Ensures compliance with project governance and core principles (v2.0.0).
- `specs/phase-3/01-system-architecture.spec.md`: Provides overall architectural context.
- `specs/phase-3/02-backend-api.spec.md`: Relevant for API-related specifications.
- `specs/phase-3/05-frontend-ui.spec.md`: Relevant for frontend components.
- **External Libraries/Frameworks:** `FastAPI`, `SQLModel`, `React`, `Docusaurus`

## Expected Outputs

### Generated Files
- **Primary Output:** `specs/001-user-auth-profile/spec.md`
  - **Format:** MARKDOWN
  - **Content:** A detailed artifact, such as a specification document, code file, or configuration, that fully satisfies the prompt and adheres to all constraints.

## Constraints

1.  **AI-Only Generation:** All content, code, and configuration specified herein must be generated exclusively by Claude Code via Spec-Kit Plus. Manual human intervention or direct coding is strictly forbidden.
2.  **No Manual Edits:** Any modifications to generated output must originate from updates to this specification or other `.spec` files.
3.  **Constitution v2.0.0 Compliance:** All generated artifacts must strictly adhere to the principles outlined in `constitution.md` v2.0.0.
4.  **Technology-Specific Standards:** FastAPI best practices, React component conventions, MDX formatting standards, SQLModel conventions.
5.  **Deterministic Output:** Given the same inputs and specifications, the generation process must yield identical outputs every time.
6.  **Security Best Practices:** All generated code and configurations must incorporate industry-standard security practices relevant to the artifact type (e.g., input validation, secure API handling, proper authentication using JWT).
7.  **Backend:** FastAPI.
8.  **Frontend:** Docusaurus (React).
9.  **Database:** SQLModel (SQLite for dev).
10. **Authentication Reference:** "Better-Auth" style flow (JWT).

## User Stories

*   As a new user, I want to securely sign up for an account so I can access personalized content and track my progress.
*   As a returning user, I want to securely sign in so I can continue my progress and access personalized features.
*   As a logged-in user, I want to view and manage my profile information, including my software and hardware experience, so that content can be tailored to me.

## Functional Requirements

1.  The system shall allow new users to register with an email, password, software experience level, and hardware experience level.
2.  The system shall allow registered users to log in with their email and password.
3.  The system shall return a JWT upon successful registration or login.
4.  The system shall validate user credentials during login.
5.  The system shall allow authenticated users to retrieve their profile information.
6.  The system shall store user software experience as one of: Beginner, Intermediate, or Expert.
7.  The system shall store user hardware experience as one of: Beginner, Intermediate, or Expert.
8.  The system shall secure user passwords by hashing and salting.

## API Contracts

### `POST /auth/register`
Registers a new user and creates their profile.

-   **Request Body:**
    ```json
    {
        "email": "user@example.com",
        "password": "securepassword123",
        "software_experience": "Beginner",
        "hardware_experience": "Intermediate"
    }
    ```
-   **Response Body (200 OK):**
    ```json
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "token_type": "bearer",
        "user_id": "a1b2c3d4-e5f6-7890-1234-567890abcdef"
    }
    ```
-   **Error Responses:**
    -   `400 Bad Request`: Invalid input fields (e.g., malformed email, weak password, invalid experience level).
    -   `409 Conflict`: Email already registered.

### `POST /auth/login`
Authenticates an existing user.

-   **Request Body:**
    ```json
    {
        "email": "user@example.com",
        "password": "securepassword123"
    }
    ```
-   **Response Body (200 OK):**
    ```json
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "token_type": "bearer",
        "user_id": "a1b2c3d4-e5f6-7890-1234-567890abcdef"
    }
    ```
-   **Error Responses:**
    -   `400 Bad Request`: Invalid input fields.
    -   `401 Unauthorized`: Invalid credentials.

### `GET /auth/me`
Retrieves the profile of the authenticated user.

-   **Request Headers:**
    -   `Authorization: Bearer <access_token>`
-   **Response Body (200 OK):**
    ```json
    {
        "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        "email": "user@example.com",
        "software_experience": "Beginner",
        "hardware_experience": "Intermediate"
    }
    ```
-   **Error Responses:**
    -   `401 Unauthorized`: Missing or invalid token.

## Database Schema (SQLModel)

```python
from typing import Optional
from uuid import UUID, uuid4
from sqlmodel import Field, SQLModel, Relationship
from enum import Enum

class ExperienceLevel(str, Enum):
    BEGINNER = "Beginner"
    INTERMEDIATE = "Intermediate"
    EXPERT = "Expert"

class UserBase(SQLModel):
    email: str = Field(unique=True, index=True)
    hashed_password: str

class User(UserBase, table=True):
    id: Optional[UUID] = Field(default_factory=uuid4, primary_key=True)

    profile: "Profile" = Relationship(back_populates="user")

class ProfileBase(SQLModel):
    software_experience: ExperienceLevel
    hardware_experience: ExperienceLevel

class Profile(ProfileBase, table=True):
    id: Optional[UUID] = Field(default_factory=uuid4, primary_key=True)
    user_id: UUID = Field(foreign_key="user.id", unique=True)

    user: User = Relationship(back_populates="profile")
```

## Acceptance Criteria

*   The generated output file (`specs/001-user-auth-profile/spec.md`) exists at the specified path.
*   The content of the generated file accurately reflects the requirements outlined in this specification.
*   All defined functional and non-functional requirements for the artifact are met.
*   The artifact is compatible with its intended integration points (FastAPI backend with Docusaurus frontend).
*   The Git history reflects only `.spec` file changes and the generated artifact, with no manual code edits.
*   Secure Signup and Signin flow is implemented.
*   Backend uses FastAPI.
*   Frontend uses Docusaurus (React).
*   Authentication follows JWT-based secure auth.
*   During Signup, Software Experience (Beginner/Intermediate/Expert) and Hardware Experience (Beginner/Intermediate/Expert) are strictly captured.
*   API Endpoints are defined for `/auth/register`, `/auth/login`, and `/auth/me`.
*   Database uses SQLModel (SQLite for dev) to store Users and their Profiles.

## Generation Instructions for Claude Code

Claude Code, using Spec-Kit Plus, is instructed to generate the artifact(s) as per the details in 'Expected Outputs', adhering to all 'Inputs & Dependencies' and 'Constraints'. Focus on creating the `auth-user` artifact based on the provided inputs and the specific requirements for Phase 3.

## Validation Checklist

### Content Validation
- [ ] Output content is coherent and grammatically correct.
- [ ] Technical accuracy is maintained.
- [ ] Adherence to relevant formatting standards (e.g., Markdown, Python, TypeScript).
- [ ] All specified key topics/sections are covered completely.

### Integration Validation
- [ ] The generated artifact seamlessly integrates with its intended dependencies.
- [ ] API contracts are correctly defined/implemented, if applicable.
- [ ] UI components function as expected with backend services, if applicable.

### Compliance Validation
- [ ] No evidence of manual edits in the generated files.
- [ ] Output is reproducible.
- [ ] Design and implementation align with Constitution v2.0.0 principles.
- [ ] Security best practices are demonstrably followed.

## Version Block

**Spec Version**: 1.0.0 | **Created**: 2025-12-07 | **Last Modified**: 2025-12-07
