# SolidJS Web

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/solidjs-web/SolidJS-Web/build.yml?branch=main)](https://github.com/solidjs-web/SolidJS-Web/actions)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

**SolidJS Web** is a template and toolkit for building performant and reactive web applications using [SolidJS](https://www.solidjs.com/).

## Overview

This repository aims to provide:

- **A Ready-to-Use Template**: Start building fast and interactive web apps without worrying about initial setup.
- **Best Practices**: A structured project layout, linting & formatting configurations, and example code to ensure maintainable code quality.
- **Tooling & Integrations**: Preconfigured bundling, testing, and deployment workflows to streamline development.
  
With **SolidJS Web**, you can quickly bootstrap a new SolidJS project that encourages scalable, stable, and developer-friendly patterns from day one.

## Features

- **SolidJS for Reactivity**: Leverage SolidJS’s fine-grained reactivity for blazing-fast UI updates.
- **TypeScript Support**: Write robust, maintainable code with TypeScript’s static typing.
- **Developer Experience**:
  - **Vite** for lightning-fast builds and HMR (Hot Module Replacement).
  - **ESLint** and **Prettier** for consistent, clean code.
  - **Jest** or **Vitest** (configurable) for running unit and integration tests.
- **Routing & State Management**: Integrations with popular SolidJS libraries (e.g., `solid-app-router`) to jumpstart common app features.
- **Scalable Project Structure**: Intuitive folder layout for components, pages, assets, and utilities.
- **Continuous Integration**: Preconfigured GitHub Actions to run builds and tests on every pull request.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)

### Local Generation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/solidjs-web/SolidJS-Web.git
   cd SolidJS-Web
   ```  

2. **Modify src/main.js as needed.**

3. **Run the following**
   ```bash
   npm install
   npm run build:prod
   npm run build:dev
   ```

### Remote Generation

 1. **Fork this repo**
 
 2. **Modify src/main.js as needed.**
 
 3. **Run the GitHub Action "Manual Build with Vite"**

 4. **Download the Artifacts**