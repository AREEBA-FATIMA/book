# Architectural Plan: {{PROJECT_TITLE}}

## 1. Scope and Dependencies

### In Scope
- **Intelligent RAG Chatbot**: Implementation of a chatbot that answers questions based on book content, provides citations, and maintains conversation history.
- **User Authentication & Authorization**: Secure sign-up, login, logout, and user profile management using JWT.
- **Personalization Features**: Tracking user reading progress and adaptive quizzes.
- **Backend API**: Development of FastAPI services for chat interaction, authentication, and user data management.
- **Frontend Integration**: Docusaurus components for chat widget, navigation bar authentication, and user profile page.
- **Content Ingestion Pipeline**: Script for scraping Docusaurus content, chunking, embedding, and uploading to Qdrant.
- **Deployment**: Frontend to GitHub Pages, Backend to Render.

### Out of Scope
- Real-time communication features beyond chat (e.g., live collaborative editing).
- Advanced analytics dashboard for user engagement.
- Support for multiple LLM providers beyond Gemini/OpenAI (initially).
- Complex multi-tenancy or enterprise-level features.

### External Dependencies
- **Docusaurus (Frontend)**: Static site generation, content rendering.
- **FastAPI (Backend)**: API development, business logic.
- **Qdrant (Vector DB)**: Semantic search, vector storage.
- **LLM Provider (Gemini 1.5 Pro / OpenAI GPT-4o)**: Text generation, contextual understanding.
- **Better-Auth (Authentication Framework)**: User authentication flows and JWT management.
- **PostgreSQL (Production Database)**: User data storage.
- **Render (Backend Hosting)**: Deployment and management of FastAPI services.
- **GitHub Pages (Frontend Hosting)**: Deployment of Docusaurus frontend.

## 2. Key Decisions and Rationale

### Authentication Token Strategy
- **Decision**: JWT (JSON Web Tokens)
- **Options Considered**: JWT, Session-based cookies.
- **Trade-offs**:
    - *JWT*: Stateless, scalable for APIs, flexible for mobile/web clients. Requires careful handling of token storage (e.g., HTTP-only cookies for access tokens, refresh tokens) to mitigate XSS/CSRF.
    - *Session-based*: State-ful, simpler for traditional web apps, less scalable for distributed APIs.
- **Rationale**: JWT offers a stateless and scalable solution well-suited for API-driven applications, allowing for flexible authentication across different clients while maintaining security with proper implementation (e.g., refresh tokens stored securely).

### User Data Database
- **Decision**: PostgreSQL (Cloud-managed for production), SQLite (for local development).
- **Options Considered**: PostgreSQL, SQLite.
- **Trade-offs**:
    - *PostgreSQL*: Robust, scalable, ACID compliant, suitable for complex relational data and high-traffic production environments. Requires cloud-managed service setup.
    - *SQLite*: Simple, file-based, zero-configuration, good for local development and light loads. Limited scalability for production.
- **Rationale**: PostgreSQL provides the necessary robustness and scalability for a production-grade user database, while SQLite offers simplicity for local development, reducing setup overhead for developers.

### Backend Hosting Provider
- **Decision**: Render
- **Options Considered**: Render, Railway, Fly.io.
- **Trade-offs**:
    - *Render*: Managed service, good for web services and databases, often simpler to get started with.
    - *Railway*: Developer-focused platform, provides unified infrastructure.
    - *Fly.io*: Edge-first platform, good for global deployments.
- **Rationale**: Render offers a good balance of ease of use and features for web services, making it a solid choice for hosting the FastAPI backend, aligning with the "Seamless Integration" principle.

## 3. Interfaces and API Contracts

### Public APIs
Defined in `specs/phase-2/02-backend-api.spec.md`.
- `POST /api/chat`: Handles chat interactions.
    - Inputs: `ChatMessage` Pydantic model.
    - Outputs: `ChatResponse` Pydantic model.
    - Errors: `400 BadRequest`, `401 Unauthorized`, `500 InternalServerError`.
- `POST /api/auth/*`: Authentication endpoints (login, signup, logout).
    - Inputs: Pydantic models for user credentials.
    - Outputs: JWT tokens, user status.
    - Errors: `400 BadRequest`, `401 Unauthorized`, `403 Forbidden`.
- `GET /api/user/profile`: Retrieves user profile data.
    - Inputs: Authenticated user token.
    - Outputs: `UserProfile` Pydantic model.
    - Errors: `401 Unauthorized`, `404 NotFound`.
- `POST /api/user/progress`: Updates user reading progress.
    - Inputs: Authenticated user token, `ReadingProgressUpdate` Pydantic model.
    - Outputs: Success status.
    - Errors: `401 Unauthorized`, `400 BadRequest`.

### Versioning Strategy
- API versioning will be handled via URL prefixes (e.g., `/api/v1/`).

### Idempotency, Timeouts, Retries
- **Idempotency**: All `POST` operations that create resources will be designed to be idempotent where logical.
- **Timeouts**: Backend API calls will have configurable timeouts to prevent long-running requests.
- **Retries**: Frontend will implement exponential backoff retry mechanisms for transient network errors.

### Error Taxonomy
- Standard HTTP status codes (4xx for client errors, 5xx for server errors).
- Custom error codes and messages within the response body for specific application errors.

## 4. Non-Functional Requirements (NFRs) and Budgets

### Performance
- **p95 Latency**: Chat responses within 2 seconds. API responses within 500ms.
- **Throughput**: Support 100 concurrent chat users, 1000 authenticated users.
- **Resource Caps**: Backend services scaled horizontally with appropriate CPU/memory limits on Render.

### Reliability
- **SLOs**: 99.9% uptime for core API services.
- **Error Budgets**: Defined per service, with automated alerts for breaches.
- **Degradation Strategy**: If LLM provider is unavailable, provide a fallback message.

### Security
- **AuthN/AuthZ**: JWT-based authentication with role-based authorization where applicable.
- **Data Handling**: User data encrypted at rest and in transit.
- **Secrets Management**: Environment variables for API keys and database credentials.
- **Auditing**: Logging of authentication events and critical data modifications.

### Cost
- **Unit Economics**: Optimize Qdrant usage and LLM API calls to minimize costs per chat interaction.
- **Budget**: Monitor cloud provider costs monthly, aiming for cost-effective scaling.

## 5. Data Management and Migration

### Source of Truth
- **User Data**: PostgreSQL database.
- **Book Content (for RAG)**: Original Docusaurus markdown files, ingested into Qdrant.

### Schema Evolution
- Database schema changes will follow a migration script approach.

### Migration and Rollback
- Database migrations will be versioned and tested.
- Rollback procedures will be defined for deployments.

### Data Retention
- User conversation history will be retained for [X] months.
- Book content embeddings in Qdrant will be updated as book content changes.

## 6. Operational Readiness

### Observability
- **Logs**: Structured logging for all backend services (FastAPI, RAG pipeline).
- **Metrics**: Prometheus/Grafana for monitoring API performance, user activity, LLM usage.
- **Traces**: Distributed tracing for complex requests (e.g., chat interaction across multiple services).

### Alerting
- Thresholds for API errors, latency, and resource utilization.
- On-call owners assigned for critical alerts.

### Runbooks
- Runbooks for common operational tasks: deployment, rollback, troubleshooting, scaling.

### Deployment and Rollback strategies
- **Deployment**: CI/CD pipeline for automated builds and deployments to GitHub Pages (frontend) and Render (backend).
- **Rollback**: One-click rollback to previous stable versions for both frontend and backend.

### Feature Flags and Compatibility
- Feature flags for new features to enable phased rollout and A/B testing.
- Backward compatibility ensured for API changes where possible.

## 7. Risk Analysis and Mitigation

### Top 3 Risks
1.  **LLM Provider Downtime**:
    - **Blast Radius**: Chatbot functionality completely unavailable.
    - **Mitigation**: Implement fallback responses, notify users, explore multi-provider strategy.
2.  **Qdrant Performance/Cost**:
    - **Blast Radius**: Slow RAG responses, increased operational cost.
    - **Mitigation**: Optimize chunking/embedding, configure efficient retrieval, monitor usage/cost, explore caching.
3.  **Authentication Vulnerabilities**:
    - **Blast Radius**: User data breach, unauthorized access.
    - **Mitigation**: Regular security audits, strict input validation, secure token handling (HTTP-only cookies for refresh tokens), rate limiting.

## 8. Evaluation and Validation

### Definition of Done
- All features implemented according to specifications.
- Unit, integration, and end-to-end tests passing.
- Security scans and performance benchmarks met.
- Documentation updated (PHRs, ADRs, `constitution.md`).

### Output Validation
- Automated tests for API contract adherence, RAG accuracy, authentication flows.
- Manual testing for UI/UX and overall system functionality.
- Code reviews for security and best practices.

## 9. Architectural Decision Record (ADR)
- Potential ADRs:
    - ADR for Authentication Strategy (JWT vs. Session)
    - ADR for Production Database Choice (PostgreSQL vs. other SQL/NoSQL)
    - ADR for Backend Hosting Provider (Render vs. other cloud providers)

**Plan Version**: 1.0.0 | **Created**: {{DATE_ISO}} | **Last Modified**: {{DATE_ISO}}
