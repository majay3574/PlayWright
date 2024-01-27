import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 120000,
  outputDir: './test-results',
  preserveOutput: 'always',
  expect: {
    timeout: 10000 
  },
  //retries: 1,
  workers: 1,
  use: {
    //baseURL: 'https://login.salesforce.com/',
    trace: 'on',
    video:'on',
    screenshot:'on',
    headless: false,
    colorScheme: 'dark',
    /*
    viewport: {
      height: 600,
      width: 800
    }, */
    geolocation: {
      latitude : 41.890221,
      longitude: 12.492348
    }, 
    //locale: 'it-IT',
    permissions: ['geolocation'],
    timezoneId: 'Europe/Rome',
    storageState: 'sfauth.json',
    httpCredentials: {
      username: 'admin',
      password: 'testleaf',
    }, 
    // Maximum time each action such as `click()` can take. Defaults to 0 (no limit).
    actionTimeout: 10000,
    launchOptions: {
      slowMo: 50,
    },
  },




  projects: [

    /*
   
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 13'],
      },
    }, 
    */
    {
      name: 'chrome',
       use: {channel: 'chrome'},
      //use: { ...devices['Galaxy S8'],},
    }, /*
    {
      name: 'edge',
      use: {channel: 'msedge'},
    }, 
    {
      name: 'firefox',
      use: {...devices['Desktop Firefox']},
    }, 
  
    {
      name: 'webkit',
      use: { ...devices['iPad Pro'],},
    },*/

  ],
 
})