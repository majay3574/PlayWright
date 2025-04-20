import { test, expect } from "@playwright/test"
import tesseract from "tesseract.js"
import levenshtein from 'js-levenshtein';
import path from 'path';

test(`testing`, async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    const logo = page.locator('#nav-logo');
    await expect(logo).toBeVisible();
    const box = await logo.boundingBox();
    if (box) {
        console.log(`Width: ${box.width}, Height: ${box.height}`);
        expect(box.width).toBeCloseTo(129.26);
        expect(box.height).toBeCloseTo(60);
    } else {
        throw new Error('Element #nav-logo not found or not visible.');
    }
    await logo.screenshot({ path: './tests/scenario/logo.png' });
    tesseract
        .recognize('./tests/scenario/logo.png', 'eng')
        .then((result) => {
            console.log('Extracted Text:', result.text.trim());
        })
        .catch((err) => {
            console.error('OCR Error:', err);
        });

}

)