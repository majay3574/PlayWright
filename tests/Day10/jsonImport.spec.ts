import { test, expect } from "@playwright/test";
import data from "./Data/jsonData.json";

// Iterate over each element in the data array
data.forEach(element => {
    test(`Login with ${element.username}`, async ({ page }) => {
        await page.goto("https://login.salesforce.com/");
        await page.fill('input[name="username"]', element.username);
        await page.fill('input[name="pw"]', element.password);
        await Promise.all([
            page.click('input[name="Login"]'),
            page.waitForNavigation()
        ]);
        // Add assertions here to verify login success
    });
});
