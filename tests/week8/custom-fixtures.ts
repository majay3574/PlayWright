// commonFixtures.ts
import { test as baseTest } from '@playwright/test';

export const test = baseTest.extend({
    maximizedPage: async ({ page }, use) => {
        await page.setViewportSize({ width: 1280, height: 720 }); 
        await page.goto('http://leaftaps.com/opentaps');
        await page.locator("#username").fill("Demosalesmanager");

        await use(page);
    }
});
