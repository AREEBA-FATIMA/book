---
id: 0002
title: Update Project Constitution with details
stage: constitution
date: 2025-12-05
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: /sp.constitution
labels: ["constitution", "update", "project-details"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests:

---

## Prompt

```text
You are Claude Code, working with Spec-Kit Plus. Your task is to generate the **constitution.md** for a project that will create an **AI/Spec-Driven Textbook on Physical AI & Humanoid Robotics** using Docusaurus v3 and deploy it to GitHub Pages.

CONTEXT:
- Project: AI/Spec-Driven Book Creation
- Target Audience: Industry practitioners with Python knowledge
- Course: 13-week Physical AI & Humanoid Robotics
- Delivery: Docusaurus v3 website + GitHub Pages
- AI Tools: Spec-Kit Plus (https://github.com/panaversity/spec-kit-plus), Claude Code (https://www.claude.com/product/claude-code)
- Goal: 100% spec-driven development; no manual coding

TASK:
1. Write **constitution.md** that contains:
   - Project Purpose and Context
   - Core Principles:
       * 100% Spec-Driven Development
       * Zero Manual Coding
       * Beautiful, Production-Ready Docusaurus v3 Site
   - Tech Stack & Official Links:
       * Framework: Docusaurus v3 (https://docusaurus.io)
       * Preset: @docusaurus/preset-classic + TypeScript
       * Deployment: GitHub Pages (https://pages.github.com)
       * Spec Tool: Spec-Kit Plus
       * AI Agent: Claude Code
       * Hosting URL placeholder
   - Requirements:
       * Minimum 5 chapters + landing page
       * Fully auto-generated via Spec-Kit Plus
       * Auto-generated sidebar, dark mode, full-text search
       * Reference points for RAG chatbot, personalization, and translation
   - Success Criteria:
       * Live site works perfectly on mobile & desktop
       * `npm run build && npm run deploy` finishes without errors
       * Git history shows only spec files + constitution.md
       * Anyone can regenerate the book from specs
   - Governance & Versioning:
       * Version number, ratified date, last amended date
       * Rules for amendments, review process, compliance checks

OUTPUT:
- Markdown file `constitution.md`
- Include versioning metadata at the bottom
- Structured headings, bullet points, and clear formatting
```

## Response snapshot

```text
The project constitution has been updated to version 1.1.0 with the new details.

Please review the following templates for alignment with the updated constitution principles:
- .specify/templates/plan-template.md
- .specify/templates/spec-template.md
- .specify/templates/tasks-template.md
- .specify/templates/commands/*.md

Suggested commit message:
docs: update project constitution to v1.1.0 (AI/Spec-Driven Book project details)
```

## Outcome

- ✅ Impact: Constitution updated with project details.
- 🧪 Tests: N/A
- 📁 Files: .specify/memory/constitution.md updated.
- 🔁 Next prompts: Review dependent templates, commit constitution.
- 🧠 Reflection: Successfully updated constitution based on user's detailed input. Need to create PHR as part of the process.

## Evaluation notes (flywheel)

- Failure modes observed: N/A
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
