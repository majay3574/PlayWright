import test from "@playwright/test"
import { parse } from "csv-parse/sync";
import fs from 'fs';
import path from 'path';


const records = parse(fs.readFileSync(path.join(__dirname, `../../data/login.csv`)),
    {
        columns: true,
        skip_empty_lines: true
    });

for (const record of records) {
    test(`test to read dynamic data using csv file ${record.testcase}`, async ({ page }) => {

        await page.goto(`https://login.salesforce.com`);
        await page.fill("#username", record.username);
        await page.fill("#password", record.password);
        await page.click("#Login");
        console.log(`${await page.title()}`);
        await page.waitForTimeout(6000)
        // await expect(page).toHaveTitle("Home | Salesforce");
    })
    records.forEach(element => {
        console.log(element.testcase)
    });
} 