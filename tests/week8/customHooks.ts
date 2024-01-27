import { test as baseTest } from '@playwright/test';

export const test = baseTest.extend({
  retrypage: async ({ page }, use, testInfo) => {
    console.log("I am in the hooks");
    if (testInfo.retry) {
      console.log("I am going to retry for the first time");
      testInfo.slow(true, "Retry on Failure");
    }
    await use(page);
  },
});
