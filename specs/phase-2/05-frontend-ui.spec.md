# Specification: Frontend Integration: Phase 2 UI Components & API Interaction

## Purpose
This specification defines the frontend UI components, state management strategy, and API client setup for Phase 2 of the AI/Spec-Driven Book project. It covers the `ChatWidget`, `NavBarAuth`, and `ProfilePage` components, ensuring they integrate seamlessly with the backend API and provide a personalized user experience as per Constitution v2.0.0.

## Inputs & Dependencies

### Inputs
- **Prompt:** Detail the required frontend components (`ChatWidget`, `NavBarAuth`, `ProfilePage`), state management for authentication, and the API client setup to interact with the backend.
    - **Target Audience:** Frontend developers, UI/UX designers.
    - **Desired Tone:** Technical, practical, and focused on user experience.
    - **Approximate Length:** Detailed descriptions for each component and integration strategy.
    - **Key Topics/Sections:** UI components (functionality, appearance), state management (React Context/Hooks), API client (setup, usage).
- **Parameters:**
  - `bookTitle`: AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook (Phase 2)
  - `chapterNumber`: N/A
  - `chapterTitle`: N/A
  - `moduleName`: N/A
  - `componentName`: Frontend Integration
  - `contentType`: MARKDOWN
  - `outputFilePath`: specs/phase-2/05-frontend-ui.spec.md
  - `docusaurusSpecificFields`: N/A

### Dependencies
- `constitution.md`: Ensures compliance with project governance and core principles (v2.0.0), especially "Intelligent Interactivity," "Secure & Personalized," and "Seamless Integration."
- `specs/phase-2/01-system-architecture.spec.md`: Provides context on the overall system architecture.
- `specs/phase-2/02-backend-api.spec.md`: Defines the API endpoints the frontend will consume.

## Expected Outputs

### Generated Files
- **Primary Output:** `specs/phase-2/05-frontend-ui.spec.md`
  - **Format:** MARKDOWN
  - **Content:** A detailed markdown file containing:
    - **UI Components:**
      - `ChatWidget`:
        - Description: A floating, draggable chat interface on the Docusaurus site.
        - Functionality: Allows users to type questions, displays chatbot responses with citations, maintains conversation history in the UI.
        - Integration: Interacts with `POST /api/chat`.
      - `NavBarAuth`:
        - Description: Component to display login/logout buttons and user status in the Docusaurus navigation bar.
        - Functionality: Dynamically shows "Login" or "Logout" based on authentication state; clicking "Login" redirects to login page, "Logout" triggers API call and updates state.
        - Integration: Interacts with `/api/auth/*` endpoints.
      - `ProfilePage`:
        - Description: A dedicated Docusaurus page (`/profile`) for authenticated users to view and manage their profile.
        - Functionality: Displays user email, learning goals, language preference, and reading progress. Allows editing these fields.
        - Integration: Interacts with `GET /api/user/profile` and `POST /api/user/progress`.
    - **State Management:**
      - Strategy: React Context API or custom React Hook (`useAuth`) to manage global authentication state (e.g., `isAuthenticated`, `userProfile`, `isLoading`).
      - Implementation: Context Provider at a high level in the Docusaurus app, accessible by all relevant components.
    - **API Client Setup:**
      - Library: Axios or Fetch API for making HTTP requests to the FastAPI backend.
      - Configuration: Base URL setup, handling of authentication tokens (e.g., JWT in headers), and interceptors for error handling or request logging.
      - Utility: A centralized `api.ts` file for all backend API calls.

### Docusaurus Integration
- **Page Generation:** `ProfilePage` will be a standard Docusaurus page, generated or linked in configuration.
- **Component Placement:** `ChatWidget` dynamically loaded, `NavBarAuth` integrated into existing Docusaurus navbar via swizzling or custom plugin if necessary.
- **Theming:** Components should adhere to Docusaurus theming for consistent UI.

## Constraints

1.  **AI-Only Generation:** All content, code, and configuration specified herein must be generated exclusively by Claude Code via Spec-Kit Plus. Manual human intervention or direct coding is strictly forbidden.
2.  **No Manual Edits:** Any modifications to generated output must originate from updates to this specification or other `.spec` files.
3.  **Constitution v2.0.0 Compliance:** Frontend components and integration must strictly adhere to the principles outlined in `constitution.md` v2.0.0, especially "Intelligent Interactivity," "Secure & Personalized," and "Seamless Integration."
4.  **React Best Practices:** Frontend components should follow React best practices for state management, component composition, and performance.
5.  **Docusaurus Compatibility:** All frontend modifications must be fully compatible with Docusaurus v3 architecture and theming.
6.  **Responsive Design:** All UI components must be fully responsive and provide an optimal user experience across various devices and screen sizes.
7.  **Error Handling (UI):** Frontend should gracefully handle API errors and provide informative feedback to the user.

## Acceptance Criteria

*   The generated output file `specs/phase-2/05-frontend-ui.spec.md` exists at the specified path.
*   `ChatWidget`, `NavBarAuth`, and `ProfilePage` components are clearly defined with their functionality and integration points.
*   A state management strategy for authentication using React Context/Hooks is outlined.
*   The API client setup (Axios/Fetch) for interacting with the backend is specified.
*   The frontend integration design aligns with the overall system architecture and `constitution.md` principles.
*   The UI components are visually consistent with Docusaurus theming.

## Generation Instructions for Claude Code

Claude Code, using Spec-Kit Plus, is instructed to generate the `05-frontend-ui.spec.md` file. This file must detail the required frontend UI components (`ChatWidget`, `NavBarAuth`, `ProfilePage`), state management for authentication, and the API client setup to interact with the backend. Ensure strict adherence to Constitution v2.0.0 principles.

## Validation Checklist

### Content Validation
- [ ] Output content is coherent and grammatically correct.
- [ ] Technical accuracy is maintained.
- [ ] Adherence to Markdown formatting standards.

### Docusaurus Integration Validation
- [ ] Component placement strategy (navbar, dynamic, dedicated page) is clear.
- [ ] Adherence to Docusaurus theming and extension mechanisms is implicitly or explicitly stated.

### Compliance Validation
- [ ] No evidence of manual edits in the generated files.
- [ ] Output is reproducible.
- [ ] Frontend design aligns with Constitution v2.0.0 principles.

## Version Block

**Spec Version**: 1.0.0 | **Created**: 2025-12-06 | **Last Modified**: 2025-12-06
