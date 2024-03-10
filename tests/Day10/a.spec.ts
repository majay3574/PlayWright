import { test, expect } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs';
import path from 'path';

// Read the CSV file and parse its contents into records
const records = parse(fs.readFileSync(path.join(__dirname, './Data/csvData.csv')), {
    columns: true,
    skip_empty_lines: true
});

records.forEach((a) => {
    test(`Login with ${a.username}`, async ({ page }) => {
        await page.goto("https://login.salesforce.com/");
        await page.fill('input[name="username"]', a.username);
        await page.fill('input[name="pw"]', a.password);
        await Promise.all([
            page.click('input[name="Login"]'),
          
        ]);
        // You might want to add assertions here to verify login success
    });
});
