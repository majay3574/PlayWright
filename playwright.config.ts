import { defineConfig, devices } from '@playwright/test';
//import CustomHTMLReporter from './reporter/custom-report';
export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  repeatEach: 0,
  retries: 0,
  workers: 1,
  timeout: 10000,
  expect: {
    timeout: 10000
  },

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: [ ['./reporter/custom-Freport.ts']],
  reporter: [["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    actionTimeout: 10000,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on',
    screenshot: 'on',
    headless: false,
    // storageState:"storage/login.json"

  },
  globalTeardown: require.resolve('./allure_customReport.ts'),

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium', channel: 'chrome', headless: false,
        viewport: null,
        launchOptions: {
          slowMo: 300,
          args: ["--start-maximized", "--disable-web-security", "--disable-features=IsolateOrigins,site-per-process", '--no-proxy-server']

        }

      }

    },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['Pixel 2 landscape'],
    //   },

    /* {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        launchOptions: {
          args: ["--kiosk"]
        }
      },
    }, */

    //  { name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     viewport: { width: 1280, height: 680 }
    //   }}

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


});