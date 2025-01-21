import { test, expect } from "@playwright/test";
import data1 from "./Data/gh.json"

// Iterate over each element in the data array

    test(`Login with `, async ({ page }) => {
        await page.goto("https://login.salesforce.com/");
        await page.fill('input[name="username"]',data1.name);
        await page.fill('input[name="pw"]',data1.name1 );
        await Promise.all([
            page.click('input[name="Login"]'),
            page.waitForTimeout(10000)
        ]);
        
    });
