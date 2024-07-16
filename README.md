# Mintable Playwright Assignment

[![Playwright UI Tests](https://github.com/osandadeshan/playwright-web-automation-demo/actions/workflows/playwright-ui-test.yml/badge.svg)](https://github.com/osandadeshan/playwright-web-automation-demo/actions/workflows/playwright-ui-test.yml)

This repository contains a Playwright UI test boilerplate written in TypeScript and is configured to run tests in different environments such as Development, SIT, UAT, and Production.

## Table of Contents

- [Installation](#installation)
  - [Install Node.js and npm](#install-nodejs-and-npm)
  - [Install Playwright](#install-playwright)
  - [Install Visual Studio Code](#install-visual-studio-code)
  - [Install Project Dependencies](#install-project-dependencies)
- [Project Structure](#project-structure)
  - [Configuration Files](#configuration)
- [Running Tests](#running-tests)
  - [Running Tests in Different Environments](#running-tests-in-different-environments)
  - [Running Headless Tests](#running-headless-tests)
  - [Debugging Tests](#debugging-tests)
- [Best Practices Used](#best-practices-used)
- [CI Integration](#ci-integration)

## Installation

### Install Node.js and npm

1. **Download and Install Node.js**: Visit [nodejs.org](https://nodejs.org/) and download the LTS version of Node.js. The npm package manager is included with Node.js.

2. **Verify Installation**: After installing Node.js, you can verify the installation by running the following commands in your terminal:

   ```bash
   node -v
   npm -v
   ```

### Install Playwright

1. **Install Playwright**: Run the following command to install Playwright and its dependencies:

   ```bash
   npm install @playwright/test
   ```

2. **Install Browsers**: Run the following command to install the required browsers:

   ```bash
   npx playwright install
   ```

### Install Visual Studio Code

1. **Download and Install VSCode**: Visit [code.visualstudio.com](https://code.visualstudio.com/) and download the latest version of Visual Studio Code.

### Install Project Dependencies

1. **Clone the Repository**: Clone this repository to your local machine:

   ```bash
   git clone https://github.com/osandadeshan/playwright-web-automation-demo.git
   ```

2. **Install Dependencies**: Navigate to the project directory and run the following command to install the project dependencies:

   ```bash
   npm install
   ```

## Project Structure

```plaintext
playwright-web-automation-demo/
├── .github/
│   └── workflows/
│       └── playwright-ui-test.yml
├── node_modules/
├── playwright-report/
├── src/
│   ├── pages/
│   │   ├── landing.page.ts
│   │   ├── login.page.ts
│   │   ├── toast-message.page.ts
│   ├── tests/
│   │   ├── constants/
│   │   │   └── api.constant.ts
│   │   │   └── app.constant.ts
│   │   ├── fragments/
│   │   │   └── login.fragment.ts
│   │   │   └── signup.fragment.ts
│   │   ├── resources/
│   │   │   └── dev/
│   │   │       └── testdata.json
│   │   │   └── prod/
│   │   │       └── testdata.json
│   │   │   └── sit/
│   │   │       └── testdata.json
│   │   │   └── uat/
│   │   │       └── testdata.json
│   │   └── utils/
│   │       └── api-client.ts
│   │   └── login.spec.ts
├── test-results/
├── .gitignore
├── package-lock.json
├── package.json
└── playwright.config.ts
└── README.md
```

### Configuration

- **package.json**: Defines the scripts and dependencies for the project.
- **playwright.config.ts**: Configuration file for Playwright tests.
- **.github/workflows/playwright-ui-test.yml**: GitHub Actions workflow for running Playwright UI tests.

## Running Tests

### Running Tests in Different Environments

- **Development Environment**:

  ```bash
  npm run test-dev
  ```

- **SIT Environment**:

  ```bash
  npm run test-sit
  ```

- **UAT Environment**:

  ```bash
  npm run test-uat
  ```

- **Production Environment**:

  ```bash
  npm run test-prod
  ```

### Running Headless Tests

- **Development Environment (Headless)**:

  ```bash
  npm run headless-test-dev
  ```

- **SIT Environment (Headless)**:

  ```bash
  npm run headless-test-sit
  ```

- **UAT Environment (Headless)**:

  ```bash
  npm run headless-test-uat
  ```

- **Production Environment (Headless)**:

  ```bash
  npm run headless-test-prod
  ```

### Debugging Tests

- **Debug Tests in Development Environment**:

  ```bash
  npm run debug-test-dev
  ```

## Best Practices Used
- **Page Object Model Design Pattern:** Ensures the test code is maintainable and scalable by separating page logic and test scenarios.
- **Multiple Environment Support:** Supports DEV, SIT, UAT, and PROD environments with separate test data.
- **Fragment Usage:** Organizes related code functions into manageable, reusable components, improving maintainability and scalability.
- **Automatic Retrying Mechanism:** Increases test resilience by automatically retrying failed test cases, reducing false negatives, and ensuring more stable results.
- **CI Integration:** Implements GitHub CI workflows to automatically run tests on changes to the master branch and pull requests, ensuring code quality and early detection of issues.

## CI Integration
The project uses GitHub Actions for continuous integration. The workflow configuration is located in `.github/workflows/playwright-ui-test.yml`.
