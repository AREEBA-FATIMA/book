# Specification: {{FEATURE_NAME}} - Phase {{PHASE_NUMBER}} {{ARTIFACT_TYPE}}

## Purpose
This specification serves as a declarative blueprint for generating a specific artifact or set of artifacts within the AI/Spec-Driven Book project, particularly for Phase {{PHASE_NUMBER}} (Intelligent RAG Chatbot & Personalization). It ensures adherence to the core principles of 100% Spec-Driven Development, Zero Manual Edits, Intelligent Interactivity, Secure & Personalized, and Seamless Integration as defined in `constitution.md` v2.0.0.

## Inputs & Dependencies

### Inputs
- **Prompt:** Provide comprehensive instructions for Claude Code to generate the artifact(s). This includes:
    - **Target Audience:** [TARGET_AUDIENCE_DESCRIPTION] (e.g., "backend developers", "frontend engineers", "technical architects")
    - **Desired Tone:** [TONE_DESCRIPTION] (e.g., "formal and technical", "concise", "detailed and explanatory")
    - **Approximate Length:** [LENGTH_GUIDANCE] (e.g., "100-200 lines of code", "medium-length markdown file", "brief API definition")
    - **Key Topics/Sections:** A bulleted list of essential points, sub-sections, or components to cover.
    - **Cross-references:** Explicit mentions of other relevant specifications, documentation, or code modules.
    - **Specific Examples/Code:** [GUIDANCE_FOR_EXAMPLES] (e.g., "include Pydantic models for request/response", "demonstrate React component structure")
- **Parameters:**
  - `featureName`: {{FEATURE_NAME}}
  - `phaseNumber`: {{PHASE_NUMBER}}
  - `artifactType`: {{ARTIFACT_TYPE}} (e.g., `system-architecture`, `backend-api`, `frontend-ui`, `rag-pipeline`, `auth-user`)
  - `outputFilePath`: {{EXPECTED_OUTPUT_FILE_PATH}} (e.g., `specs/phase-{{PHASE_NUMBER}}/{{FILENAME}}.spec.md`)

### Dependencies
- `constitution.md`: Ensures compliance with project governance and core principles (v2.0.0).
- `specs/phase-{{PHASE_NUMBER}}/01-system-architecture.spec.md`: Provides overall architectural context.
- `specs/phase-{{PHASE_NUMBER}}/02-backend-api.spec.md`: Relevant for API-related specifications.
- `specs/phase-{{PHASE_NUMBER}}/03-rag-pipeline.spec.md`: Relevant for RAG components.
- `specs/phase-{{PHASE_NUMBER}}/04-auth-user.spec.md`: Relevant for authentication and user management.
- `specs/phase-{{PHASE_NUMBER}}/05-frontend-ui.spec.md`: Relevant for frontend components.
- **External Libraries/Frameworks:** [LIST_EXTERNAL_DEPENDENCIES] (e.g., `FastAPI`, `Qdrant Client`, `React`)

## Expected Outputs

### Generated Files
- **Primary Output:** `{{EXPECTED_OUTPUT_FILE_PATH}}`
  - **Format:** [MARKDOWN/PYTHON/TYPESCRIPT/JSON/ETC]
  - **Content:** A detailed artifact, such as a specification document, code file, or configuration, that fully satisfies the prompt and adheres to all constraints.

## Constraints

1.  **AI-Only Generation:** All content, code, and configuration specified herein must be generated exclusively by Claude Code via Spec-Kit Plus. Manual human intervention or direct coding is strictly forbidden.
2.  **No Manual Edits:** Any modifications to generated output must originate from updates to this specification or other `.spec` files.
3.  **Constitution v2.0.0 Compliance:** All generated artifacts must strictly adhere to the principles outlined in `constitution.md` v2.0.0.
4.  **Technology-Specific Standards:** [TECHNOLOGY_SPECIFIC_CONSTRAINTS] (e.g., "FastAPI best practices", "React component conventions", "MDX formatting standards").
5.  **Deterministic Output:** Given the same inputs and specifications, the generation process must yield identical outputs every time.
6.  **Security Best Practices:** All generated code and configurations must incorporate industry-standard security practices relevant to the artifact type (e.g., input validation, secure API handling, proper authentication).

## Acceptance Criteria

*   The generated output file (`{{EXPECTED_OUTPUT_FILE_PATH}}`) exists at the specified path.
*   The content of the generated file accurately reflects the requirements outlined in this specification.
*   All defined functional and non-functional requirements for the artifact are met.
*   The artifact is compatible with its intended integration points (e.g., backend API with frontend, RAG pipeline with LLM).
*   The Git history reflects only `.spec` file changes and the generated artifact, with no manual code edits.

## Generation Instructions for Claude Code

Claude Code, using Spec-Kit Plus, is instructed to generate the artifact(s) as per the details in 'Expected Outputs', adhering to all 'Inputs & Dependencies' and 'Constraints'. Focus on creating the `{{ARTIFACT_TYPE}}` artifact based on the provided inputs and the specific requirements for Phase {{PHASE_NUMBER}}.

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

**Spec Version**: 1.0.0 | **Created**: {{DATE_ISO}} | **Last Modified**: {{DATE_ISO}}
