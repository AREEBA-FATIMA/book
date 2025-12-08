# Docusaurus Configuration Specification

This specification defines the desired configuration for `docusaurus.config.ts` for Project 1: AI/Spec-Driven Book Creation.

## Core Configuration

- **title**: 'Physical AI & Humanoid Robotics: An AI-Generated Textbook'
- **tagline**: 'Exploring the Future of Embodied Intelligence through Spec-Driven Development'
- **favicon**: 'img/favicon.ico'
- **url**: 'https://areeba-fatima.github.io'
- **baseUrl**: '/book/'
- **organizationName**: 'areeba-fatima'
- **projectName**: 'book'
- **onBrokenLinks**: 'throw'
- **onBrokenMarkdownLinks**: 'warn'
- **i18n**: defaultLocale: 'en', locales: ['en']

## Presets (Classic Preset)

- **docs configuration**:
  - **sidebarPath**: './sidebars.ts'
  - **editUrl**: 'https://github.com/areeba-fatima/book/tree/main/'
  - **routeBasePath**: '/'

- **blog configuration**:
  - **showReadingTime**: true
  - **editUrl**: 'https://github.com/areeba-fatima/book/tree/main/'
  - **path**: 'blog'
  - **blogSidebarTitle**: 'All our posts'
  - **blogSidebarCount**: 'ALL'

- **theme configuration**:
  - **customCss**: './src/css/custom.css'

## Theme Configuration (themeConfig)

- **image**: 'img/docusaurus-social-card.jpg'
- **colorMode**:
  - **defaultMode**: 'dark'
  - **disableSwitch**: false
  - **respectPrefersColorScheme**: true

- **navbar**:
  - **title**: 'Physical AI & Humanoid Robotics'
  - **logo**:
    - **alt**: 'Book Logo'
    - **src**: 'img/logo.svg'
  - **items**:
    - type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Book'
    - href: 'https://github.com/areeba-fatima/book', label: 'GitHub', position: 'right'

- **footer**:
  - **style**: 'dark'
  - **links**: [] (Empty for now, can be expanded later)
  - **copyright**: 'Copyright © {new Date().getFullYear()} Areeba Fatima. Built with Docusaurus.'

- **prism**:
  - **theme**: prismThemes.github
  - **darkTheme**: prismThemes.dracula

## Plugins

- **@docusaurus/plugin-content-docs**:
  - **id**: 'default'
  - **path**: 'docs'
  - **routeBasePath**: '/'
  - **sidebarPath**: require.resolve('./sidebars.ts')
  - **editCurrentVersion**: true
  - **showLastUpdateAuthor**: true
  - **showLastUpdateTime**: true

- **docusaurus-plugin-search-local** (if Algolia is not used):
  - **hashed**: true
  - **highlightSearchTerms**: true
  - **docsRouteBasePath**: ['/']

## Search Configuration

- **algolia** (if enabled):
  - **appId**: 'YOUR_APP_ID'
  - **apiKey**: 'YOUR_SEARCH_API_KEY'
  - **indexName**: 'YOUR_INDEX_NAME'
  - **contextualSearch**: true
  - **searchPagePath**: 'search'

This specification is designed to be comprehensive for a basic Docusaurus v3 setup with dark mode, auto-sidebars, and either local search or Algolia. The placeholders `YOUR_APP_ID`, `YOUR_SEARCH_API_KEY`, `YOUR_INDEX_NAME` will need to be replaced if Algolia is chosen.