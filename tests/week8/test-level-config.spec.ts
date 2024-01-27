import { test } from '@playwright/test';

// Define a test with specific configuration
test.describe.configure({ timeout: 120000 });

test('Test with specific configuration', async ({ page }) => {
    await page.goto('https://login.salesforce.com/');
    await page.locator("#username").fill("ranjini.r@testleaf.com")
    await page.locator("#password").fill("Testleaf$1234")
    await page.locator("#Login").click()
    
    const appLauncherLocator = page.locator(".slds-icon-waffle");
});
