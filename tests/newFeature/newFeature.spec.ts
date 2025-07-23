import { test, expect } from "@playwright/test";
import { extractErrorContext, groqAnalyzer } from "./errorHandler";


test.afterEach(async ({}, testInfo) => {
    const failureStatuses = ['failed', 'timedOut', 'interrupted'];
    if (failureStatuses.includes(testInfo.status)) {
        const ctx = await extractErrorContext(testInfo);
        if (ctx) await groqAnalyzer(ctx);
    }
});


test(`test the new feature`, async ({ page }) => {
    await expect.poll(async () => {
        const response = await page.request.get('https://login.salesforce./?=in');
        return response.status();
    }, {
        message: 'make sure API eventually succeeds',
        timeout: 10000,
    }).toBe(200);
});


