# Specification: Authentication & User Profiling (Bonus 5)

## 1. Introduction
This feature implements secure user authentication and profiling to enable personalized learning experiences, fulfilling Bonus 5. It aligns with "Better-Auth" principles by offering secure, session-based (via JWT) authentication and extensible user profiles.

## 2. User Stories
- **US5.1:** As a student, I want to sign up with my email, password, and full name so I can create a unique identity on the platform.
- **US5.2:** As a student, I MUST specify my **Software Experience** (Beginner, Intermediate, Expert) during signup so the system knows my coding background.
- **US5.3:** As a student, I MUST specify my **Hardware Experience** (Beginner, Intermediate, Expert) during signup so the system knows my robotics background.
- **US5.4:** As a student, I want to log in securely using my credentials to access personalized chapter content.
- **US5.5:** As a student, I want to view my profile details to confirm my experience levels are recorded correctly.

## 3. Acceptance Criteria
1.  **Signup Endpoint (`POST /api/auth/register`)**:
    -   Accepts `email`, `password`, `full_name`, `software_exp`, `hardware_exp`.
    -   Validates `software_exp` and `hardware_exp` are strictly one of: ["beginner", "intermediate", "expert"].
    -   Hashes password using `bcrypt` before storage.
    -   Returns 201 Created on success.
    -   Returns 400 Bad Request if email already exists.
2.  **Login Endpoint (`POST /api/auth/login`)**:
    -   Accepts `username` (email) and `password`.
    -   Validates credentials against stored hash.
    -   Returns a JWT `access_token` with a configured expiration (e.g., 30 mins).
3.  **Profile Endpoint (`GET /api/auth/me`)**:
    -   Requires valid Bearer Token in `Authorization` header.
    -   Returns JSON object: `{ "email": "...", "full_name": "...", "software_exp": "...", "hardware_exp": "..." }`.
    -   Returns 401 Unauthorized if token is missing or invalid.

## 4. Technical Design

### 4.1 Database Schema (SQLModel)
We will use SQLModel (SQLAlchemy) with SQLite for development ease, but structured for migration to Postgres if needed.

```python
from sqlmodel import SQLModel, Field
from typing import Optional

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)
    hashed_password: str
    full_name: Optional[str] = None
    software_exp: str = Field(description="Level: beginner, intermediate, expert")
    hardware_exp: str = Field(description="Level: beginner, intermediate, expert")
```

### 4.2 Security Architecture
-   **Library:** `passlib[bcrypt]` for hashing.
-   **Token Standard:** JWT (JSON Web Tokens) via `python-jose`.
-   **Flow:** Stateless authentication. Server issues token; Client (Docusaurus) stores it (localStorage/cookie) and sends it with every API request.
-   **Better-Auth Alignment:** While we implemented a custom FastAPI backed, the flow mirrors Better-Auth's secure session handling concepts suitable for a full-stack App.

## 5. API Contract

### POST /api/auth/register
**Request:**
```json
{
  "email": "student@panaversity.org",
  "password": "StrongPassword123!",
  "full_name": "Areeba Fatima",
  "software_exp": "intermediate",
  "hardware_exp": "beginner"
}
```
**Response (200 OK):**
```json
{
  "id": 1,
  "email": "student@panaversity.org",
  "full_name": "Areeba Fatima",
  "software_exp": "intermediate",
  "hardware_exp": "beginner"
}
```

### POST /api/auth/login
**Request:** `OAuth2PasswordRequestForm` (x-www-form-urlencoded)
- `username`: student@panaversity.org
- `password`: StrongPassword123!

**Response (200 OK):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsIn...",
  "token_type": "bearer"
}
```
