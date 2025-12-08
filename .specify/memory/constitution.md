<!--
Sync Impact Report:
Version change: 1.2.0 -> 2.0.0
List of modified principles:
  - I. 100% Spec-Driven Development (Updated)
  - II. Zero Manual Edits (Updated)
  - III. Intelligent Interactivity (New)
  - IV. Secure & Personalized (New)
  - V. Seamless Integration (New)
  - Previous III. AI-Generated Book (Removed - integrated into principles)
  - Previous IV. Production-Ready Website (Removed - integrated into principles)
  - Previous V. Deterministic Regeneration (Removed - integrated into principles)
Added sections: None (updated existing)
Removed sections: None (updated existing)
Templates requiring updates:
  - .specify/templates/plan-template.md: ⚠ pending
  - .specify/templates/spec-template.md: ⚠ pending
  - .specify/templates/tasks-template.md: ⚠ pending
  - .specify/templates/commands/*.md: ⚠ pending
Follow-up TODOs: None
-->
# AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook Constitution

## Preamble
This Constitution formally establishes the foundational principles and operational mandates for Project 1: "AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook," now expanding into "Phase 2: Intelligent RAG Chatbot & Personalization." It defines the methodologies, technical standards, and governance framework to ensure the integrity, quality, and complete automated generation of the technical textbook and its intelligent learning platform extensions.

## Project Purpose and Context

### Project Title
AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook (Phases 1-4 Unified)

### Project Description
Phase 2 expands the static AI-generated textbook into a dynamic, intelligent learning platform. This includes integrating a RAG (Retrieval-Augmented Generation) chatbot, user authentication, and personalized learning experiences. All new features must continue to be spec-driven and AI-generated.

## Core Principles

### I. 100% Spec-Driven Development
All project artifacts, including source code, content pages, configuration files, and ancillary components, shall be exclusively derived from declarative specifications within the `.spec` file system. Manual coding or direct modification of generated outputs is expressly prohibited, ensuring every component traces its origin to an approved specification. This principle applies equally to all frontend and backend components.

### II. Zero Manual Edits
Any modification, enhancement, or rectification to generated files (source code, markdown, configuration) must originate solely from changes within the Spec-Kit Plus specifications. Direct human intervention or manual editing of generated artifacts is strictly forbidden.

### III. Intelligent Interactivity
The learning platform must support interactive AI queries via a RAG chatbot. The chatbot must answer questions based *strictly* on the approved book content, providing accurate answers with citations and maintaining conversation history.

### IV. Secure & Personalized
User authentication mechanisms must be secure, robust, and privacy-focused, adhering to industry best practices. Content delivery and presentation should adapt to individual user profiles (personalization) and accommodate multi-language preferences (translation).

### V. Seamless Integration
The backend services (FastAPI, Qdrant) must integrate seamlessly and efficiently with the Docusaurus frontend. Deployment strategies must comprehensively handle both static frontend assets and dynamic backend services, maintaining clear separation of concerns while ensuring cohesive operation.

### VI. Deterministic Regeneration
The complete regeneration of the entire learning platform, from its foundational specifications to its deployable state, shall be achievable via a single, idempotent command. This process must consistently yield identical outputs across diverse environments for both frontend and backend components.

## Tech Stack & Official Links

### Frontend
Docusaurus v3 (TypeScript) ([https://docusaurus.io](https://docusaurus.io))

### Backend
FastAPI (Python) ([https://fastapi.tiangolo.com](https://fastapi.tiangolo.com))

### Vector DB
Qdrant (Cloud) ([https://qdrant.tech](https://qdrant.tech))

### Auth
Better-Auth (Placeholder for chosen authentication library/framework)

### AI Models
Gemini 1.5 Pro / OpenAI GPT-4o (or equivalent for RAG and content generation)

### Deployment
GitHub Pages (Frontend), Render (Backend)

### Content Format
MDX only

### AI Agent
Claude Code ([https://www.claude.com/product/claude-code](https://www.claude.com/product/claude-code))

### Spec Engine
Spec-Kit Plus ([https://github.com/panaversity/spec-kit-plus](https://github.com/panaversity/spec-kit-plus))

### Hosting URL
[Hosting URL Placeholder]

## Requirements

1.  **Framework Initialization:** Utilize the Docusaurus v3 classic preset with a TypeScript template for the frontend.
2.  **Core Frontend Features:** The deployed site must include an auto-generated sidebar, integrated dark mode functionality, and robust full-text search capabilities.
3.  **Content Volume:** A dedicated landing page alongside a minimum of five (5) complete, AI-generated chapters.
4.  **Automated Generation:** All content and structural elements (frontend and backend) must be exclusively auto-generated through Spec-Kit Plus.
5.  **Deployment Target:** The entire site must be fully deployable to GitHub Pages (frontend) and a designated backend hosting solution (backend) without errors.
6.  **Git History Integrity:** The Git repository history shall exclusively comprise `.spec` files and `constitution.md`, with all other content being generated artifacts.
7.  **RAG Chatbot Functionality:** Ingest book content into Qdrant, provide accurate answers with citations, and maintain conversation history.
8.  **Reusable Intelligence (Bonus):** Implement reusable intelligence via Claude Code Subagents and Agent Skills within the project.
9.  **Authentication & Profiling (Bonus):** Implement Signup/Signin (Better-Auth inspired) requesting user's Software and Hardware background to enable content personalization.
10. **Content Personalization (Bonus):** Enable logged-in users to personalize chapter content based on their background via a "Personalize" button.
11. **Urdu Translation (Bonus):** Enable logged-in users to translate chapter content into Urdu via a "Translate" button.
12. **Frontend Integration (Phase 4):** Develop Frontend UI for Authentication (Signup/Login/Profile), Personalization (Rewrite Actions), and Translation (Urdu Toggle) within the Docusaurus site.
13. **Subagent UI (Phase 4):** Enhance the Chat Widget to support rich UI elements for Subagents (e.g., rendering Quizzes).
14. **Documentation:** Update this `constitution.md` to reflect all Phase 2, 3 & 4 changes and ensure all new components are thoroughly documented in `specs/`.

## Success Criteria

*   Chatbot answers 90%+ of book-related queries accurately and with relevant citations.
*   Users can successfully register, log in, and access their personalized profile.
*   Execution of `npm run build` and `npm run deploy` (for frontend) and equivalent commands for backend deployment shall complete with zero reported errors.
*   The deployed website and backend services shall exhibit full responsiveness and functionality across diverse platforms.
*   The textbook and interactive components shall be structured, readable, and visually appealing, providing an optimal user experience.
*   Any authorized user shall be capable of forking the repository and independently regenerating the entire book and backend services from specifications using a single command, without requiring manual fixes or interventions.

## Governance

This Constitution stands as the paramount authority governing all project activities and artifacts. Any future amendments or revisions must adhere to the following protocol:

1.  **Amendment Proposal:** Proposed changes shall be initiated through a new `.spec` file, detailing the rationale and scope of modifications.
2.  **Validation Process:** All proposed amendments must undergo rigorous validation by Spec-Kit Plus to ensure compliance, consistency, and adherence to project principles across both frontend and backend architectures.
3.  **Review and Approval:** Amendments require formal review by core contributors and approval by a majority consensus.
4.  **Compliance Enforcement:** Adherence to this Constitution is automatically enforced via Continuous Integration (CI) processes and the Spec-Kit Plus framework.
5.  **Manual Edits Prohibition:** Direct manual modifications to generated files remain strictly forbidden.

**Version**: 2.0.0 | **Ratified**: 2025-12-04 | **Last Amended**: 2025-12-06