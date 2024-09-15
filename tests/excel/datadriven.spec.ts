// tests/excelTest.spec.ts
import { test, expect } from '@playwright/test';
import { ExcelReader } from '../excel/excelUtils';

test.describe('Excel Data-Driven Test', () => {
    let excelData: any[] | null;

   
    test.beforeAll(() => {
        const reader = new ExcelReader('./../excel/data/book1.xlsx');
        excelData = reader.readCell(0); // Reading the first sheet
    });

    // Example test using Excel data
    test('Check data from Excel', async ({ page }) => {
        if (!excelData) {
            throw new Error('Failed to load Excel data.');
        }

        // Use the first row from the Excel sheet
        const [header, ...rows] = excelData;

        // Iterate through rows and run assertions
        for (const row of rows) {
            const [testName, expectedValue] = row;

            console.log(`Running test: ${testName}`);

            // Navigate to your web page, use test data, etc.
            await page.goto('https://example.com');
            const element = await page.$('selector-for-element');
            const text = await element?.textContent();

            expect(text).toBe(expectedValue);
        }
    });
});


