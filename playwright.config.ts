import { PlaywrightTestConfig, devices } from "@playwright/test";

interface TestConfig extends PlaywrightTestConfig {
  appUrl: string;
  apiBaseUrl: string;
  testDataDir: string;
}

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const defaultConfig: PlaywrightTestConfig = {
  testDir: "./src/tests",
  timeout: 60000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI 2 times and 1 on local */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'localhost:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    permissions: ["clipboard-read"],
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
      },
    },
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   }
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   }
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
};

const devConfig: TestConfig = {
  appUrl: "https://letcode.in",
  apiBaseUrl: "https://www.googleapis.com/",
  testDataDir: "./src/tests/resources/dev",
};

const sitConfig: TestConfig = {
  appUrl: "https://letcode.in",
  apiBaseUrl: "https://www.googleapis.com/",
  testDataDir: "./src/tests/resources/sit",
};

const uatConfig: TestConfig = {
  appUrl: "https://letcode.in",
  apiBaseUrl: "https://www.googleapis.com/",
  testDataDir: "./src/tests/resources/uat",
};

const prodConfig: TestConfig = {
  appUrl: "https://letcode.in",
  apiBaseUrl: "https://www.googleapis.com/",
  testDataDir: "./src/tests/resources/prod",
};

// Get the environment from command line. If none, set it to dev
const environment = process.env.TEST_ENV || "dev";

// Config object with default configuration and environment specific configuration
const config: TestConfig = {
  ...defaultConfig,
  ...(environment === "sit"
    ? sitConfig
    : environment === "uat"
    ? uatConfig
    : environment === "prod"
    ? prodConfig
    : devConfig),
};

export default config;
