import { test, expect } from "@playwright/test";
import fs from 'fs';

import path from 'path';
// Importing test data from JSON file
const testData = JSON.parse(fs.readFileSync(path.join(__dirname, "./Data/jsonData.json"), 'utf-8'));

for (const data of testData) {
    test(`Learn to read data from JSON file for ${data.username}`, async ({ page }) => {
        await page.goto("http://www.leaftaps.com/opentaps");
        await page.fill("#username", data.username);
        await page.fill("#password", data.password);
        await page.click(".decorativeSubmit");
        
       
    });
}
