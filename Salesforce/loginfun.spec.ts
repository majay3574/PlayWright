import { Page, Browser } from 'playwright';
import { utils } from './utils';

export class LoginPage {
    private basePage: utils;

    constructor(page: Page, browser: Browser) {
        this.basePage = new utils(page, browser);
    }

    async login(username: string, password: string): Promise<void> {
        // You can use methods from BasePage here
        await this.basePage.goto('https://example.com/login', { waitUntil: 'load' });
        await this.basePage.fillInput('input[name="username"]', username);
        await this.basePage.fillInput('input[name="password"]', password);
        await this.basePage.click('button[type="submit"]',{setTimeout:1000});
    }
}
