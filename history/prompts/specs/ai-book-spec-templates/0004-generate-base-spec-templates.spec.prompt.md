---
id: 0004
title: Generate base spec templates
stage: spec
date: 2025-12-05
surface: agent
model: claude-sonnet-4-5-20250929
feature: ai-book-spec-templates
branch: 001-ai-book-spec-templates
user: user
command: /sp.specify
labels: ["spec", "templates", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/templates/plan-template.md
- .specify/templates/spec-template.md
- .specify/templates/tasks-template.md
- .specify/templates/commands/sp.constitution.md
tests:

---

## Prompt

```text
You are Spec-Kit Plus. Using the `constitution.md` generated for Project 1, create a **spec-template.md** for this AI/Spec-Driven Book Creation project.

# Purpose
Provide a reusable specification template to define modules, chapters, components, or features of the AI-generated textbook. All specs must enforce AI-only generation and zero manual coding.

# Required Sections
1. Specification Name
2. Purpose
3. Inputs & Dependencies
4. Expected Outputs
5. Constraints (must enforce 100% AI-driven content)
6. Acceptance Criteria
7. Generation Instructions for Claude Code
8. Validation Checklist
9. Version Block

# References
- `constitution.md` rules
- Project requirements: Docusaurus v3, TypeScript, MDX content, GitHub Pages deployment

# Requirements
- Must be minimal, clean, structured
- Emphasize contributors write specs, not code
- Support MDX, TypeScript, and Docusaurus fields
- Ensure reproducibility and deterministic output

OUTPUT:
Return a ready-to-use `spec-template.md` to be placed in `.specify/templates` for Project 1.
```

## Response snapshot

```text
The base `.spec` templates have been generated and placed in the `.specify/templates` directory.

- `plan-template.md`: Placeholder for overall book plan, chapter structure, and Docusaurus project setup.
- `spec-template.md`: Placeholder for individual chapter content and module details.
- `tasks-template.md`: Placeholder for tasks, milestones, and assignments per week/module.
- `commands/sp.constitution.md`: Placeholder command to regenerate the constitution from specs.

Suggested commit message:
`feat: generate base spec templates for AI/Spec-Driven Book project`
```

## Outcome

- ✅ Impact: Base spec templates generated and placed in `.specify/templates`.
- 🧪 Tests: N/A
- 📁 Files:
  - .specify/templates/plan-template.md created.
  - .specify/templates/spec-template.md updated.
  - .specify/templates/tasks-template.md created.
  - .specify/templates/commands/sp.constitution.md created.
- 🔁 Next prompts: Commit changes, review templates for alignment.
- 🧠 Reflection: Successfully generated and updated all required spec templates. Ensured `spec-template.md` was correctly formatted after initial `echo` command error.

## Evaluation notes (flywheel)

- Failure modes observed: Initial `Write` command for `spec-template.md` failed due to not reading the file first after `echo` command.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
