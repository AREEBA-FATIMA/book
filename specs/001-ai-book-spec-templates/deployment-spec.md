# GitHub Pages Deployment Specification

This specification defines the GitHub Actions workflow for building and deploying the "Physical AI & Humanoid Robotics: An AI-Generated Textbook" Docusaurus v3 site to GitHub Pages. It ensures a fully automated, reliable, and secure deployment process, adhering to Spec-Kit Plus principles.

## 1.0 Overview

### 1.1 Purpose
The purpose of this deployment specification is to establish a robust and automated Continuous Integration/Continuous Deployment (CI/CD) pipeline for the Docusaurus v3 website. This pipeline, implemented as a GitHub Actions workflow, will automatically build the static site and deploy it to GitHub Pages upon every push to the `main` branch, ensuring the textbook is always up-to-date and publicly accessible.

### 1.2 Scope
This document covers the complete definition of the `.github/workflows/deploy.yml` file, including its triggers, jobs, steps, environment setup, build process, and deployment mechanism to GitHub Pages. It explicitly specifies the use of Docusaurus's static site generation and GitHub Pages' hosting capabilities. It excludes any server-side logic or database deployments.

### 1.3 Document Control
| Version | Date       | Author       | Changes                                         |
| :------ | :--------- | :----------- | :---------------------------------------------- |
| 1.0     | 2025-12-05 | Claude Code  | Initial generation based on project requirements |

### 1.4 Stakeholders
- **Project Lead / Architect:** Defines deployment strategy and requirements.
- **AI Agent (Claude Code):** Responsible for generating and maintaining the deployment workflow.
- **End-Users / Readers:** Benefit from consistent and up-to-date access to the textbook.
- **GitHub:** Provides the platform for Actions and Pages hosting.
- **Docusaurus Framework:** Provides the build tooling for the static site.

## 2.0 Functional Requirements

Each functional requirement (FR) specifies a distinct behavior or feature of the deployment workflow.

### FR-01 Workflow Triggering
- **Description**: The deployment workflow SHALL be triggered automatically on every push to the `main` branch.
- **Justification**: Ensures that any approved changes to the source code (including new content or configuration) are reflected on the live site promptly.
- **Acceptance Criteria**:
    - A new workflow run is initiated in GitHub Actions upon `git push origin main`.
- **Dependencies**: GitHub Actions `on: push` event configuration.

### FR-02 Docusaurus Build Execution
- **Description**: The workflow SHALL execute the Docusaurus build command (`npm run build`) in the project's subdirectory (`book-1`) to generate the static site artifacts.
- **Justification**: This command compiles all MDX content, React components, and assets into a static `build/` directory ready for hosting.
- **Acceptance Criteria**:
    - The `npm run build` command completes successfully without errors.
    - A `book-1/build/` directory is created containing the static site files.
- **Dependencies**: `package.json` with a `build` script, Docusaurus CLI.

### FR-03 GitHub Pages Deployment
- **Description**: The workflow SHALL deploy the generated static site from the `book-1/build/` directory to GitHub Pages, configured to serve from the `gh-pages` branch.
- **Justification**: Automates the publication of the textbook, making it accessible at the specified GitHub Pages URL.
- **Acceptance Criteria**:
    - The `peaceiris/actions-gh-pages@v3` action (or equivalent) successfully pushes the `build/` content to the `gh-pages` branch.
    - The GitHub Pages settings for the repository reflect deployment from the `gh-pages` branch.
- **Dependencies**: GitHub Pages configuration, `peaceiris/actions-gh-pages` action, `secrets.GITHUB_TOKEN`.

### FR-04 `baseUrl` and `url` Configuration
- **Description**: The `docusaurus.config.ts` file SHALL be correctly configured with `baseUrl: '/book/'` and `url: 'https://areeba-fatima.github.io'` to ensure all assets and links resolve correctly on GitHub Pages.
- **Justification**: Absolute paths are crucial for correct asset loading and navigation when hosted under a sub-path on GitHub Pages.
- **Acceptance Criteria**:
    - `docusaurus.config.ts` contains the specified `baseUrl` and `url` values.
    - During deployment, all asset paths (CSS, JS, images) are correctly prefixed with `/book/`.
- **Dependencies**: `docusaurus.config.ts` content.

### FR-05 `.nojekyll` File Handling
- **Description**: The deployment process SHALL ensure that a `.nojekyll` file is present in the root of the deployed `gh-pages` branch.
- **Justification**: Prevents GitHub Pages from processing the site with Jekyll, which is incompatible with Docusaurus's build output and can cause rendering issues.
- **Acceptance Criteria**:
    - A `.nojekyll` file is found in the root of the `gh-pages` branch after deployment.
- **Dependencies**: `peaceiris/actions-gh-pages` action (typically handles this automatically).

### FR-06 Branch Deployment Rules
- **Description**: GitHub Pages SHALL be configured to serve from the `gh-pages` branch.
- **Justification**: This is the standard practice for user/organization sites or project sites hosted at `<username>.github.io/<repo-name>`.
- **Acceptance Criteria**:
    - The GitHub repository settings for Pages indicate "Deploy from a branch" and select `gh-pages` as the source.
- **Dependencies**: GitHub repository settings (manual or API-driven).

## 3.0 Non-Functional Requirements

### 3.1 Reliability
The deployment workflow SHALL consistently succeed on every valid push to `main` branch. Any failures SHALL be clearly reported within GitHub Actions.
- **Justification**: Ensures continuous availability of the textbook and provides immediate feedback on issues.
- **Acceptance Criteria**: Workflow runs complete with a `success` status in GitHub Actions for valid pushes. Notifications are sent on failure.

### 3.2 Security
The deployment workflow SHALL use secure practices, primarily relying on GitHub's built-in `GITHUB_TOKEN` with appropriate permissions. No sensitive credentials SHALL be exposed or hardcoded.
- **Justification**: Protects the repository and deployment infrastructure from unauthorized access or compromise.
- **Acceptance Criteria**: The workflow only uses `GITHUB_TOKEN` for deployment, with `pages: write` and `id-token: write` permissions. No other secrets are exposed unless explicitly required and securely handled.

### 3.3 Maintainability
The deployment workflow (`deploy.yml`) SHALL be 100% AI-generated from this specification, with zero manual edits. It SHALL be easily auditable and regenerable.
- **Justification**: Adheres to the core project principle of AI/Spec-Driven Development and ensures consistency and ease of updates.
- **Acceptance Criteria**: No manual edits are detected in `.github/workflows/deploy.yml`. Regeneration from the spec produces an identical workflow file.

### 3.4 Performance
The entire build and deploy process SHALL complete within a reasonable timeframe (e.g., under 5 minutes for typical changes). Image optimization or other build performance enhancements SHALL be considered.
- **Justification**: Expedites feedback to developers and ensures rapid updates to the live site.
- **Acceptance Criteria**: Most workflow runs complete within 5 minutes. Build artifacts are minimized for faster deployment.

## 4.0 Workflow Architecture

### 4.1 Workflow Trigger
- **Event**: `push`
- **Branches**: `main`

### 4.2 Jobs
- **Job Name**: `deploy`
- **Runs On**: `ubuntu-latest`
- **Permissions**: `contents: read`, `pages: write`, `id-token: write`

### 4.3 Steps
1.  **Checkout Repository**: `actions/checkout@v3`
2.  **Setup Node.js**: `actions/setup-node@v3` with Node.js version 18.x
3.  **Install Dependencies**: `npm install` in `book-1` subdirectory.
4.  **Build Docusaurus Site**: `npm run build` in `book-1` subdirectory.
5.  **Setup GitHub Pages**: `actions/configure-pages@v3`
6.  **Upload Artifact**: `actions/upload-pages-artifact@v2` from `book-1/build`.
7.  **Deploy to GitHub Pages**: `actions/deploy-pages@v2` (final deployment).

### 4.4 Environment Variables (Implicit)
- `NODE_VERSION`: 18.x (set by setup-node action)
- `GH_TOKEN`: Automatically provided by GitHub Actions for deployment.

## 5.0 Technical Constraints

### 5.1 GitHub Actions Syntax
- The `.github/workflows/deploy.yml` file must adhere to the YAML syntax and schema expected by GitHub Actions.

### 5.2 Docusaurus Build Command
- The `npm run build` command must successfully compile the Docusaurus project from the `book-1` subdirectory.

### 5.3 Node.js Version
- The workflow requires Node.js v18.x or a compatible version for Docusaurus build.

### 5.4 Repository Structure
- The Docusaurus project is assumed to be located in the `book-1` subdirectory relative to the repository root.

## 6.0 Risks & Mitigations

### 6.1 Risk: Build Failures Due to Docusaurus Updates
- **Description**: Future Docusaurus updates might introduce breaking changes that cause the `npm run build` command to fail.
- **Impact**: High - prevents deployment and site updates.
- **Likelihood**: Medium.
- **Mitigation**: Specify a fixed Docusaurus version in `package.json` to reduce unexpected breaks. Regularly test the build process (`T011 Validate Docusaurus build by running npm run build`) and update Docusaurus only after verifying compatibility.

### 6.2 Risk: Incorrect `baseUrl` / `url` Handling
- **Description**: Misconfiguration of `baseUrl` or `url` in `docusaurus.config.ts` could lead to broken assets (CSS, JS, images) or incorrect links on the deployed site.
- **Impact**: High - renders the deployed site unusable or visually broken.
- **Likelihood**: Medium.
- **Mitigation**: Implement `AC-04` for verifying `baseUrl`/`url` correctness during generation and `T017 Confirm site availability at https://areeba-fatima.github.io/book` for post-deployment verification.

### 6.3 Risk: GitHub Pages Permissions Issues
- **Description**: The `GITHUB_TOKEN` might lack necessary permissions, or repository settings might prevent deployment to GitHub Pages.
- **Impact**: High - blocks deployment.
- **Likelihood**: Low (if standard `actions/checkout` and `actions/deploy-pages` are used correctly).
- **Mitigation**: Ensure the workflow is granted `pages: write` and `id-token: write` permissions. Provide clear instructions for manual GitHub Pages configuration if automated setup fails.

### 6.4 Risk: Incompatible Node.js Version
- **Description**: The Node.js version used in the GitHub Actions runner might be incompatible with Docusaurus's build process.
- **Impact**: Medium - build failures.
- **Likelihood**: Low (if a specific version is pinned).
- **Mitigation**: Explicitly specify Node.js version `18.x` in the `actions/setup-node` step.

### 6.5 Risk: Large Build Artifacts Impacting Performance
- **Description**: The `build/` directory might become excessively large, increasing deployment time and bandwidth usage.
- **Impact**: Low to Medium - affects deployment performance.
- **Likelihood**: Low (for text-heavy books, but possible with many high-res images).
- **Mitigation**: Implement image optimization and asset minification strategies within the Docusaurus build process if performance becomes an issue. Monitor build artifact size.

## 7.0 Acceptance Criteria Table

| ID    | Description                                                     | Test Method               | Pass/Fail |
| :---- | :-------------------------------------------------------------- | :------------------------ | :-------- |
| AC-01 | Workflow is triggered on push to `main` branch.                 | GitHub Actions log review |           |
| AC-02 | Docusaurus build (`npm run build`) completes successfully.      | GitHub Actions log review |           |
| AC-03 | Static site is deployed to `gh-pages` branch.                   | GitHub Pages settings, Git branch review |           |
| AC-04 | `baseUrl: '/book/'` and `url: 'https://areeba-fatima.github.io'` are correctly set in `docusaurus.config.ts`. | Code review, deployed site inspection |           |
| AC-05 | `.nojekyll` file is present in the deployed `gh-pages` branch.  | Git branch review         |           |
| AC-06 | GitHub Pages is configured to serve from `gh-pages` branch.     | GitHub repository settings |           |
| AC-07 | Workflow runs consistently succeed.                             | GitHub Actions log review |           |
| AC-08 | No sensitive credentials are exposed in the workflow.           | Code review               |           |
| AC-09 | Workflow `deploy.yml` is 100% AI-generated from spec.           | Git diff / automated check|           |
| AC-10 | Build and deploy process completes within 5 minutes.            | GitHub Actions timing     |           |
| AC-11 | Node.js version 18.x is used for the build.                     | GitHub Actions log review |           |

## 8.0 References

- [Spec-Kit Plus GitHub Repository](https://github.com/panaversity/spec-kit-plus/)
- [Claude Code Product Page](https://www.claude.com/product/claude-code)
- [Docusaurus Documentation](https://docusaurus.io/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
- PANAVERSE Open Source Model (general reference)
