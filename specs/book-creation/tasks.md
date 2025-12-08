# Tasks

## 1. Repository Initialization
### 1.1 T001 Initialize Git Repository
- Purpose: Set up a new Git repository for the project.
- Goal: Create a local Git repository ready for version control.
- Inputs: None
- Outputs: `.git/` directory at project root
- Dependencies: None
- AI Agent Responsible: Claude Code
- Constraints: Must follow `constitution.md` regarding version control best practices.
- Acceptance Criteria:
    - `.git` directory exists in the project root.
    - `git status` command shows no uncommitted changes for initial setup files.
- Validation Steps:
    - Run `ls -a .git/` to confirm directory existence.
    - Run `git status`.
- Failure Conditions: Git repository initialization fails or `.git` directory is not created.
- Recovery Steps: Manually run `git init` and inspect error messages.
- Links to related tasks: None
- Notes on deterministic regeneration: Initial setup, typically done once.

### 1.2 T002 [P] Create `.gitignore` File
- Purpose: Configure Git to ignore specified files and directories to keep the repository clean.
- Goal: Prevent unwanted files (e.g., node_modules, build outputs) from being tracked by Git.
- Inputs: None
- Outputs: `.gitignore` file at project root
- Dependencies: None
- AI Agent Responsible: Claude Code
- Constraints: Must follow `constitution.md` for project cleanliness and security (e.g., not committing secrets).
- Acceptance Criteria:
    - `.gitignore` file exists.
    - Contains entries for common Docusaurus build outputs (`build/`, `node_modules/`, `.docusaurus/`), editor configs (`.vscode/`), and environment files (`.env`).
    - `git status` shows ignored files are indeed ignored.
- Validation Steps:
    - Read `.gitignore` to verify content.
    - Create a dummy `node_modules` directory and run `git status`.
- Failure Conditions: `.gitignore` not created or not configured correctly.
- Recovery Steps: Manually create/edit `.gitignore` with standard entries.
- Links to related tasks: None
- Notes on deterministic regeneration: Initial setup, typically done once.

## 2. Docusaurus Base Setup
### 2.1 T003 Install Docusaurus CLI
- Purpose: Install the Docusaurus command-line interface globally or locally.
- Goal: Enable Docusaurus commands for project setup and development.
- Inputs: None
- Outputs: Docusaurus CLI installed and accessible.
- Dependencies: T001
- AI Agent Responsible: Claude Code
- Constraints: Must use `npm` or `yarn` for package management as per `constitution.md` and Docusaurus v3 stack.
- Acceptance Criteria:
    - `npx docusaurus --version` or `docusaurus --version` returns a valid version.
- Validation Steps:
    - Run `npx docusaurus --version`.
- Failure Conditions: Docusaurus CLI not found or installation fails.
- Recovery Steps: Check `npm` or `yarn` installation, re-run installation command.
- Links to related tasks: None
- Notes on deterministic regeneration: Installation step.

### 2.2 T004 Create Base Docusaurus Project Structure
- Purpose: Scaffold a new Docusaurus project using the official template.
- Goal: Establish the foundational directory and file structure for the book.
- Inputs: Project name "AI/Spec-Driven Book Creation – Docusaurus v3 Textbook"
- Outputs: `package.json`, `docusaurus.config.js`, `src/`, `blog/`, `docs/`, `static/`, etc.
- Dependencies: T003
- AI Agent Responsible: Claude Code
- Constraints: Must use Docusaurus v3 template; adhere to "Zero manual coding rule" from `constitution.md`.
- Acceptance Criteria:
    - Core Docusaurus files and directories exist (e.g., `docusaurus.config.ts`, `src/pages/index.tsx`).
    - `package.json` contains Docusaurus dependencies.
- Validation Steps:
    - Run `ls -F`.
    - Read `package.json` to confirm dependencies.
- Failure Conditions: Project scaffolding fails or essential files are missing.
- Recovery Steps: Delete partially created project and re-run Docusaurus init command.
- Links to related tasks: None
- Notes on deterministic regeneration: Initial project setup command.

### 2.3 T005 [P] Install Project Dependencies
- Purpose: Install all required Node.js packages for the Docusaurus project.
- Goal: Ensure all project dependencies are available for development and build processes.
- Inputs: `package.json`
- Outputs: `node_modules/` directory
- Dependencies: T004
- AI Agent Responsible: Claude Code
- Constraints: Must use `npm install` as per `constitution.md` (or `yarn install`).
- Acceptance Criteria:
    - `node_modules` directory exists and contains installed packages.
    - No installation errors reported.
- Validation Steps:
    - Run `ls node_modules/`.
    - Check exit code of `npm install`.
- Failure Conditions: Dependency installation fails.
- Recovery Steps: Clear `node_modules` and `package-lock.json`, then retry `npm install`.
- Links to related tasks: None
- Notes on deterministic regeneration: `npm install` is deterministic given a `package-lock.json`.

## 3. Global Config Generation
### 3.1 T006 [P] Update `docusaurus.config.ts` Base Configuration
- Purpose: Configure global Docusaurus settings, including title, tagline, URL, and base URL.
- Goal: Customize the book's metadata and deployment paths.
- Inputs: Project name, GitHub Pages URL (`https://areeba-fatima.github.io/book`)
- Outputs: Modified `docusaurus.config.ts`
- Dependencies: T004
- AI Agent Responsible: Claude Code
- Constraints: Must reflect project name "AI/Spec-Driven Book Creation", GitHub Pages deployment URL; adhere to "100% Spec-Driven development rule" from `constitution.md`.
- Acceptance Criteria:
    - `title`, `tagline`, `url`, `baseUrl` are correctly set in `docusaurus.config.ts`.
- Validation Steps:
    - Read `docusaurus.config.ts` and verify content.
- Failure Conditions: Configuration values are incorrect or missing.
- Recovery Steps: Edit `docusaurus.config.ts` to correct values.
- Links to related tasks: T064
- Notes on deterministic regeneration: Direct file modification.

### 3.2 T007 Configure Docusaurus Theme Settings
- Purpose: Set up the default Docusaurus theme, including navbar, footer, and prism settings.
- Goal: Define the initial look and feel of the book's website.
- Inputs: Desired navbar items (home, chapters), footer content (copyright, links)
- Outputs: Modified `docusaurus.config.ts`
- Dependencies: T006
- AI Agent Responsible: Claude Code
- Constraints: Must support navigation to chapters and have a simple footer; adhere to `constitution.md` for user experience.
- Acceptance Criteria:
    - `navbar` items configured with correct paths/labels.
    - `footer` content is present.
- Validation Steps:
    - Read `docusaurus.config.ts` and verify theme config.
    - Visually inspect after running `npm start`.
- Failure Conditions: Theme settings are incorrect.
- Recovery Steps: Edit `docusaurus.config.ts` to correct theme settings.
- Links to related tasks: T048, T049
- Notes on deterministic regeneration: Direct file modification.

## 4. Landing Page Generation
### 4.1 T008 [US0] Create Landing Page `index.tsx`
- Purpose: Develop the main landing page for the textbook, serving as the entry point.
- Goal: Provide an engaging introduction to the book and its contents.
- Inputs: Project name, general book theme (AI & Humanoid Robotics)
- Outputs: `src/pages/index.tsx`
- Dependencies: T004
- AI Agent Responsible: Claude Code
- Constraints: Must use MDX/React components; adhere to "Docusaurus v3 + TypeScript + MDX project stack" and "AI-only authority" from `constitution.md`.
- Acceptance Criteria:
    - `src/pages/index.tsx` file exists.
    - Contains basic React/MDX structure.
    - Includes a title and brief description of the book.
- Validation Steps:
    - Read `src/pages/index.tsx`.
    - Run `npm start` and navigate to the root URL.
- Failure Conditions: File not created or contains errors.
- Recovery Steps: Re-write `src/pages/index.tsx` carefully.
- Links to related tasks: None
- Notes on deterministic regeneration: AI-generated content based on prompt.

### 4.2 T009 [US0] Implement Landing Page Header Section
- Purpose: Design and implement the hero section of the landing page.
- Goal: Capture user attention and clearly state the book's subject.
- Inputs: Book title, tagline, call-to-action (e.g., "Start Reading")
- Outputs: Updated `src/pages/index.tsx`
- Dependencies: T008
- AI Agent Responsible: Claude Code
- Constraints: Must be visually appealing; include book title and a primary CTA; adhere to `constitution.md` for UI/UX.
- Acceptance Criteria:
    - Header section with title and CTA button is present.
    - CTA button links to the first chapter (`/docs/intro`).
- Validation Steps:
    - Read `src/pages/index.tsx`.
    - Run `npm start` and verify appearance and CTA link.
- Failure Conditions: Header not rendered correctly or CTA link is broken.
- Recovery Steps: Debug React/MDX code in `src/pages/index.tsx`.
- Links to related tasks: T048
- Notes on deterministic regeneration: AI-generated content based on prompt.

### 4.3 T010 [US0] Add Landing Page Feature/Overview Section
- Purpose: Detail the key aspects and benefits of the textbook.
- Goal: Inform potential readers about the book's scope and value proposition.
- Inputs: High-level overview of book chapters/topics
- Outputs: Updated `src/pages/index.tsx`
- Dependencies: T009
- AI Agent Responsible: Claude Code
- Constraints: Must highlight core content areas (e.g., Physical AI, Humanoid Robotics); adhere to `constitution.md` for informative content.
- Acceptance Criteria:
    - Section outlining key features or topics is present.
    - Content is clear and concise.
- Validation Steps:
    - Read `src/pages/index.tsx`.
    - Run `npm start` and visually inspect the section.
- Failure Conditions: Content is missing or poorly formatted.
- Recovery Steps: Edit `src/pages/index.tsx` content.
- Links to related tasks: None
- Notes on deterministic regeneration: AI-generated content based on prompt.

## 5. Chapter Generation (Minimum 5 Chapters)
### 5.1 T011 [US1] Create Chapter 1 Directory and `_category_.json`
- Purpose: Set up the directory structure and metadata for Chapter 1.
- Goal: Organize chapter content and define its sidebar label and position.
- Inputs: Chapter title "Introduction to Physical AI"
- Outputs: `docs/chapter-1/` directory and `docs/chapter-1/_category_.json`
- Dependencies: T004
- AI Agent Responsible: Claude Code
- Constraints: Must follow Docusaurus category structure; adhere to "Minimum 5 chapters" and "Deterministic regeneration" from `constitution.md`.
- Acceptance Criteria:
    - `docs/chapter-1/` directory exists.
    - `_category_.json` exists inside with correct `label` ("Chapter 1: Introduction to Physical AI") and `position` (1).
- Validation Steps:
    - Run `ls -F docs/chapter-1/`.
    - Read `docs/chapter-1/_category_.json`.
- Failure Conditions: Directory or file not created, or metadata incorrect.
- Recovery Steps: Manually create/edit the directory and `_category_.json`.
- Links to related tasks: T048, T049
- Notes on deterministic regeneration: Direct file/directory creation.

### 5.2 T012 [US1] Generate Chapter 1 `index.mdx` Overview
- Purpose: Create the main MDX file for Chapter 1, providing an introduction.
- Goal: Introduce the chapter's topics and learning objectives.
- Inputs: Chapter 1 title, outline of sub-topics
- Outputs: `docs/chapter-1/index.mdx`
- Dependencies: T011
- AI Agent Responsible: Spec-Kit engine
- Constraints: Must be valid MDX; include a title and brief summary; adhere to "AI-only authority" and "MDX project stack" from `constitution.md`.
- Acceptance Criteria:
    - `docs/chapter-1/index.mdx` exists.
    - Contains front matter with a title (e.g., `title: 'Chapter 1 Overview'`).
    - Includes an introductory paragraph.
- Validation Steps:
    - Read `docs/chapter-1/index.mdx`.
    - Run `npm start` and navigate to `/docs/chapter-1/`.
- Failure Conditions: File not created or content is malformed.
- Recovery Steps: Re-generate or manually correct `docs/chapter-1/index.mdx`.
- Links to related tasks: T013, T048
- Notes on deterministic regeneration: AI-generated content.

### 5.3 T013 [US1] Generate Chapter 1 Section 1 Content (`1-1-definition-of-ai.mdx`)
- Purpose: Create a sub-section within Chapter 1, covering a specific topic.
- Goal: Provide detailed content on the definition of AI in the context of physical systems.
- Inputs: Specific topic (Definition of Physical AI), content requirements (depth, examples)
- Outputs: `docs/chapter-1/1-1-definition-of-ai.mdx`
- Dependencies: T012
- AI Agent Responsible: Spec-Kit engine
- Constraints: Must be valid MDX; adhere to "Specific MDX structure rules," "AI writing constraints (tone, depth, length)" from project context, and "AI-only authority" from `constitution.md`.
- Acceptance Criteria:
    - `docs/chapter-1/1-1-definition-of-ai.mdx` exists.
    - Contains a clear heading and relevant content.
- Validation Steps:
    - Read `docs/chapter-1/1-1-definition-of-ai.mdx`.
    - Run `npm start` and verify content under Chapter 1.
- Failure Conditions: File not created, content is insufficient, or MDX errors.
- Recovery Steps: Re-generate or manually correct `docs/chapter-1/1-1-definition-of-ai.mdx`.
- Links to related tasks: T014
- Notes on deterministic regeneration: AI-generated content.

### 5.4 T014 [US1] Generate Chapter 1 Section 2 Content (`1-2-historical-context.mdx`)
- Purpose: Create another sub-section for Chapter 1, covering historical context.
- Goal: Provide background on the evolution of AI and robotics.
- Inputs: Specific topic (Historical Context of AI & Robotics), content requirements.
- Outputs: `docs/chapter-1/1-2-historical-context.mdx`
- Dependencies: T013
- AI Agent Responsible: Spec-Kit engine
- Constraints: Same as T013.
- Acceptance Criteria:
    - `docs/chapter-1/1-2-historical-context.mdx` exists and contains relevant historical information.
- Validation Steps:
    - Read `docs/chapter-1/1-2-historical-context.mdx`.
    - Run `npm start` and verify content.
- Failure Conditions: Same as T013.
- Recovery Steps: Same as T013.
- Links to related tasks: T015
- Notes on deterministic regeneration: AI-generated content.

### 5.x T046 [US5] Create Chapter 5 Directory and `_category_.json`
- Purpose: Set up the directory structure and metadata for Chapter 5.
- Goal: Organize chapter content and define its sidebar label and position.
- Inputs: Chapter title "Advanced Humanoid Robotics"
- Outputs: `docs/chapter-5/` directory and `docs/chapter-5/_category_.json`
- Dependencies: T011 (pattern for chapter setup)
- AI Agent Responsible: Claude Code
- Constraints: Must follow Docusaurus category structure; adhere to "Minimum 5 chapters" and "Deterministic regeneration" from `constitution.md`.
- Acceptance Criteria:
    - `docs/chapter-5/` directory exists.
    - `_category_.json` exists inside with correct `label` ("Chapter 5: Advanced Humanoid Robotics") and `position` (5).
- Validation Steps:
    - Run `ls -F docs/chapter-5/`.
    - Read `docs/chapter-5/_category_.json`.
- Failure Conditions: Directory or file not created, or metadata incorrect.
- Recovery Steps: Manually create/edit the directory and `_category_.json`.
- Links to related tasks: T048, T049
- Notes on deterministic regeneration: Direct file/directory creation.

### 5.y T047 [US5] Generate Chapter 5 `index.mdx` Overview
- Purpose: Create the main MDX file for Chapter 5, providing an introduction.
- Goal: Introduce the chapter's topics and learning objectives.
- Inputs: Chapter 5 title, outline of sub-topics
- Outputs: `docs/chapter-5/index.mdx`
- Dependencies: T046
- AI Agent Responsible: Spec-Kit engine
- Constraints: Must be valid MDX; include a title and brief summary; adhere to "AI-only authority" and "MDX project stack" from `constitution.md`.
- Acceptance Criteria:
    - `docs/chapter-5/index.mdx` exists.
    - Contains front matter with a title.
    - Includes an introductory paragraph.
- Validation Steps:
    - Read `docs/chapter-5/index.mdx`.
    - Run `npm start` and navigate to `/docs/chapter-5/`.
- Failure Conditions: File not created or content is malformed.
- Recovery Steps: Re-generate or manually correct `docs/chapter-5/index.mdx`.
- Links to related tasks: T048
- Notes on deterministic regeneration: AI-generated content.

## 6. Sidebar & Routing
### 6.1 T048 [P] Configure `sidebars.ts` for Chapter Navigation
- Purpose: Define the navigation structure for the book's chapters in the Docusaurus sidebar.
- Goal: Enable easy access to all chapters and their sections.
- Inputs: Chapter directories and `_category_.json` files (T011, T046, etc.)
- Outputs: Modified `sidebars.ts`
- Dependencies: T011, T046 (all chapter setup tasks)
- AI Agent Responsible: Claude Code
- Constraints: Must correctly reflect chapter order; use Docusaurus `doc` or `category` items; adhere to `constitution.md` for logical information architecture.
- Acceptance Criteria:
    - `sidebars.ts` correctly lists all chapters and their sub-documents.
    - Sidebar navigation appears as expected in the UI.
- Validation Steps:
    - Read `sidebars.ts`.
    - Run `npm start` and visually inspect the sidebar.
- Failure Conditions: Sidebar links are broken or out of order.
- Recovery Steps: Edit `sidebars.ts` to correct the structure.
- Links to related tasks: T007
- Notes on deterministic regeneration: Direct file modification.

### 6.2 T049 [P] Verify Routing for All Chapters and Sections
- Purpose: Ensure that all generated chapters and their sections are accessible via their defined URLs.
- Goal: Confirm the Docusaurus routing system correctly maps content to paths.
- Inputs: All generated MDX files and `_category_.json` files.
- Outputs: Verified accessible URLs.
- Dependencies: T048 (all chapter content and sidebar tasks)
- AI Agent Responsible: Claude Code
- Constraints: All content paths must be resolved; adhere to `constitution.md` for functional navigation.
- Acceptance Criteria:
    - Navigating to each chapter's root URL (e.g., `/docs/chapter-1/`) displays the `index.mdx`.
    - Navigating to each section's URL (e.g., `/docs/chapter-1/1-1-definition-of-ai`) displays its content.
- Validation Steps:
    - Programmatically (or manually for initial check) attempt to `curl` or `fetch` each expected URL after `npm start`.
- Failure Conditions: Broken links, 404 errors, or incorrect content displayed.
- Recovery Steps: Debug `docusaurus.config.ts` and `sidebars.ts`, check file paths.
- Links to related tasks: T006
- Notes on deterministic regeneration: Validation step.

## 7. Styling + Dark Mode + Theme Overrides
### 7.1 T050 [P] Configure Dark Mode Toggle in `docusaurus.config.ts`
- Purpose: Enable and configure the dark mode functionality within Docusaurus.
- Goal: Provide users with the option to switch between light and dark themes.
- Inputs: Docusaurus theme configuration
- Outputs: Modified `docusaurus.config.ts`
- Dependencies: T007
- AI Agent Responsible: Claude Code
- Constraints: Must use Docusaurus built-in dark mode capabilities; adhere to `constitution.md` for accessibility and user preference.
- Acceptance Criteria:
    - Dark mode toggle is visible in the navbar.
    - Switching the toggle correctly changes the site's theme.
- Validation Steps:
    - Read `docusaurus.config.ts` to verify theme config.
    - Run `npm start` and test the dark mode toggle.
- Failure Conditions: Toggle not visible or dark mode not functioning.
- Recovery Steps: Edit `docusaurus.config.ts` theme config.
- Links to related tasks: T007
- Notes on deterministic regeneration: Direct file modification.

### 7.2 T051 [P] Create Custom CSS for Global Styles
- Purpose: Define project-specific CSS rules to override or extend the default Docusaurus theme.
- Goal: Apply consistent branding and styling across the entire book website.
- Inputs: Design requirements (colors, fonts, spacing)
- Outputs: `src/css/custom.css` (or similar)
- Dependencies: T004
- AI Agent Responsible: Claude Code
- Constraints: Must be valid CSS; adhere to Docusaurus styling conventions; adhere to `constitution.md` for consistent design.
- Acceptance Criteria:
    - `src/css/custom.css` file exists.
    - Contains basic custom styles (e.g., body font, link colors).
- Validation Steps:
    - Read `src/css/custom.css`.
    - Run `npm start` and visually inspect for custom styles.
- Failure Conditions: Styles not applied or file is missing.
- Recovery Steps: Create/edit `src/css/custom.css`.
- Links to related tasks: None
- Notes on deterministic regeneration: Direct file creation/modification.

### 7.3 T052 Register Custom CSS in `docusaurus.config.ts`
- Purpose: Link the custom CSS file to the Docusaurus build process.
- Goal: Ensure custom styles are loaded and applied to the website.
- Inputs: Path to `src/css/custom.css`
- Outputs: Modified `docusaurus.config.ts`
- Dependencies: T051, T007
- AI Agent Responsible: Claude Code
- Constraints: Must be correctly referenced in `docusaurus.config.ts`; adhere to `constitution.md` for proper resource loading.
- Acceptance Criteria:
    - `customCss` property in `docusaurus.config.ts` points to `src/css/custom.css`.
    - Custom styles from T051 are visible.
- Validation Steps:
    - Read `docusaurus.config.ts` to confirm `customCss` entry.
    - Run `npm start` and verify custom styles are active.
- Failure Conditions: Custom styles are not loaded.
- Recovery Steps: Correct the path in `docusaurus.config.ts`.
- Links to related tasks: T007
- Notes on deterministic regeneration: Direct file modification.

## 8. Search Integration
### 8.1 T053 [P] Integrate Algolia DocSearch or Local Search
- Purpose: Add search functionality to the Docusaurus website.
- Goal: Allow users to quickly find content within the book.
- Inputs: Docusaurus configuration, choice between Algolia (if API key available) or local search.
- Outputs: Modified `docusaurus.config.ts` and potentially new search index files.
- Dependencies: T006
- AI Agent Responsible: Claude Code
- Constraints: Must integrate seamlessly with Docusaurus; adhere to `constitution.md` for discoverability.
- Acceptance Criteria:
    - Search bar is visible in the navbar.
    - Search functionality returns relevant results.
- Validation Steps:
    - Read `docusaurus.config.ts` to confirm search plugin configuration.
    - Run `npm start` and test the search bar with keywords from chapters.
- Failure Conditions: Search bar missing, search not working, or irrelevant results.
- Recovery Steps: Debug search plugin configuration, ensure `docusaurus.config.ts` is correct.
- Links to related tasks: T007
- Notes on deterministic regeneration: Direct file modification.

## 9. Auto-Generation of MDX Content
### 9.1 T054 [P] Establish Content Generation Script/Logic
- Purpose: Define the process for programmatically generating MDX content for chapters and sections.
- Goal: Ensure "Deterministic regeneration" and "AI-only authority" for content creation.
- Inputs: Chapter outlines, content prompts, Docusaurus structure.
- Outputs: Internal logic/script for content generation.
- Dependencies: T011 (chapter structure)
- AI Agent Responsible: Spec-Kit engine
- Constraints: Must adhere to "AI-only authority" and "Deterministic regeneration" from `constitution.md`; output valid MDX.
- Acceptance Criteria:
    - The content generation process can be re-run to produce identical MDX files.
- Validation Steps:
    - Run content generation, then compare generated files with previous versions using `diff`.
- Failure Conditions: Inconsistent content generation or errors during regeneration.
- Recovery Steps: Debug the content generation logic.
- Links to related tasks: All chapter generation tasks (e.g., T012, T013)
- Notes on deterministic regeneration: Core of the "Deterministic regeneration" requirement.

### 9.2 T055 Define MDX Component Injection Rules
- Purpose: Specify how custom React components can be injected into MDX content.
- Goal: Enhance content with interactive elements or specialized formatting.
- Inputs: List of allowed components (e.g., `<Figure>`, `<CodeBlock>`)
- Outputs: Documentation/internal rules for component usage within MDX.
- Dependencies: T054
- AI Agent Responsible: Spec-Kit engine
- Constraints: Must use valid React components; adhere to "MDX project stack" and "AI-only authority" from `constitution.md`.
- Acceptance Criteria:
    - Components used within MDX render correctly.
- Validation Steps:
    - Read a generated MDX file with components.
    - Run `npm start` and verify component rendering.
- Failure Conditions: Components fail to render or cause build errors.
- Recovery Steps: Ensure components are correctly imported and used in MDX.
- Links to related tasks: None
- Notes on deterministic regeneration: Rule definition for content generation.

## 10. Markdown/MDX Linting & Validation
### 10.1 T056 [P] Integrate Markdown Linter (e.g., Prettier, remark-lint)
- Purpose: Ensure all MDX and Markdown files adhere to a consistent style and format.
- Goal: Maintain high content quality and readability.
- Inputs: Linting configuration
- Outputs: Linting setup in `package.json` or config files.
- Dependencies: T005
- AI Agent Responsible: Claude Code
- Constraints: Must apply to all `.md` and `.mdx` files; adhere to `constitution.md` for code quality.
- Acceptance Criteria:
    - Linting command runs without errors on existing files.
    - Formatting is applied consistently.
- Validation Steps:
    - Run `npm run lint:md` (if configured) or `prettier --check "**/*.{md,mdx}"`.
- Failure Conditions: Linting fails or reports unexpected errors.
- Recovery Steps: Adjust linter configuration or fix reported issues.
- Links to related tasks: T060
- Notes on deterministic regeneration: Tool setup.

### 10.2 T057 [P] Implement MDX Schema Validation (if applicable)
- Purpose: Validate the structure and content of MDX files against a predefined schema.
- Goal: Prevent malformed MDX that could cause build failures or rendering issues.
- Inputs: MDX schema definition
- Outputs: Validation logic/tool integration.
- Dependencies: T056
- AI Agent Responsible: Claude Code
- Constraints: Must validate all generated MDX; adhere to `constitution.md` for data integrity.
- Acceptance Criteria:
    - Validation process runs without errors on all generated MDX.
- Validation Steps:
    - Run a custom validation script on `docs/` directory.
- Failure Conditions: Validation errors reported.
- Recovery Steps: Debug MDX generation or validation logic.
- Links to related tasks: T060
- Notes on deterministic regeneration: Tool setup for content quality.

## 11. Build System Tasks
### 11.1 T058 [P] Configure Docusaurus Build Command
- Purpose: Set up the command for building the static Docusaurus website.
- Goal: Generate the deployable static assets for the book.
- Inputs: Docusaurus project
- Outputs: Built static site in `build/` directory.
- Dependencies: All chapter generation and configuration tasks (e.g., T006, T047)
- AI Agent Responsible: Claude Code
- Constraints: Must use `docusaurus build`; adhere to `constitution.md` for production-ready output.
- Acceptance Criteria:
    - `npm run build` completes successfully.
    - `build/` directory exists and contains static HTML, CSS, JS files.
- Validation Steps:
    - Run `npm run build`.
    - Run `ls build/`.
- Failure Conditions: Build fails with errors.
- Recovery Steps: Inspect build logs, fix underlying configuration or content issues.
- Links to related tasks: T060
- Notes on deterministic regeneration: Standard Docusaurus command.

### 11.2 T059 [P] Optimize Build Output (Minification, Compression)
- Purpose: Reduce the size of the generated static assets for faster loading times.
- Goal: Improve website performance for end-users.
- Inputs: Docusaurus build configuration
- Outputs: Minified and compressed assets in `build/`.
- Dependencies: T058
- AI Agent Responsible: Claude Code
- Constraints: Must use Docusaurus built-in optimizations or configure plugins; adhere to `constitution.md` for performance NFRs.
- Acceptance Criteria:
    - Build output files (HTML, CSS, JS) are noticeably smaller.
    - Lighthouse/PageSpeed Insights scores improve (if tested).
- Validation Steps:
    - Run `npm run build` and compare file sizes in `build/`.
- Failure Conditions: Optimization causes build errors or breaks functionality.
- Recovery Steps: Revert optimization settings and debug.
- Links to related tasks: None
- Notes on deterministic regeneration: Docusaurus build includes optimizations.

## 12. GitHub Pages Deployment Setup
### 12.1 T060 [P] Create GitHub Actions Workflow for Docusaurus Build & Deploy
- Purpose: Automate the process of building and deploying the Docusaurus site to GitHub Pages.
- Goal: Enable continuous deployment of book updates.
- Inputs: GitHub repository details, Docusaurus build command, GitHub Pages deployment action.
- Outputs: `.github/workflows/deploy.yml`
- Dependencies: T058
- AI Agent Responsible: Claude Code
- Constraints: Must use `actions/checkout`, `actions/setup-node`, `peaceiris/actions-gh-pages`; adhere to "GitHub Pages deployment requirements" and `constitution.md` for CI/CD.
- Acceptance Criteria:
    - `.github/workflows/deploy.yml` file exists and is correctly configured.
    - Workflow triggered by pushes to `main` branch.
    - Includes steps for `npm install`, `npm run build`, and deployment to `gh-pages` branch.
- Validation Steps:
    - Read `.github/workflows/deploy.yml`.
    - Manually trigger a workflow run or push a test commit.
- Failure Conditions: Workflow file is incorrect, or deployment action fails.
- Recovery Steps: Debug YAML syntax, check action documentation.
- Links to related tasks: T061, T062
- Notes on deterministic regeneration: Direct file creation.

### 12.2 T061 Configure GitHub Pages Branch Setting
- Purpose: Point GitHub Pages to the correct branch (`gh-pages`) for deployment.
- Goal: Ensure the built Docusaurus site is served correctly.
- Inputs: GitHub repository settings (manual configuration or `gh cli` command).
- Outputs: GitHub Pages configured.
- Dependencies: T060 (assumes `gh-pages` branch will be created by action)
- AI Agent Responsible: Claude Code (via `gh` CLI if possible, or instruct user)
- Constraints: Must target the `gh-pages` branch; adhere to "GitHub Pages deployment requirements" from `constitution.md`.
- Acceptance Criteria:
    - GitHub Pages source branch is set to `gh-pages`.
- Validation Steps:
    - Check GitHub repository settings under "Pages" section.
- Failure Conditions: GitHub Pages not serving from `gh-pages`.
- Recovery Steps: Manually adjust GitHub repository settings.
- Links to related tasks: None
- Notes on deterministic regeneration: Configuration step.

## 13. Final Deployment Execution
### 13.1 T062 [P] Trigger Initial Deployment via GitHub Actions
- Purpose: Execute the first full build and deployment of the Docusaurus site.
- Goal: Publish the book website to GitHub Pages for the first time.
- Inputs: Committed `.github/workflows/deploy.yml`
- Outputs: Live website at `https://areeba-fatima.github.io/book`
- Dependencies: T060, T061
- AI Agent Responsible: Claude Code (by instructing user to push or force push the branch that contains the workflow file to trigger it)
- Constraints: Requires a successful GitHub Actions run; adhere to `constitution.md` for live deployment.
- Acceptance Criteria:
    - GitHub Actions workflow runs successfully.
    - `gh-pages` branch is created/updated.
    - Website is accessible at the public URL.
- Validation Steps:
    - Monitor GitHub Actions runs.
    - Navigate to `https://areeba-fatima.github.io/book`.
- Failure Conditions: Workflow fails, or website is not live.
- Recovery Steps: Debug GitHub Actions logs, check GitHub Pages settings.
- Links to related tasks: T063
- Notes on deterministic regeneration: Triggering an automated process.

## 14. Post-Deployment Validation
### 14.1 T063 Perform Public URL Verification
- Purpose: Confirm the deployed Docusaurus website is fully functional and accessible.
- Goal: Ensure the book is available to readers without issues.
- Inputs: Public URL: `https://areeba-fatima.github.io/book`
- Outputs: Verification report.
- Dependencies: T062
- AI Agent Responsible: Claude Code (via `WebFetch` or instructing user)
- Constraints: Must confirm content loading, navigation, and basic functionality; adhere to `constitution.md` for production quality.
- Acceptance Criteria:
    - The landing page loads correctly.
    - All chapters are navigable.
    - Dark mode toggle functions.
    - Search functions (if integrated).
- Validation Steps:
    - Use `WebFetch` to fetch the main URL and a few chapter URLs to ensure 200 OK responses.
    - Visually inspect (or instruct user to) the live site.
- Failure Conditions: Website unreachable, pages not loading, or functionality broken.
- Recovery Steps: Debug deployment, check GitHub Pages logs, review Docusaurus build.
- Links to related tasks: T062
- Notes on deterministic regeneration: Validation step.

### 14.2 T064 Verify `baseUrl` and Asset Paths
- Purpose: Ensure all internal links and asset references are correctly resolved on the deployed site.
- Goal: Prevent broken images, CSS, or JavaScript on GitHub Pages.
- Inputs: Deployed website
- Outputs: Verification report.
- Dependencies: T063
- AI Agent Responsible: Claude Code (via `WebFetch` and parsing HTML)
- Constraints: All paths must be relative to `baseUrl`; adhere to `constitution.md` for asset loading.
- Acceptance Criteria:
    - No broken asset links (images, CSS, JS).
    - Internal navigation links work correctly.
- Validation Steps:
    - Fetch main page HTML, parse for `src` and `href` attributes, and check for 404s.
- Failure Conditions: Broken asset links or navigation.
- Recovery Steps: Adjust `baseUrl` in `docusaurus.config.ts`, ensure relative paths in content.
- Links to related tasks: T006
- Notes on deterministic regeneration: Validation step.

## 15. Constitution Compliance Tasks
### 15.1 T065 Audit `constitution.md` Compliance
- Purpose: Verify that all tasks, outputs, and processes adhere to the project's governing `constitution.md`.
- Goal: Ensure strict adherence to "Zero manual coding rule", "100% Spec-Driven development rule", and "AI-only authority".
- Inputs: `constitution.md`, all generated code and content, task logs.
- Outputs: Compliance report.
- Dependencies: All other tasks.
- AI Agent Responsible: Claude Code
- Constraints: Must be a rigorous, cross-cutting audit.
- Acceptance Criteria:
    - No instances of manual coding detected.
    - All code/content traceable to a specification or AI generation.
- Validation Steps:
    - Manual review of changes, `git blame`, cross-reference with task outputs.
- Failure Conditions: Non-compliance detected.
- Recovery Steps: Revert non-compliant changes, re-generate content, reinforce AI-only workflow.
- Links to related tasks: None
- Notes on deterministic regeneration: Ongoing audit.

### 15.2 T066 Implement Specification Drift Detection
- Purpose: Identify any discrepancies between the generated `tasks.md`, `plan.md`, `spec.md`, and actual implementation.
- Goal: Ensure consistency across all project artifacts.
- Inputs: `spec.md`, `plan.md`, `tasks.md`, codebase.
- Outputs: Drift report.
- Dependencies: T065 (conceptually)
- AI Agent Responsible: Claude Code (via comparison logic)
- Constraints: Must compare artifact versions; adhere to `constitution.md` for consistency.
- Acceptance Criteria:
    - No significant drift detected between artifacts.
- Validation Steps:
    - Develop a script to compare key elements (e.g., feature list from spec vs. tasks in tasks.md).
- Failure Conditions: Significant discrepancies found.
- Recovery Steps: Update artifacts to reflect reality or re-generate to spec.
- Links to related tasks: None
- Notes on deterministic regeneration: Ongoing audit.

### 15.3 T067 Version Bumping Workflow
- Purpose: Define and automate the process for updating the book's version number.
- Goal: Maintain clear versioning for releases and deployments.
- Inputs: `package.json`, versioning strategy (e.g., semantic versioning)
- Outputs: Script or instructions for version bumping.
- Dependencies: T060 (deployment)
- AI Agent Responsible: Claude Code
- Constraints: Must be integrated with CI/CD; adhere to `constitution.md` for release management.
- Acceptance Criteria:
    - Version number in `package.json` is updated.
    - New version is reflected in deployed site (if displayed).
- Validation Steps:
    - Run version bump command, then check `package.json`.
- Failure Conditions: Version not updated or causes build issues.
- Recovery Steps: Manually correct `package.json`.
- Links to related tasks: None
- Notes on deterministic regeneration: Scripted process.

## 16. Sequencing & Execution Order

### Full Dependency Graph
The tasks are generally structured in a sequential manner, with later categories depending on earlier ones. Within categories, some tasks are parallelizable, indicated by `[P]`.

-   **Phase 1: Repository Initialization**
    -   T001 → T002 (T002 is [P] relative to T001's output)
-   **Phase 2: Docusaurus Base Setup**
    -   T003 → T004 → T005
-   **Phase 3: Global Config Generation**
    -   T006 → T007 (T006 is [P] relative to T004; T007 depends on T006)
-   **Phase 4: Landing Page Generation**
    -   T008 → T009 → T010 (all depend on T004; T009 depends on T008; T010 depends on T009)
-   **Phase 5: Chapter Generation (Example for Chapter 1)**
    -   T011 → T012 → T013 → T014 → ... (each sub-section depends on the previous)
    -   Chapter generation for different chapters (e.g., T011-T014 for Chapter 1, T015-T018 for Chapter 2) can be parallelized **after** their respective directory/category creation (e.g., T011, T015).
-   **Phase 6: Sidebar & Routing**
    -   T048 (depends on all chapter `_category_.json` creations like T011, T046)
    -   T049 (depends on T048 and all chapter content generation)
-   **Phase 7: Styling + Dark Mode + Theme Overrides**
    -   T050 (depends on T007)
    -   T051 (is [P] relative to T004)
    -   T052 (depends on T051 and T007)
-   **Phase 8: Search Integration**
    -   T053 (depends on T006)
-   **Phase 9: Auto-Generation of MDX Content**
    -   T054 (depends on chapter structure like T011)
    -   T055 (depends on T054)
-   **Phase 10: Markdown/MDX Linting & Validation**
    -   T056 (depends on T005)
    -   T057 (depends on T056)
-   **Phase 11: Build System Tasks**
    -   T058 (depends on all content and config tasks, e.g., T047, T006)
    -   T059 (depends on T058)
-   **Phase 12: GitHub Pages Deployment Setup**
    -   T060 (depends on T058)
    -   T061 (depends on T060, conceptually)
-   **Phase 13: Final Deployment Execution**
    -   T062 (depends on T060, T061)
-   **Phase 14: Post-Deployment Validation**
    -   T063 → T064 (T063 depends on T062; T064 depends on T063)
-   **Phase 15: Constitution Compliance Tasks**
    -   T065 (depends on all previous tasks, an ongoing audit)
    -   T066 (depends on all content and configuration, an ongoing audit)
    -   T067 (depends on T060)

### Required Execution Order
The overall flow is strictly sequential by major category. Within categories, `[P]` tasks can be executed in parallel.

1.  **Repository Initialization** (T001, T002)
2.  **Docusaurus Base Setup** (T003, T004, T005)
3.  **Global Config Generation** (T006, T007)
4.  **Landing Page Generation** (T008, T009, T010)
5.  **Chapter Generation** (T011-T047, all chapters and their sub-sections)
6.  **Sidebar & Routing** (T048, T049)
7.  **Styling + Dark Mode + Theme Overrides** (T050, T051, T052)
8.  **Search Integration** (T053)
9.  **Auto-Generation of MDX Content** (T054, T055) - These define the process, actual generation occurs in Chapter Generation.
10. **Markdown/MDX Linting & Validation** (T056, T057)
11. **Build System Tasks** (T058, T059)
12. **GitHub Pages Deployment Setup** (T060, T061)
13. **Final Deployment Execution** (T062)
14. **Post-Deployment Validation** (T063, T064)
15. **Constitution Compliance Tasks** (T065, T066, T067) - These are ongoing or final checks.

### Parallelizable vs. Sequential Tasks

**Parallelizable Tasks (within their respective phases):**
-   T002: Creating `.gitignore` can be done while `git init` (T001) finishes.
-   T006: Updating `docusaurus.config.ts` base config can start as soon as Docusaurus project (T004) is created.
-   T051: Creating custom CSS can start as soon as Docusaurus project (T004) is created.
-   Chapter Content Generation: Once `_category_.json` and `index.mdx` are created for multiple chapters (e.g., T011, T012 for Chapter 1; then T015, T016 for Chapter 2), the *sub-sections* for different chapters can be generated in parallel. Example: T013 and T017.
-   T048: Configuring `sidebars.ts` can be parallelized with content generation, but must depend on all chapter `_category_.json` files being present.
-   T050: Configuring dark mode can be done concurrently with other global config changes.
-   T053: Integrating search can be done concurrently with other global config changes.
-   T056, T057: Linting and validation tools can be set up after basic dependencies are installed.
-   T058, T059: Build configuration and optimization can be set up in parallel with content finalization.
-   T060: Creating GitHub Actions workflow can begin once build command (T058) is defined.

**Sequential Tasks:**
-   Most tasks within a single chapter's content generation (e.g., T012 → T013 → T014) are sequential as one builds on the other.
-   Deployment steps (build, then deploy, then verify) are inherently sequential.
-   Configuration updates often depend on the base configuration being present.

### Initial → Mid → Final Execution Cycles

-   **Initial Cycle (Setup & Core Structure):**
    -   Repository Initialization (T001, T002)
    -   Docusaurus Base Setup (T003, T004, T005)
    -   Global Config Generation (T006, T007)
    -   Landing Page Generation (T008, T009, T010)
    -   Initial Chapter (e.g., Chapter 1) setup and `index.mdx` (T011, T012)
    -   Basic `sidebars.ts` configuration (T048 - initial draft)
    -   Styling setup (T051, T052)
    -   Initial Docusaurus build (T058) for local testing.

-   **Mid Cycle (Content Generation & Refinement):**
    -   Generate all remaining Chapter `_category_.json` and `index.mdx` files (T015, T019, T023, T027, etc.)
    -   Generate all Chapter Sub-sections (T013, T014, and their counterparts for all chapters, T017, T018, etc., up to T047)
    -   Refine `sidebars.ts` with all chapters (T048 - final)
    -   Implement Dark Mode (T050)
    -   Integrate Search (T053)
    -   Set up Linting/Validation (T056, T057)
    -   Iterative local builds and testing (`npm start`, `npm run build`)
    -   Specification Drift Detection (T066) - ongoing.

-   **Final Cycle (Deployment & Verification):**
    -   Final Build Optimizations (T059)
    -   Create GitHub Actions Workflow (T060)
    -   Configure GitHub Pages Branch (T061)
    -   Trigger Initial Deployment (T062)
    -   Public URL Verification (T063)
    -   Verify `baseUrl` and Asset Paths (T064)
    -   Audit `constitution.md` Compliance (T065)
    -   Version Bumping Workflow (T067)

## 17. Governance & Compliance
### 17.1 T068 Constitution Compliance Enforcement
- Purpose: Continuously ensure all development activities, including tool usage and code generation, strictly adhere to `constitution.md`.
- Goal: Maintain the integrity of the "Zero manual coding rule," "100% Spec-Driven development rule," and "AI-only authority."
- Inputs: `constitution.md`, all agent interactions, generated files.
- Outputs: Compliance audit trails.
- Dependencies: All tasks
- AI Agent Responsible: Claude Code / Spec-Kit engine
- Constraints: Automatic monitoring of agent actions; flagging any deviations.
- Acceptance Criteria:
    - No direct manual edits are found in tracked files.
    - All code changes are initiated by AI agents.
- Validation Steps:
    - Regular `git diff` against a baseline after AI runs.
    - Review of execution logs for manual interventions.
- Failure Conditions: Detection of manual edits or non-compliant agent behavior.
- Recovery Steps: Rollback non-compliant changes, re-educate agent or adjust constraints.
- Links to related tasks: T065
- Notes on deterministic regeneration: Continuous process.

### 17.2 T069 Zero Manual Edits Verification
- Purpose: Explicitly check that no human-introduced changes have been made to the codebase, especially generated content.
- Goal: Uphold the "Zero manual coding rule" crucial for deterministic regeneration.
- Inputs: Current Git working directory, `.git/` history.
- Outputs: Verification report.
- Dependencies: T001
- AI Agent Responsible: Claude Code (via `git status` and `git diff`)
- Constraints: Must be performed before any AI-driven commit or regeneration.
- Acceptance Criteria:
    - `git status` reports no untracked or modified files not introduced by the AI.
- Validation Steps:
    - Run `git status`
    - Run `git diff`
- Failure Conditions: Unexpected manual modifications detected.
- Recovery Steps: Discard manual changes or raise an alert for human review.
- Links to related tasks: T065
- Notes on deterministic regeneration: Pre-condition for AI work.

### 17.3 T070 Specification Drift Detection
- Purpose: Automatically identify and report discrepancies between the `spec.md`, `plan.md`, `tasks.md`, and the current state of the generated codebase.
- Goal: Maintain coherence and consistency across all project artifacts.
- Inputs: `spec.md`, `plan.md`, `tasks.md`, generated Docusaurus files, configuration.
- Outputs: Drift analysis report, suggested updates.
- Dependencies: T066
- AI Agent Responsible: Spec-Kit engine
- Constraints: Requires parsing and comparison capabilities across different file formats.
- Acceptance Criteria:
    - Identified changes in requirements or architecture are reflected in the corresponding documents.
    - No unaddressed inconsistencies.
- Validation Steps:
    - Implement a comparison algorithm that checks feature lists, component names, API endpoints, etc.
- Failure Conditions: Unresolved or persistent specification drift.
- Recovery Steps: Update the relevant specification document or adjust implementation to match.
- Links to related tasks: T066
- Notes on deterministic regeneration: Automated integrity check.

### 17.4 T071 Audit Tasks
- Purpose: Periodically review generated code, content, and configurations for quality, security, and adherence to Docusaurus best practices.
- Goal: Ensure the textbook is high-quality, secure, and performant.
- Inputs: All generated files.
- Outputs: Audit report with findings and recommendations.
- Dependencies: All tasks
- AI Agent Responsible: Claude Code
- Constraints: Must cover code style, performance, SEO, accessibility.
- Acceptance Criteria:
    - Audit reports no critical issues.
    - Recommendations are actionable and implemented.
- Validation Steps:
    - Use Docusaurus internal tools, Lighthouse, or other relevant linters/scanners.
- Failure Conditions: Critical issues identified during audit.
- Recovery Steps: Create new tasks to address audit findings.
- Links to related tasks: None
- Notes on deterministic regeneration: Periodic review.

### 17.5 T072 Version Bumping Workflows
- Purpose: Implement the specified version bumping strategy for the book project.
- Goal: Ensure consistent and automated versioning integrated with the deployment pipeline.
- Inputs: Project version (e.g., in `package.json`), semantic versioning rules.
- Outputs: Automated script or CI step for version updates.
- Dependencies: T067
- AI Agent Responsible: Claude Code
- Constraints: Must update `package.json` and potentially Docusaurus config; adhere to `constitution.md` for release management.
- Acceptance Criteria:
    - Version number is correctly incremented (patch, minor, major).
    - Updated version is reflected in the built/deployed site.
- Validation Steps:
    - Run the version bumping script, then verify `package.json` and deployed site.
- Failure Conditions: Incorrect version update or build/deployment failure due to version conflict.
- Recovery Steps: Manually correct version, debug automation script.
- Links to related tasks: T067
- Notes on deterministic regeneration: Automated process.
