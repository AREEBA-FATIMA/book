<!--
Sync Impact Report:
Version change: 1.1.0 -> 1.2.0
List of modified principles:
  - I. 100% Spec-Driven Development (Updated)
  - II. Zero Manual Edits (Updated)
  - III. AI-Generated Book (Updated)
  - IV. Production-Ready Website (Updated)
  - V. Deterministic Regeneration (Updated)
Added sections:
  - Project Purpose and Context
  - Tech Stack & Official Links
  - Requirements
  - Success Criteria
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ⚠ pending
  - .specify/templates/spec-template.md: ⚠ pending
  - .specify/templates/tasks-template.md: ⚠ pending
  - .specify/templates/commands/*.md: ⚠ pending
Follow-up TODOs: None
-->
# AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook Constitution

## Preamble
This Constitution formally establishes the foundational principles and operational mandates for Project 1: "AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook." It defines the methodologies, technical standards, and governance framework to ensure the integrity, quality, and complete automated generation of the technical textbook.

## Project Purpose and Context

### Project Title
AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook

### Project Description
This project aims to create a comprehensive technical textbook utilizing Docusaurus v3, with all content, pages, and configuration generated exclusively by AI through Spec-Kit Plus and Claude Code. Manual coding or direct human edits to any generated artifacts are strictly forbidden.

## Core Principles

### I. 100% Spec-Driven Development
All project artifacts, including source code, content pages, configuration files, and ancillary components, shall be exclusively derived from declarative specifications within the `.spec` file system. Manual coding or direct modification of generated outputs is expressly prohibited, ensuring every component traces its origin to an approved specification.

### II. Zero Manual Edits
Any modification, enhancement, or rectification to generated files (source code, markdown, configuration) must originate solely from changes within the Spec-Kit Plus specifications. Direct human intervention or manual editing of generated artifacts is strictly forbidden.

### III. AI-Generated Book
The entirety of the textbook's content, encompassing chapters, structural components, navigation sidebars, the landing page, and system configurations, shall be autonomously produced by Claude Code, orchestrated through Spec-Kit Plus. No human authorship of textual content is permitted.

### IV. Production-Ready Website
The resulting digital textbook shall manifest as a visually compelling, modern, responsive, and fully functional Docusaurus v3 website. It must achieve successful, error-free deployment to GitHub Pages and adhere to industry standards for user experience and accessibility.

### V. Deterministic Regeneration
The complete regeneration of the entire textbook, from its foundational specifications to its deployable state, shall be achievable via a single, idempotent command. This process must consistently yield identical outputs across diverse environments.

## Tech Stack & Official Links

### Framework
Docusaurus v3 ([https://docusaurus.io](https://docusaurus.io))

### Preset
@docusaurus/preset-classic + TypeScript

### Content Format
MDX only

### Deployment
GitHub Pages ([https://pages.github.com](https://pages.github.com))

### AI Agent
Claude Code ([https://www.claude.com/product/claude-code](https://www.claude.com/product/claude-code))

### Spec Engine
Spec-Kit Plus ([https://github.com/panaversity/spec-kit-plus](https://github.com/panaversity/spec-kit-plus))

### Hosting URL
[Hosting URL Placeholder]

## Requirements

1.  **Framework Initialization:** Utilize the Docusaurus v3 classic preset with a TypeScript template.
2.  **Core Features:** The deployed site must include an auto-generated sidebar, integrated dark mode functionality, and robust full-text search capabilities.
3.  **Content Volume:** A dedicated landing page alongside a minimum of five (5) complete, AI-generated chapters.
4.  **Automated Generation:** All content and structural elements must be exclusively auto-generated through Spec-Kit Plus.
5.  **Deployment Target:** The entire site must be fully deployable to GitHub Pages without errors.
6.  **Git History Integrity:** The Git repository history shall exclusively comprise `.spec` files and `constitution.md`, with all other content being generated artifacts.
7.  **Future Integration Points:** The architecture shall accommodate future reference points for RAG chatbot integration, personalization features, and multi-language translation.

## Success Criteria

*   Execution of `npm run build` and `npm run deploy` commands shall complete with zero reported errors.
*   The deployed website shall exhibit full responsiveness across diverse mobile and desktop platforms.
*   The textbook shall be structured, readable, and visually appealing, providing an optimal user experience.
*   Any authorized user shall be capable of forking the repository and independently regenerating the entire book from specifications using a single command, without requiring manual fixes or interventions.

## Governance

This Constitution stands as the paramount authority governing all project activities and artifacts. Any future amendments or revisions must adhere to the following protocol:

1.  **Amendment Proposal:** Proposed changes shall be initiated through a new `.spec` file, detailing the rationale and scope of modifications.
2.  **Validation Process:** All proposed amendments must undergo rigorous validation by Spec-Kit Plus to ensure compliance, consistency, and adherence to project principles.
3.  **Review and Approval:** Amendments require formal review by core contributors and approval by a majority consensus.
4.  **Compliance Enforcement:** Adherence to this Constitution is automatically enforced via Continuous Integration (CI) processes and the Spec-Kit Plus framework.
5.  **Manual Edits Prohibition:** Direct manual modifications to generated files remain strictly forbidden.

**Version**: 1.2.0 | **Ratified**: 2025-12-04 | **Last Amended**: 2025-12-05
