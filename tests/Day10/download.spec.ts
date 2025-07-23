import { test, expect } from '@playwright/test';
import path from 'path';

test('download file from destination', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html');

    // Wait for the download to start after clicking the button
    const downloadPromise = page.waitForEvent('download');

    const downloadButton = page.locator('a[class="btn btn-primary"]');
    await downloadButton.hover();
    await downloadButton.click();

    const download = await downloadPromise;

    // Construct the destination path
    const suggestedFileName = download.suggestedFilename();
    const renamedFile = suggestedFileName.replace(/(\w+)(\.\w+)$/, 'ajay$2');
    const filePath = path.resolve('Download', renamedFile);

    // Save the file to the desired location
    await download.saveAs(filePath);

    // Optional wait
    await page.waitForTimeout(5000);
});
