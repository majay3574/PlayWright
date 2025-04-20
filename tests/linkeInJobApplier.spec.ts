import { test as base, expect, Page } from '@playwright/test';


import fs from 'fs';
import path from 'path';

const customTest = base.extend<{ page: Page }>({
    page: async ({ page }, use, testInfo) => {
        const dir = `screenshots/${testInfo.title.replace(/\\s+/g, '_')}`;
        fs.mkdirSync(dir, { recursive: true });

        const actions = ['click', 'fill', 'type', 'check', 'uncheck', 'selectOption'];
        for (const action of actions) {
            const original = (page as any)[action].bind(page);
            (page as any)[action] = async (...args: any[]) => {
                const result = await original(...args);
                const name = `${action}_${args[0].replace(/[^a-z0-9]/gi, '_')}.png`;
                await page.screenshot({ path: path.join(dir, name), fullPage: true });
                return result;
            };
        }

        await use(page);
    },
});
let userName = "majay3574@gmail.com"
let password = "Ajaymichael@8428"
let jobTitle = "SDET"


customTest("Apply for a Job", async ({ page }) => {
        await page.goto("https://in.linkedin.com/jobs/");
        await page.fill(`(//label[contains(text(),'Email or phone')]/following::input)[1]`, userName);
        await page.fill(`(//label[contains(text(),'Password')]/following::input)[1]`, password);
        await page.click(`//button[contains(text(),'Sign in')]`);
        await page.waitForTimeout(5000);
        await page.waitForURL("https://www.linkedin.com/jobs/?originalSubdomain=in");
        async function jobSearch() {
            await page.waitForSelector(`input[id^="jobs-search-box-keyword-id-ember"]`, { state: "attached" });
            await page.focus(`input[id^="jobs-search-box-keyword-id-ember"]`);
            await page.keyboard.type(jobTitle, { delay: 100 });
            await page.keyboard.press("Enter", { delay: 100 });
        }
        async function experience() {
            await page.getByRole('button', { name: 'Experience level filter.' }).click();
            await page.getByText('Entry level', { exact: true }).click();
            await page.getByText('Mid-Senior level', { exact: true }).click();
            await page.getByRole('button', { name: 'Apply current filter to show' }).click();
        }
       /*  await jobSearch();
        await experience(); */
    })
