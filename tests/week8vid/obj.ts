
import { Page, BrowserContext, Browser, chromium } from '@playwright/test'


export class Salesforce {


    username: string
    password: string


    async launchBrowser(): Promise<{ thispage: Page, context: BrowserContext, browser: Browser }> {
        const browser = await chromium.launch({ headless: false })
        const context = await browser.newContext();
        const thispage = await context.newPage(); //local variable visible only to launchBrowser
        return { thispage, context, browser };
    }


    async loadUrl(): Promise<string> {
        //destructuring 
        const { thispage } = await this.launchBrowser();
        await thispage.goto("https://login.salesforce.com/");
     return await thispage.title();
    }


}


const loadApp = new Salesforce();
//loadApp.launchBrowser();
const title = loadApp.loadUrl();
console.log(title)