---
id: 0005
title: Clarify spec-template content generation prompt
stage: spec
date: 2025-12-05
surface: agent
model: claude-sonnet-4-5-20250929
feature: ai-book-spec-templates
branch: 001-ai-book-spec-templates
user: user
command: /sp.clarify
labels: ["spec", "clarification", "template"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/templates/spec-template.md
tests:
N/A
---

## Prompt

```text
## Question 4: Content Generation Prompt Details

   **Context**: The `spec-template.md` includes `[PROMPT_FOR_AI_GENERATION]` as a placeholder under the Inputs section. For effective and consistent AI-generated content, it's crucial to define the structure and expected details within this prompt.

   **What we need to know**: What specific details and structure should the `[PROMPT_FOR_AI_GENERATION]` include to guide Claude Code in generating accurate and compliant content (e.g., target audience, tone, length, key topics)?

   **Recommended:** Option A - The prompt should include target audience, tone, length, key topics/sections, and cross-references. This provides comprehensive guidance for high-quality AI generation.

   | Option | Description | Implications |
   |--------|-------------|--------------|
   | A | The prompt should be highly detailed, including: target audience, desired tone, approximate length, a bulleted list of key topics/sections to cover, and any specific cross-references to other chapters or modules. | Provides maximum control and ensures generated content aligns closely with expectations, minimizing rework. |
   | B | The prompt should be concise, focusing only on the main topic and a few keywords. | Offers more flexibility to Claude Code but might result in less precise or inconsistent content. |
   | C | The prompt should primarily reference an external document (e.g., an outline file) for content details. | Centralizes content outlines but adds an extra layer of indirection and potential for sync issues. |
   | Short | Provide a different short answer (<=5 words) | Allows for a custom, concise approach to prompt content. |

   **Your choice**: A
```

## Response snapshot

```text
Updated `spec-template.md` to include detailed prompt guidance for AI content generation.
```

## Outcome

- ✅ Impact: `spec-template.md` updated with detailed prompt guidance for AI content generation.
- 🧪 Tests: N/A
- 📁 Files: .specify/templates/spec-template.md updated.
- 🔁 Next prompts: Review `plan-template.md`, `tasks-template.md`, and `commands/*.md` for alignment with constitution.
- 🧠 Reflection: Successfully applied user's choice to update the `spec-template.md` with detailed prompt guidelines.

## Evaluation notes (flywheel)

- Failure modes observed: N/A
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
