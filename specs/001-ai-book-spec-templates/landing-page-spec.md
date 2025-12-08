# Landing Page Specification

This specification details the design and functional requirements for the landing page of the "Physical AI & Humanoid Robotics: An AI-Generated Textbook" project, developed using Docusaurus v3 and deployed via GitHub Pages, strictly adhering to Spec-Kit Plus principles.

## 1.0 Overview

### 1.1 Purpose
The purpose of the landing page is to serve as the primary entry point for users interested in the "Physical AI & Humanoid Robotics" textbook. It aims to introduce the project, highlight its unique AI/Spec-Driven development methodology, provide an overview of the book's content, and guide users to the full textbook. It also functions as a central hub for project information and calls to action.

### 1.2 Scope
This document covers the complete definition of the landing page's content, structure, functional and non-functional requirements, UI/UX specifications, information flow, technical constraints, risks, and acceptance criteria. It exclusively focuses on the landing page content, located at the site root (`/`), and its integration within the Docusaurus framework.

### 1.3 Document Control
| Version | Date       | Author       | Changes                                         |
| :------ | :--------- | :----------- | :---------------------------------------------- |
| 1.0     | 2025-12-05 | Claude Code  | Initial generation based on project requirements |

### 1.4 Stakeholders
- **Project Lead / Architect:** Defines overarching vision and architectural principles.
- **AI Agent (Claude Code):** Responsible for generating the landing page content and integrating it.
- **End-Users / Readers:** Primary audience for the textbook; their experience is paramount.
- **Spec-Kit Plus Framework:** Provides guidelines and templates for specification generation.
- **Docusaurus Framework:** Technical platform for content rendering and site structure.

## 2.0 Problem Statement

The "Physical AI & Humanoid Robotics" textbook project requires a compelling and informative entry point to engage potential readers and clearly articulate its value proposition. Without a dedicated landing page, users might struggle to understand the project's scope, the nature of its AI-generated content, and how to navigate the extensive textbook chapters.

### 2.1 Need for Landing Page
A landing page is crucial for:
- Providing an immediate and clear introduction to the textbook's subject matter.
- Showcasing the innovative AI/Spec-Driven development approach.
- Guiding users to the core content (chapters) effectively.
- Presenting key features and benefits in an accessible format.

### 2.2 Gaps Solved
The landing page addresses the following gaps:
- **Discovery:** Acts as a discoverable entry point for search engines and direct links.
- **Engagement:** Captures user interest with a compelling overview and clear calls to action.
- **Context:** Explains the project's unique methodology, distinguishing it from traditionally authored books.
- **Navigation:** Simplifies access to the various chapters, reducing friction for new users.

### 2.3 Role in Spec-Driven Workflow
Within the Spec-Driven workflow, the landing page serves as an initial, high-visibility artifact generated from a dedicated specification. Its creation validates the content generation capabilities of the AI agent and the Docusaurus setup, demonstrating the end-to-end automation of the publishing pipeline as defined in `plan.md` and `tasks.md`.

## 3.0 Objectives

### 3.1 Primary Goals
- **Introduce Project:** Clearly articulate the purpose and scope of the "Physical AI & Humanoid Robotics: An AI-Generated Textbook."
- **Promote Content:** Highlight the key themes, unique aspects, and value of the AI-generated content.
- **Facilitate Navigation:** Provide intuitive links and calls to action for accessing the book's chapters.

### 3.2 Secondary Goals
- **Showcase Methodology:** Briefly explain the Spec-Driven Development and AI generation process.
- **Encourage Engagement:** Drive users to explore the GitHub repository and potentially contribute.
- **Establish Credibility:** Present a professional and well-structured interface that reflects the quality of the content.

### 3.3 Functional vs Non-Functional Objectives
- **Functional:** Content display (hero, features, chapters), interactive elements (CTAs, navigation).
- **Non-Functional:** Performance (fast load times), responsiveness (mobile/desktop), SEO (discoverability), accessibility (WCAG compliance), maintainability (spec-driven, AI-generated).

## 4.0 Functional Requirements

Each functional requirement (FR) specifies a distinct behavior or feature of the landing page.

### FR-01 Hero Section
- **Description**: The landing page SHALL feature a prominent hero section at the top, immediately visible upon page load. This section SHALL include the main title of the textbook, a concise tagline, and a brief introductory paragraph.
- **Justification**: The hero section serves as the user's first impression, conveying the essence of the book and capturing their attention.
- **Acceptance Criteria**:
    - The hero section is the first visible content element.
    - It contains the exact `title` from `docusaurus.config.ts`.
    - It contains the exact `tagline` from `docusaurus.config.ts`.
    - An introductory paragraph (3-5 sentences) summarizing the book's premise is present.
    - All text elements are centrally aligned.
- **Dependencies**: `docusaurus.config.ts` for title/tagline.

### FR-02 Navigation
- **Description**: The landing page SHALL integrate seamlessly with the Docusaurus navbar, providing consistent navigation to the main "Book" sidebar and the project's GitHub repository.
- **Justification**: Consistent navigation enhances user experience and allows easy access to other parts of the site and project resources.
- **Acceptance Criteria**:
    - The Docusaurus navbar is visible at the top of the page.
    - A "Book" link/button (label "Book", `sidebarId: 'bookSidebar'`) is present in the navbar, linking to the main documentation index.
    - A "GitHub" link/button is present in the navbar, linking to `https://github.com/areeba-fatima/book`.
- **Dependencies**: `docusaurus.config.ts` for navbar configuration.

### FR-03 CTA Buttons
- **Description**: The hero section SHALL include at least two prominent Call-to-Action (CTA) buttons: "Read the Book" and "Explore on GitHub". These buttons SHALL be visually distinct and guide users to primary actions.
- **Justification**: CTAs direct users to key content and resources, improving engagement and discoverability.
- **Acceptance Criteria**:
    - Two buttons are present beneath the hero text.
    - The first button is labeled "Read the Book" and links to the primary book index (`/`).
    - The second button is labeled "Explore on GitHub" and links to `https://github.com/areeba-fatima/book`.
    - Buttons are styled according to UI/UX specifications.
- **Dependencies**: Docusaurus routing, GitHub repository URL.

### FR-04 Features Section
- **Description**: The landing page SHALL include a "Key Features" or "What You'll Learn" section, presenting 3-5 bullet points or short paragraphs outlining the main benefits or topics covered in the textbook.
- **Justification**: This section provides a quick overview of the book's content, helping users decide if it's relevant to their interests.
- **Acceptance Criteria**:
    - A dedicated section titled "Key Features" or similar exists.
    - It contains 3-5 distinct feature descriptions (bullet points or short paragraphs).
    - Each feature description is concise and informative.
- **Dependencies**: N/A (content defined within the spec).

### FR-05 How It Works
- **Description**: A section titled "How It Works" or "Our Approach" SHALL describe the AI/Spec-Driven Development methodology used to create the textbook. This section SHALL briefly explain the role of AI (Claude Code) and Spec-Kit Plus.
- **Justification**: This unique development approach is a core differentiator and should be clearly communicated.
- **Acceptance Criteria**:
    - A section titled "How It Works" or similar exists.
    - It explains the AI/Spec-Driven Development process.
    - It mentions Claude Code and Spec-Kit Plus with links to their respective resources (`https://www.claude.com/product/claude-code`, `https://github.com/panaversity/spec-kit-plus/`).
    - The explanation is 2-4 paragraphs long.
- **Dependencies**: Spec-Kit Plus and Claude Code documentation.

### FR-06 AI Workflow Diagram
- **Description**: The "How It Works" section SHALL optionally include a simple ASCII art diagram illustrating the AI-driven workflow, from specification to deployment.
- **Justification**: A visual representation can simplify complex technical processes, enhancing understanding.
- **Acceptance Criteria**:
    - An ASCII diagram is present (optional, if feasible within MDX constraints).
    - The diagram visually represents the spec-driven, AI-generated book workflow.
- **Dependencies**: MDX rendering capabilities for ASCII art.

### FR-07 Footer
- **Description**: The landing page SHALL display a consistent Docusaurus footer, including the copyright information and any specified links (currently empty).
- **Justification**: The footer provides essential legal and organizational information and maintains site consistency.
- **Acceptance Criteria**:
    - The Docusaurus footer is visible at the bottom of the page.
    - The copyright text matches the `copyright` field in `docusaurus.config.ts`.
    - The `links` array in the footer is empty, as specified.
- **Dependencies**: `docusaurus.config.ts` for footer configuration.

### FR-08 Docusaurus Theming
- **Description**: The landing page SHALL fully respect and utilize the Docusaurus theming system, including dark mode. The appearance SHALL adapt correctly when the user switches between light and dark modes.
- **Justification**: Providing a dark mode enhances user comfort and adheres to modern web design practices.
- **Acceptance Criteria**:
    - The page's styling (background, text color, component colors) changes correctly upon theme switch.
    - The `colorMode` settings in `docusaurus.config.ts` (defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: true) are active.
    - All custom CSS from `./src/css/custom.css` is applied correctly in both modes.
- **Dependencies**: `docusaurus.config.ts` theme configuration, Docusaurus theme context.

## 5.0 Non-Functional Requirements

### 5.1 Accessibility
The landing page SHALL adhere to WCAG 2.1 AA guidelines, ensuring it is usable by individuals with disabilities. This includes proper semantic HTML, ARIA attributes where necessary, keyboard navigability, and sufficient color contrast.
- **Justification**: Ensures a broad audience can access and interact with the content.
- **Acceptance Criteria**: Passes automated accessibility audits (e.g., Lighthouse, Axe DevTools) with zero critical errors. All interactive elements are keyboard-navigable.

### 5.2 Performance
The landing page SHALL load within 2 seconds on a typical broadband connection (TTFB < 500ms, LCP < 2s, TBT < 200ms) and within 5 seconds on a simulated 3G network. Image assets SHALL be optimized and lazy-loaded.
- **Justification**: Fast loading times improve user experience and SEO ranking.
- **Acceptance Criteria**: Lighthouse performance score of 90+ on desktop and mobile.

### 5.3 Responsiveness
The landing page SHALL be fully responsive, adapting its layout and content presentation gracefully across a wide range of devices and screen sizes, from mobile phones (min width 320px) to large desktop displays.
- **Justification**: Ensures optimal viewing experience for all users regardless of device.
- **Acceptance Criteria**: Layout remains functional and aesthetically pleasing on devices with widths: 320px, 768px, 1024px, 1440px.

### 5.4 SEO
The landing page SHALL be discoverable by search engines. This includes relevant meta tags (`<title>`, `<meta name="description">`, Open Graph tags), semantic HTML, and clean URLs. The Docusaurus `title` and `tagline` SHALL be correctly used for SEO.
- **Justification**: Maximizes visibility and organic traffic to the textbook.
- **Acceptance Criteria**: Proper `<title>` and `<meta name="description">` tags are rendered. The page is indexed by major search engines (verified via Fetch as Google or similar).

### 5.5 Maintainability
The landing page's underlying MDX and any associated configuration SHALL be 100% AI-generated from this specification, with zero manual edits. It SHALL be easily regenerable and auditable.
- **Justification**: Adheres to the core project principle of AI/Spec-Driven Development and ensures consistency and ease of updates.
- **Acceptance Criteria**: No manual edits are detected in `docs/landing-page.mdx`. Regeneration from the spec produces an identical output.

### 5.6 Version Control Strategy
All source files for the landing page specification SHALL be maintained under Git version control within the main project repository. Changes SHALL follow a structured branching and merging strategy, with all modifications auditable.
- **Justification**: Ensures traceability, collaboration, and rollback capabilities for the specification itself.
- **Acceptance Criteria**: `specs/001-ai-book-spec-templates/landing-page-spec.md` is present in the Git repository and its history reflects all approved changes.

## 6.0 Content Architecture

### 6.1 Layout
The landing page layout will follow a single-column, top-to-bottom flow on mobile, transitioning to a multi-column or wider format on desktop. Key sections will include: Hero, Features, How It Works, and Footer.

### 6.2 Content Blocks
- **Hero Section**: Title, Tagline, Introduction, CTA Buttons.
- **Features Section**: List of 3-5 key features/topics.
- **How It Works Section**: Explanation of AI/Spec-Driven approach, optional ASCII workflow diagram.
- **Footer**: Copyright information, static links (if any).

### 6.3 MDX Structure
The landing page will be an MDX (`.mdx`) file, leveraging Markdown for text content and JSX for Docusaurus components or custom layout elements (e.g., for CTA buttons, feature cards).
- **Headings**: `#` for page title (implicit via Docusaurus config), `##` for section titles, `###` for sub-sections.
- **Lists**: Markdown bullet points or numbered lists.
- **Code Blocks**: Fenced code blocks (` ``` `) for examples.
- **Callouts**: Docusaurus-specific admonition components (e.g., `:::note`).

### 6.4 Headings Hierarchy
- The main page title will be managed by Docusaurus `themeConfig.navbar.title` and `config.title`.
- Primary sections within the MDX will use `##` (H2).
- Sub-sections within primary sections will use `###` (H3).

### 6.5 Internal + External Links
- **Internal Links**: All links to textbook chapters SHALL use Docusaurus relative paths (e.g., `[Chapter 1](/chapter-1)`).
- **External Links**: Links to GitHub, Spec-Kit Plus, Claude Code, etc., SHALL be absolute URLs.
- **SEO**: All links SHALL use descriptive anchor text.

### 6.6 Tables
Tables will be used for structured data presentation where appropriate (e.g., Acceptance Criteria Table, Document Control). Markdown table syntax will be used.

## 7.0 UI/UX Specifications

### 7.1 Typography
- **Font Family**: Docusaurus default (Inter or similar sans-serif).
- **Heading Sizes**: H1 (managed by Docusaurus), H2 (2.5rem), H3 (2rem), H4 (1.5rem), H5 (1.25rem), H6 (1rem).
- **Body Text**: 1rem (16px) with 1.5 line height.
- **Font Weights**: Regular (400), Semi-bold (600), Bold (700).

### 7.2 Color Palette
- **Primary**: Docusaurus theme primary color.
- **Text**: Dark gray on light mode, light gray on dark mode.
- **Background**: White/light shades on light mode, dark/black shades on dark mode.
- **Accents**: Used for CTA buttons, links, and highlights.
- **Compliance**: All color combinations SHALL meet WCAG 2.1 AA contrast ratios.

### 7.3 Spacing Scale
- **Base Unit**: 0.5rem (8px).
- **Component Spacing**: 1rem, 1.5rem, 2rem, 3rem.
- **Section Padding**: 4rem vertical padding.
- **Line Height**: 1.5 for body text, 1.2 for headings.

### 7.4 Button Styles
- **Primary CTA**: Solid background, contrasting text, rounded corners. Hover effect: slight background darkening/text lightening.
- **Secondary CTA**: Outlined background, primary text color, rounded corners. Hover effect: subtle background fill.
- **Size**: Consistent height (e.g., 2.5rem), responsive width.

### 7.5 Light/Dark Mode Behavior
- The page SHALL transition smoothly between light and dark modes.
- All text, background, and component colors SHALL be defined with CSS variables or Docusaurus theme-aware styling.
- Custom CSS (`./src/css/custom.css`) SHALL include specific rules for `[data-theme="dark"]` for custom elements.

### 7.6 Grid Layout System
- **Docusaurus Container**: Utilizes the default Docusaurus content container for horizontal centering and max-width.
- **Flexbox/CSS Grid**: Used for responsive layout within sections (e.g., aligning CTA buttons, feature cards).

### 7.7 Mobile Breakpoints
- **Small (Mobile)**: < 768px (single column layout).
- **Medium (Tablet)**: 768px - 1023px (potentially 2-column layouts).
- **Large (Desktop)**: >= 1024px (standard desktop layout).

## 8.0 Information Flow Diagram

```
+-----------+     +--------------+     +------------+     +-----------+
|   User    | --> | Landing Page | --> | Book Pages | --> | Repository|
+-----------+     +--------------+     +------------+     +-----------+
      ^                                                            |
      |                                                            v
      +------------------------------------------------------------+
      (Interacts with UI/Reads Content)                  (Accesses Source/Docs)

+---------------------+
| GitHub Pages Deploy |
+---------------------+
      ^
      |
      +------------------------------------------------------------+
      (Automated Build & Deploy Triggered by Repository Updates)
```

## 9.0 Technical Constraints

### 9.1 Docusaurus v3
- **Framework Limitations**: Adherence to Docusaurus v3 architecture, plugin system, and content rendering pipeline. No direct manipulation of Docusaurus core beyond configuration.
- **TypeScript Configuration**: All Docusaurus configuration files (`docusaurus.config.ts`, `sidebars.ts`) must be valid TypeScript.

### 9.2 MDX Limitations
- **Content Flexibility**: While MDX allows JSX, overly complex components should be avoided on the landing page to maintain readability and AI-generatability.
- **Syntax Adherence**: Strict adherence to MDX syntax for generated content to ensure parsability.

### 9.3 GitHub Pages
- **Static Site Generation**: Only static assets can be deployed. No server-side logic or databases are permitted.
- **`baseUrl` / `url` Configuration**: `docusaurus.config.ts` must correctly configure `baseUrl: '/book/'` and `url: 'https://areeba-fatima.github.io'` for proper asset linking.
- **Deployment Workflow**: Reliance on GitHub Actions for automated build and deployment (`.github/workflows/deploy.yml`).

### 9.4 Static Site Generation
- **Client-Side Rendering**: Any dynamic behavior must be implemented client-side using React within Docusaurus.
- **API Calls**: Limited to external, public APIs or pre-built static data.

### 9.5 Repo Structure Limitations
- **Docusaurus Convention**: Adherence to Docusaurus recommended directory structure (`docs/`, `src/`, `static/`).
- **Spec-Kit Plus Paths**: Specification files (`.spec.md`) and generated outputs (`.mdx`, `.ts`, `.yml`) must follow the defined `specs/` and project subdirectories.

## 10.0 Risks & Mitigations

### 10.1 Risk: MDX Generation Errors
- **Description**: The AI agent might generate malformed or invalid MDX syntax, leading to build failures or rendering issues.
- **Impact**: High - prevents site compilation and deployment.
- **Likelihood**: Medium.
- **Mitigation**: Implement robust pre-build validation (e.g., MDX linting, Docusaurus build dry-runs) as part of the `T012 Validate MDX structure and internal linking for generated content` task. AI agent to include self-correction mechanisms based on validation feedback.

### 10.2 Risk: Docusaurus Configuration Drift
- **Description**: Manual edits to `docusaurus.config.ts` or other configuration files could deviate from the `docusaurus-config-spec.md`, leading to inconsistencies or unexpected behavior.
- **Impact**: Medium - potential for subtle bugs, broken features, or loss of AI-generated integrity.
- **Likelihood**: Low (due to strict "Zero manual code" policy, but possible).
- **Mitigation**: Automated checks (e.g., pre-commit hooks, CI/CD pipeline) to compare generated config with the spec and revert/report discrepancies, as per `T018 Enforce constitution compliance across all generated artifacts`.

### 10.3 Risk: Broken Internal Links
- **Description**: Links between the landing page and internal book chapters, or between chapters, might break due to incorrect paths or content renames.
- **Impact**: High - severely degrades user navigation and experience.
- **Likelihood**: Medium.
- **Mitigation**: Comprehensive link validation during `T012 Validate MDX structure and internal linking for generated content` and `T011 Validate Docusaurus build by running npm run build` to ensure all internal Docusaurus links resolve correctly.

### 10.4 Risk: Inconsistent Theming
- **Description**: Custom styles on the landing page might not fully adapt to dark mode, leading to poor contrast or unstyled elements.
- **Impact**: Medium - poor user experience, particularly for users preferring dark mode.
- **Likelihood**: Medium.
- **Mitigation**: Rigorous visual inspection and automated testing (if possible) for both light and dark modes during `T013 Validate auto-sidebar generation functionality` to ensure all elements render correctly. Strict adherence to Docusaurus theming APIs.

### 10.5 Risk: Poor SEO Performance
- **Description**: Missing or incorrect meta tags, poor content structure, or slow loading times could result in low search engine ranking for the landing page.
- **Impact**: Medium - reduced discoverability and potential audience reach.
- **Likelihood**: Medium.
- **Mitigation**: Include SEO-specific acceptance criteria in `T017 Confirm site availability at https://areeba-fatima.github.io/book`. Use Docusaurus's built-in SEO features.

### 10.6 Risk: GitHub Pages Deployment Failures
- **Description**: The GitHub Actions workflow (`deploy.yml`) might fail due to incorrect configuration, permission issues, or changes in GitHub Pages infrastructure.
- **Impact**: High - the book will not be publicly accessible.
- **Likelihood**: Low (once initially configured, but changes can break).
- **Mitigation**: Thorough testing of the deployment workflow (`T016 Deploy the built Docusaurus site to GitHub Pages`) and continuous monitoring. Clear error reporting within the workflow.

### 10.7 Risk: Large MDX File Size
- **Description**: If the AI generates overly verbose content for the landing page, the MDX file could become excessively large, impacting performance.
- **Impact**: Low to Medium - slower page load, harder to maintain (for AI).
- **Likelihood**: Low (given AI instructions for conciseness).
- **Mitigation**: Impose a reasonable line limit on the landing page MDX content (e.g., 200-300 lines) within the AI generation instructions. Monitor file sizes during validation.

### 10.8 Risk: Dependency on External Tools/APIs
- **Description**: If Spec-Kit Plus or Claude Code APIs change or become unavailable, the AI generation workflow could break.
- **Impact**: High - core development workflow is blocked.
- **Likelihood**: Low (internal tools).
- **Mitigation**: Maintain clear documentation of tool versions. Implement robust error handling and retry mechanisms in the AI agent's interaction with these tools.

### 10.9 Risk: Inaccurate AI-Generated Content
- **Description**: The AI might misinterpret parts of the specification, leading to content that is factually incorrect or does not meet the stylistic requirements.
- **Impact**: High - compromises the quality and credibility of the textbook.
- **Likelihood**: Low (given detailed specs, but always a risk with generative AI).
- **Mitigation**: Implement rigorous content quality checks during `T012 Validate MDX structure and internal linking for generated content` and `T014 Validate constitution compliance of generated code and configuration`, potentially including human review or automated semantic checks against known facts.

### 10.10 Risk: Performance Degradation over Time
- **Description**: As more chapters and features are added, the overall site performance (including the landing page) might degrade if not continuously monitored and optimized.
- **Impact**: Medium - frustrates users, leads to abandonment.
- **Likelihood**: Low (with static sites, but possible with many assets/plugins).
- **Mitigation**: Regular performance audits (`T011 Validate Docusaurus build by running npm run build`, `T017 Confirm site availability at https://areeba-fatima.github.io/book`) and adherence to performance best practices for web development.

## 11.0 Acceptance Criteria Table

| ID    | Description                                                     | Test Method               | Pass/Fail |
| :---- | :-------------------------------------------------------------- | :------------------------ | :-------- |
| AC-01 | Hero section displays correct title and tagline.               | Manual UI inspection      |           |
| AC-02 | Hero section includes an introductory paragraph (3-5 sentences). | Content review            |           |
| AC-03 | "Read the Book" CTA button links to the main book index (`/`).  | Click test                |           |
| AC-04 | "Explore on GitHub" CTA button links to `https://github.com/areeba-fatima/book`. | Click test                |           |
| AC-05 | Navbar contains "Book" and "GitHub" links as specified.         | Manual UI inspection      |           |
| AC-06 | "Key Features" section is present with 3-5 bullet points.       | Content review            |           |
| AC-07 | "How It Works" section explains AI/Spec-Driven Development.    | Content review            |           |
| AC-08 | Links to Claude Code and Spec-Kit Plus are correct in "How It Works" section. | Click test, content review |           |
| AC-09 | Docusaurus footer displays correct copyright.                   | Manual UI inspection      |           |
| AC-10 | Landing page correctly switches between light and dark modes.   | UI interaction test       |           |
| AC-11 | Page layout is responsive across mobile, tablet, and desktop.   | Browser resize test       |           |
| AC-12 | Lighthouse performance score is 90+ on desktop.                 | Lighthouse audit          |           |
| AC-13 | All internal links from landing page are valid.                 | Automated link checker    |           |
| AC-14 | No manual edits are detected in `docs/landing-page.mdx`.      | Git diff / automated check|           |
| AC-15 | `docusaurus.config.ts` matches `docusaurus-config-spec.md` for relevant sections. | Automated config comparison |           |
| AC-16 | All generated MDX content adheres to specified MDX structure (headings, lists, code blocks). | MDX linting / parsing test |           |
| AC-17 | The information flow diagram (if present) is readable.          | Manual UI inspection      |           |

## 12.0 References

- [Spec-Kit Plus GitHub Repository](https://github.com/panaversity/spec-kit-plus/)
- [Claude Code Product Page](https://www.claude.com/product/claude-code)
- [Docusaurus Documentation](https://docusaurus.io/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [MDX Documentation](https://mdxjs.com/)
- PANAVERSE Open Source Model (general reference)