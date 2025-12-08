# Specification: Content Personalization & Translation (Bonus 6 & 7)

## 1. Introduction
This specification details the "Personalization" (Bonus 6) and "Translation" (Bonus 7) features. These allow logged-in users to experience chapter content tailored to their background or translated into Urdu.

## 2. User Stories
- **US6.1:** As a student (Beginner software exp), I want to click a "Personalize" button so that complex Python code examples are explained with simpler analogies.
- **US6.2:** As a student (Expert software exp), I want to click "Personalize" to get concise, high-level summaries without basic explanations.
- **US7.1:** As a student, I want to click "Translate to Urdu" to read the current chapter in professional Urdu language.
- **US7.2:** As a student, I want the translation to preserve technical terms (English) while explaining the context in Urdu.

## 3. Acceptance Criteria (Bonus 6: Personalization)
1.  **Personalize Endpoint (`POST /api/personalize`)**:
    -   Input: `content` (Markdown text), `software_exp`, `hardware_exp`.
    -   Logic: Sends content to Gemini LLM with a prompt tailored to the experience levels.
    -   Output: Rewritten Markdown content.
2.  **LLM Prompt Strategy**:
    -   *Beginner*: "Use simple language, add analogies, explain jargon."
    -   *Intermediate*: "Standard technical textbook tone."
    -   *Expert*: "Dense, high-bandwidth technical summary. Focus on architecture/math."

## 4. Acceptance Criteria (Bonus 7: Translation)
1.  **Translate Endpoint (`POST /api/translate`)**:
    -   Input: `content` (Markdown text), `target_lang` (default="ur").
    -   Logic: Sends content to Gemini LLM.
    -   Output: Urdu Markdown content.
2.  **Quality Control**:
    -   Prompt must strictly enforce: "Keep code blocks unchanged. Do not translate Variable names. Use professional Urdu (not Roman/Hindi style)."

## 5. Technical Design

### 5.1 API Contract
#### Personalize Content
-   **URL:** `/api/personalize`
-   **Method:** `POST`
-   **Headers:** `Authorization: Bearer <token>`
-   **Request:**
    ```json
    { "content": "# Introduction..." }
    ```
    *(Backend pulls `software_exp` from the logged-in user context)*
-   **Response:**
    ```json
    { "personalized_content": "# Intro (Simplified)..." }
    ```

#### Translate Content
-   **URL:** `/api/translate`
-   **Method:** `POST`
-   **Headers:** `Authorization: Bearer <token>`
-   **Request:**
    ```json
    { "content": "# Introduction...", "target_language": "ur" }
    ```
-   **Response:**
    ```json
    { "translated_content": "..." } # Urdu text
    ```

### 5.2 Optimizations
-   **Caching (Future):** We can hash the (content + user_profile) and cache the result in Redis (or LRU cache in memory) to save LLM tokens.

## 6. Success Metrics
-   "Personalize" response time < 5 seconds for average chapter chunk.
-   Urdu translation maintains proper markdown formatting (tables, code blocks).
