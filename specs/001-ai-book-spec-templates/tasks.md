# Project Tasks: AI/Spec-Driven Book Creation – Physical AI & Humanoid Robotics Textbook

This document outlines the atomic, AI-executable tasks for Project 1, ensuring compliance with the Project Constitution and Plan. All tasks are designed for execution by AI agents via Spec-Kit Plus, avoiding any manual coding and producing Docusaurus v3 compliant outputs.

## References

- [Constitution.md](.specify/memory/constitution.md)
- [plan.md](specs/001-ai-book-spec-templates/plan.md)

---

## Phase 1: Repo Setup & Core Configuration

**Purpose**: To initialize the project root, configure the Docusaurus v3 template, and set up essential navigation metadata, establishing the foundational repository structure.

- [ ] T001 Initialize Docusaurus project with TypeScript template in `book-1/` (if not already done).
    *   **Purpose**: Ensure the basic Docusaurus project structure is in place.
    *   **Inputs**: Docusaurus CLI command, project name, template details.
    *   **Outputs**: `package.json`, `docusaurus.config.ts`, `src/`, `docs/`, `static/` directories within `book-1/`.
    *   **Agent Instructions**: Verify existence of `book-1/docusaurus.config.ts`. If not found, execute `npx create-docusaurus@latest book-1 classic --typescript`.
    *   **Acceptance Criteria**: Docusaurus project structure created, `book-1/package.json` and `book-1/docusaurus.config.ts` present.
    *   **Constitution References**: Constitution.md:78 (Framework Initialization)

- [ ] T002 Configure `docusaurus.config.ts` for classic preset, auto-sidebars, dark mode, and search in `book-1/docusaurus.config.ts`.
    *   **Purpose**: Apply core Docusaurus configurations as per requirements.
    *   **Inputs**: `plan.md`, `constitution.md`, `specs/001-ai-book-spec-templates/docusaurus-config-spec.md`.
    *   **Outputs**: Modified `book-1/docusaurus.config.ts`.
    *   **Agent Instructions**: Read `book-1/docusaurus.config.ts` and `specs/001-ai-book-spec-templates/docusaurus-config-spec.md`, then update `book-1/docusaurus.config.ts` to reflect dark mode, search, and auto-sidebar configuration.
    *   **Acceptance Criteria**: `book-1/docusaurus.config.ts` reflects dark mode, search, and auto-sidebar configuration.
    *   **Constitution References**: Constitution.md:79 (Core Features)

- [ ] T003 Create `_category_.json` for Chapter 1 in `book-1/docs/chapter-1/_category_.json`.
    *   **Purpose**: Define the sidebar label and position for Chapter 1.
    *   **Inputs**: Chapter title and desired position.
    *   **Outputs**: `book-1/docs/chapter-1/_category_.json`.
    *   **Agent Instructions**: Create a JSON file with `{"label": "Chapter 1", "position": 1}`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-1/_category_.json` exists with correct content.
    *   **Constitution References**: Constitution.md:79 (Core Features - Navigation)

- [ ] T004 Create `_category_.json` for Chapter 2 in `book-1/docs/chapter-2/_category_.json`.
    *   **Purpose**: Define the sidebar label and position for Chapter 2.
    *   **Inputs**: Chapter title and desired position.
    *   **Outputs**: `book-1/docs/chapter-2/_category_.json`.
    *   **Agent Instructions**: Create a JSON file with `{"label": "Chapter 2", "position": 2}`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-2/_category_.json` exists with correct content.
    *   **Constitution References**: Constitution.md:79 (Core Features - Navigation)

- [ ] T005 Create `_category_.json` for Chapter 3 in `book-1/docs/chapter-3/_category_.json`.
    *   **Purpose**: Define the sidebar label and position for Chapter 3.
    *   **Inputs**: Chapter title and desired position.
    *   **Outputs**: `book-1/docs/chapter-3/_category_.json`.
    *   **Agent Instructions**: Create a JSON file with `{"label": "Chapter 3", "position": 3}`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-3/_category_.json` exists with correct content.
    *   **Constitution References**: Constitution.md:79 (Core Features - Navigation)

- [ ] T006 Create `_category_.json` for Chapter 4 in `book-1/docs/chapter-4/_category_.json`.
    *   **Purpose**: Define the sidebar label and position for Chapter 4.
    *   **Inputs**: Chapter title and desired position.
    *   **Outputs**: `book-1/docs/chapter-4/_category_.json`.
    *   **Agent Instructions**: Create a JSON file with `{"label": "Chapter 4", "position": 4}`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-4/_category_.json` exists with correct content.
    *   **Constitution References**: Constitution.md:79 (Core Features - Navigation)

- [ ] T007 Create `_category_.json` for Chapter 5 in `book-1/docs/chapter-5/_category_.json`.
    *   **Purpose**: Define the sidebar label and position for Chapter 5.
    *   **Inputs**: Chapter title and desired position.
    *   **Outputs**: `book-1/docs/chapter-5/_category_.json`.
    *   **Agent Instructions**: Create a JSON file with `{"label": "Chapter 5", "position": 5}`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-5/_category_.json` exists with correct content.
    *   **Constitution References**: Constitution.md:79 (Core Features - Navigation)

---

## Phase 2: Content Generation

**Purpose**: To generate all primary book content (landing page, chapters) based on detailed specifications.

- [ ] T008 [P] Generate landing page MDX content based on `specs/001-ai-book-spec-templates/landing-page-spec.md` in `book-1/src/pages/index.mdx`.
    *   **Purpose**: Create the main entry point content for the book.
    *   **Inputs**: `specs/001-ai-book-spec-templates/landing-page-spec.md`.
    *   **Outputs**: `book-1/src/pages/index.mdx`.
    *   **Agent Instructions**: Read `landing-page-spec.md`, generate MDX, and write to `book-1/src/pages/index.mdx`.
    *   **Acceptance Criteria**: `book-1/src/pages/index.mdx` exists and contains generated MDX content.
    *   **Constitution References**: Constitution.md:80 (Content Volume), Constitution.md:81 (Automated Generation)

- [ ] T009 [P] Generate Chapter 1 MDX content based on `specs/001-ai-book-spec-templates/chapter-1-spec.md` in `book-1/docs/chapter-1/index.mdx`.
    *   **Purpose**: Generate the content for the first chapter.
    *   **Inputs**: `specs/001-ai-book-spec-templates/chapter-1-spec.md`.
    *   **Outputs**: `book-1/docs/chapter-1/index.mdx`.
    *   **Agent Instructions**: Read `chapter-1-spec.md`, generate MDX, and write to `book-1/docs/chapter-1/index.mdx`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-1/index.mdx` exists and contains generated MDX content.
    *   **Constitution References**: Constitution.md:80 (Content Volume), Constitution.md:81 (Automated Generation)

- [ ] T010 [P] Generate Chapter 2 MDX content based on `specs/001-ai-book-spec-templates/chapter-2-spec.md` in `book-1/docs/chapter-2/index.mdx`.
    *   **Purpose**: Generate the content for the second chapter.
    *   **Inputs**: `specs/001-ai-book-spec-templates/chapter-2-spec.md`.
    *   **Outputs**: `book-1/docs/chapter-2/index.mdx`.
    *   **Agent Instructions**: Read `chapter-2-spec.md`, generate MDX, and write to `book-1/docs/chapter-2/index.mdx`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-2/index.mdx` exists and contains generated MDX content.
    *   **Constitution References**: Constitution.md:80 (Content Volume), Constitution.md:81 (Automated Generation)

- [ ] T011 [P] Generate Chapter 3 MDX content based on `specs/001-ai-book-spec-templates/chapter-3-spec.md` in `book-1/docs/chapter-3/index.mdx`.
    *   **Purpose**: Generate the content for the third chapter.
    *   **Inputs**: `specs/001-ai-book-spec-templates/chapter-3-spec.md`.
    *   **Outputs**: `book-1/docs/chapter-3/index.mdx`.
    *   **Agent Instructions**: Read `chapter-3-spec.md`, generate MDX, and write to `book-1/docs/chapter-3/index.mdx`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-3/index.mdx` exists and contains generated MDX content.
    *   **Constitution References**: Constitution.md:80 (Content Volume), Constitution.md:81 (Automated Generation)

- [ ] T012 [P] Generate Chapter 4 MDX content based on `specs/001-ai-book-spec-templates/chapter-4-spec.md` in `book-1/docs/chapter-4/index.mdx`.
    *   **Purpose**: Generate the content for the fourth chapter.
    *   **Inputs**: `specs/001-ai-book-spec-templates/chapter-4-spec.md`.
    *   **Outputs**: `book-1/docs/chapter-4/index.mdx`.
    *   **Agent Instructions**: Read `chapter-4-spec.md`, generate MDX, and write to `book-1/docs/chapter-4/index.mdx`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-4/index.mdx` exists and contains generated MDX content.
    *   **Constitution References**: Constitution.md:80 (Content Volume), Constitution.md:81 (Automated Generation)

- [ ] T013 [P] Generate Chapter 5 MDX content based on `specs/001-ai-book-spec-templates/chapter-5-spec.md` in `book-1/docs/chapter-5/index.mdx`.
    *   **Purpose**: Generate the content for the fifth chapter.
    *   **Inputs**: `specs/001-ai-book-spec-templates/chapter-5-spec.md`.
    *   **Outputs**: `book-1/docs/chapter-5/index.mdx`.
    *   **Agent Instructions**: Read `chapter-5-spec.md`, generate MDX, and write to `book-1/docs/chapter-5/index.mdx`.
    *   **Acceptance Criteria**: `book-1/docs/chapter-5/index.mdx` exists and contains generated MDX content.
    *   **Constitution References**: Constitution.md:80 (Content Volume), Constitution.md:81 (Automated Generation)

---

## Phase 3: Layout & Navigation Configuration

**Purpose**: To generate essential navigation configuration files, relying on previously defined metadata.

- [ ] T014 Generate `sidebars.ts` based on `specs/001-ai-book-spec-templates/sidebar-config-spec.md` in `book-1/sidebars.ts`.
    *   **Purpose**: Configure Docusaurus to create navigation sidebars automatically.
    *   **Inputs**: `specs/001-ai-book-spec-templates/sidebar-config-spec.md`, `book-1/docs/` directory structure, `book-1/docs/chapter-N/_category_.json` files.
    *   **Outputs**: `book-1/sidebars.ts`.
    *   **Agent Instructions**: Read `sidebar-config-spec.md`, generate the sidebar configuration (ensuring it leverages the `_category_.json` files), and write to `book-1/sidebars.ts`.
    *   **Acceptance Criteria**: `book-1/sidebars.ts` exists and correctly configures auto-generated sidebars with human-readable chapter labels.
    *   **Constitution References**: Constitution.md:79 (Core Features), Constitution.md:81 (Automated Generation)

---

## Phase 4: Comprehensive Validation

**Purpose**: To ensure the generated Docusaurus site is functional, compliant with its structure, and adheres to the project constitution before deployment. This phase is critical to ensure "content without any error".

- [ ] T015 Validate Docusaurus build by running `npm run build` in `book-1/`.
    *   **Purpose**: Confirm the Docusaurus site can be built without errors.
    *   **Inputs**: Docusaurus project in `book-1/`.
    *   **Outputs**: Build success/failure report.
    *   **Agent Instructions**: Execute `npm install` followed by `npm run build` in `book-1/`.
    *   **Acceptance Criteria**: `npm run build` completes with exit code 0 and no errors.
    *   **Constitution References**: Constitution.md:88 (Compilation with zero errors)

- [ ] T016 Validate MDX structure and internal linking for generated content in `book-1/docs/`.
    *   **Purpose**: Ensure all MDX files are well-formed and links are valid.
    *   **Inputs**: `book-1/docs/` directory content.
    *   **Outputs**: Validation report.
    *   **Agent Instructions**: Use internal AI validation to check MDX syntax, image paths, and internal link integrity within `book-1/docs/`.
    *   **Acceptance Criteria**: All MDX files are valid, and internal links resolve correctly.
    *   **Constitution References**: Constitution.md:90 (Content Quality)

- [ ] T017 Validate auto-sidebar generation functionality by inspecting `book-1/`.
    *   **Purpose**: Verify that the generated sidebar correctly reflects the `docs` structure and `_category_.json` labels.
    *   **Inputs**: Generated `book-1/sidebars.ts` and `book-1/docs/` directory structure.
    *   **Outputs**: Validation report.
    *   **Agent Instructions**: Start the Docusaurus development server (`npm run start` in `book-1/`), navigate to the site, and programmatically verify the sidebar structure and labels against the file system and specifications.
    *   **Acceptance Criteria**: The deployed site's sidebar accurately lists all chapters and sections with correct labels as defined by the `docs` structure and `_category_.json` files.
    *   **Constitution References**: Constitution.md:79 (Core Features)

- [ ] T018 Validate constitution compliance of generated code and configuration in `book-1/`.
    *   **Purpose**: Ensure all generated artifacts adhere to the principles and requirements defined in the `constitution.md`.
    *   **Inputs**: All generated files in `book-1/`, `constitution.md`.
    *   **Outputs**: Compliance report.
    *   **Agent Instructions**: Perform a comprehensive review of all generated files (`.ts`, `.js`, `.mdx`, `.yml`, `package.json`) in `book-1/` against the principles and requirements outlined in `constitution.md`.
    *   **Acceptance Criteria**: All generated artifacts fully comply with the Project 1 Constitution.
    *   **Constitution References**: Constitution.md:38-51 (Core Principles), Constitution.md:78-84 (Requirements)

---

## Phase 5: Deployment

**Purpose**: To build the Docusaurus site and deploy it to GitHub Pages, confirming its public availability. This phase depends on successful completion of all validation tasks.

- [ ] T019 Generate GitHub Pages deployment workflow based on `specs/001-ai-book-spec-templates/deployment-spec.md` in `.github/workflows/deploy.yml`.
    *   **Purpose**: Create the automation script for building and deploying the site to GitHub Pages.
    *   **Inputs**: `specs/001-ai-book-spec-templates/deployment-spec.md`.
    *   **Outputs**: `.github/workflows/deploy.yml`.
    *   **Agent Instructions**: Read `deployment-spec.md`, generate the GitHub Actions workflow, and write to `.github/workflows/deploy.yml`.
    *   **Acceptance Criteria**: `.github/workflows/deploy.yml` exists and contains a valid GitHub Actions workflow for deployment.
    *   **Constitution References**: Constitution.md:82 (Deployment Target), Constitution.md:81 (Automated Generation)

- [ ] T020 Build the Docusaurus site for deployment in `book-1/`.
    *   **Purpose**: Compile the static assets for the Docusaurus site, specifically for the deployment process.
    *   **Inputs**: Docusaurus project in `book-1/`.
    *   **Outputs**: Built static site in `book-1/build/` directory.
    *   **Agent Instructions**: Execute `npm run build` in `book-1/`.
    *   **Acceptance Criteria**: The `book-1/build/` directory contains the complete static Docusaurus site.
    *   **Constitution References**: Constitution.md:88 (Compilation with zero errors)

- [ ] T021 Deploy the built Docusaurus site to GitHub Pages from `book-1/build/`.
    *   **Purpose**: Publish the static site to the designated GitHub Pages URL.
    *   **Inputs**: Built site in `book-1/build/` directory, GitHub repository configuration.
    *   **Outputs**: Site deployed to GitHub Pages.
    *   **Agent Instructions**: Trigger the GitHub Actions workflow `deploy.yml` (e.g., by pushing to `main`).
    *   **Acceptance Criteria**: The Docusaurus site is successfully published and accessible via GitHub Pages.
    *   **Constitution References**: Constitution.md:82 (Deployment Target), Constitution.md:88 (Compilation with zero errors)

- [ ] T022 Confirm site availability at `https://areeba-fatima.github.io/book`.
    *   **Purpose**: Verify the deployed site is publicly accessible and functional.
    *   **Inputs**: Deployment URL.
    *   **Outputs**: WebFetch confirmation or error.
    *   **Agent Instructions**: Use `WebFetch` to access the URL and confirm a successful HTTP response and basic page content.
    *   **Acceptance Criteria**: The site at `https://areeba-fatima.github.io/book` returns an HTTP 200 status code and displays the expected landing page content.
    *   **Constitution References**: Constitution.md:89 (Fully responsive site)

---

## Phase 6: Governance Tasks

**Purpose**: To maintain the integrity of the project by enforcing constitutional compliance and managing versioning.

- [ ] T023 Enforce constitution compliance across all generated artifacts in `book-1/`.
    *   **Purpose**: Continuously verify that the project remains aligned with its founding principles.
    *   **Inputs**: All project files in `book-1/`, `constitution.md`.
    *   **Outputs**: Compliance report, potential warnings for deviations.
    *   **Agent Instructions**: Implement automated checks (e.g., via a pre-commit hook or CI step) that re-run `T018 Validate constitution compliance` whenever changes are introduced or artifacts are regenerated.
    *   **Acceptance Criteria**: Any attempt to introduce manual edits or non-compliant artifacts is detected and blocked or reported.
    *   **Constitution References**: Constitution.md:100 (Compliance Enforcement), Constitution.md:101 (Manual Edits Prohibition)

- [ ] T024 Update versioning when specs change, based on semantic versioning rules for `book-1/package.json`.
    *   **Purpose**: Manage project versioning systematically, ensuring transparency and traceability of changes.
    *   **Inputs**: Modified `.spec` files, current project version.
    *   **Outputs**: Updated version in `book-1/package.json` and potentially `constitution.md`.
    *   **Agent Instructions**: After any significant changes to `.spec` files, automatically propose or apply a semantic version bump (patch, minor, or major) to `book-1/package.json` and other relevant configuration files.
    *   **Acceptance Criteria**: Project versioning accurately reflects the scope of changes introduced through `.spec` updates.
    *   **Constitution References**: Constitution.md:95 (Governance)

---

## Dependencies

Tasks are primarily sequential within phases, with inter-phase dependencies as follows:
- Phase 1 tasks must complete before Phase 2.
- Phase 2 tasks must complete before Phase 3.
- Phase 3 tasks must complete before Phase 4.
- Phase 4 tasks must complete before Phase 5.
- Phase 5 tasks must complete before Phase 6.

Specific content generation tasks within Phase 2 (T008-T013) are largely independent and can be executed in parallel once their respective `*-spec.md` files are prepared.

---

## Parallel Execution Examples (Phase 2 - Content Generation)

Once the individual spec files are defined, the generation of content can happen in parallel:

- [P] T008 Generate landing page MDX content...
- [P] T009 Generate Chapter 1 MDX content...
- [P] T010 Generate Chapter 2 MDX content...
- [P] T011 Generate Chapter 3 MDX content...
- [P] T012 Generate Chapter 4 MDX content...
- [P] T013 Generate Chapter 5 MDX content...

---

## Implementation Strategy

The project will be implemented incrementally, following the defined phases. Each phase represents a logical step in the automated book generation process, building upon the successful completion of the previous phase. This revised approach ensures that all content and layout are generated and thoroughly validated before any deployment attempts, addressing the user's request for "complete with all chapters and layout sidebar and content without any error" prior to deployment.

MVP scope: Completion of all tasks through Phase 5 will result in a fully validated, deployable Docusaurus site with a landing page and 5 chapters, fulfilling the core project requirements.
