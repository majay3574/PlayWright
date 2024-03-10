import { test, expect } from '@playwright/test';

test('download file from destination', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html');

    const downloadPromise = page.waitForEvent('download');

    const downloadButton = page.locator('a[class="btn btn-primary"]');
    await downloadButton.hover();
    await downloadButton.click();

    const download = await downloadPromise;

    // const destination = `C:/Users/AjayMichael/PlayWright/tests/Day10/${download.suggestedFilename().replace(/(\w+)(\.\w+)$/, 'ajay$2')}`;
    const destination = download.saveAs("Download/" + (await downloadPromise))
    await destination

    await page.waitForTimeout(5000)
});
