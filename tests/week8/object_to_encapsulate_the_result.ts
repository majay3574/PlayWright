import { Page, BrowserContext, Browser, chromium } from '@playwright/test';

export class Salesforce {
    username: string;
    password: string;

    async launchBrowser(): Promise<{ page: Page; context: BrowserContext; browser: Browser }> {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage(); // Local variable visible only to launchBrowser
        return { page, context, browser }; // Renamed variable for clarity
    }

    async loadUrl(): Promise<string> {
        // Using an object to encapsulate the result from launchBrowser
        const browserObject = await this.launchBrowser();
        await browserObject.page.goto('https://login.salesforce.com/');
        return await browserObject.page.title();
    }
}

// Main execution
const loadApp = new Salesforce();
loadApp.loadUrl().then((title) => console.log(title));
