import { Page, Browser, chromium } from 'playwright';
import { utils } from '../utils';
import url from "../Data/url.json";

export class LoginPage {
    private utils: utils;
    private page: Page;
    

    constructor(page: Page, browser: Browser) {
        this.page = page;
        this.utils = new utils(page, browser);
    }

    async login(username: string, password: string): Promise<void> {
        try {
            await this.utils.goto(url.url, { waitUntil: 'domcontentloaded' });
            await this.utils.fillInput('input[name="username"]', username);
            await this.utils.fillInput('input[name="password"]', password);
            await this.utils.click('button[type="submit"]', { timeout: 1000 });
            await this.page.waitForLoadState('load');
            const Global_Actions_SVG_icon =  this.page.locator("div.slds-icon-waffle");
            await Global_Actions_SVG_icon.click({ force: true });
            const View_All =  this.page.locator("button:has-text('View All')");
            await View_All.click({ force: true });
        } catch (error) {
            console.error('Error during login:', error);
           
        }
    }
}