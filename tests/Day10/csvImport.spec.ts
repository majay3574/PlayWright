
import { test, expect } from "@playwright/test";
// converting CSV text input into arrays or objects
// We are using sync API which is good for small data
// Read about others API here https://csv.js.org/parse/api/
import { parse } from "csv-parse/sync";
// import fs module to interact with file system
import fs from 'fs';
// import path module 
// it provides utilities for working with file and directory paths
import path from 'path';
// Updated import path for csv-parse
// Read the CSV file and parse its contents into records
// const csvFilePath = path.join(__dirname, './Data/csvDAta.csv');
// const csvData = fs.readFileSync(csvFilePath, 'utf8');
const records = parse(fs.readFileSync(path.join(__dirname, './Data/csvDAta.csv')), {
    columns: true,
    skip_empty_lines: true
});

/*for (const record of records) iterates over the records 
array.During each iteration, the record variable holds the current element of 
the array,allowing you to perform operations on it.
So, in summary, "of" in this context is a part of the for...of loop syntax
used to iterate over iterable objects in JavaScript.*/

// Iterate over each record and create a test for each one
for (const record of records) {
    test(`Login with ${record.username}`, async ({ page }) => {
        await page.goto("https://login.salesforce.com/");
        await page.fill('input[name="username"]', record.username);
        await page.fill('input[name="pw"]', record.password);
        await Promise.all([
            page.click('input[name="Login"]')
        ]);
        // You might want to add assertions here to verify login success
    });
}
