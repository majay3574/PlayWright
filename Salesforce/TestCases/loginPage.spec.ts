import { Page, Browser, chromium } from 'playwright';
import { utils } from '../utils';
import url from "../Data/url.json"


export class LoginPage {
    public basePage: utils;
    public page: Page;
    public browser: Browser;

    constructor(page: Page, browser: Browser) {
        this.page = page;
        this.browser = browser;
        this.basePage = new utils(page, browser);
    }
    async launchbrowser(): Promise<any> {
        this.browser = await chromium.launch({ headless: false, channel: 'chrome' });
        let context = await browser.newContext()
        this.page =await context.newPage()
    }

    async login(username: string, password: string): Promise<void> {
        await this.basePage.goto( url.url ,{ waitUntil: 'load' });
        await this.basePage.fillInput('input[name="username"]', username);
        await this.basePage.fillInput('input[name="password"]', password);
        await this.basePage.click('button[type="submit"]',{setTimeout:1000});
        
    }
}

