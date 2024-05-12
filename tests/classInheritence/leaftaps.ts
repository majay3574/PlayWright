import { chromium,Page } from "@playwright/test";

class Leaftaps {
    lppage:any;
    username:any;
    password:any;

    constructor(page:any) {
        this.lppage = page;
        this.username = "demoSalesManager";
        this.password = "crmsfa";
    }

    async navigate() {
        await this.lppage.goto("http://www.leaftaps.com/opentaps");
    }

    async fillUsername() {
        await this.lppage.fill('#username', this.username);
    }

    async fillPassword() {
        await this.lppage.fill('#password', this.password);
    }

    async clickLogin() {
        await this.lppage.click('.decorativeSubmit');
    }
}

async function doLogin() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new Leaftaps(page);
    await loginPage.navigate();
    await loginPage.fillUsername();
    await loginPage.fillPassword();
    await loginPage.clickLogin();
    await page.close()
}

doLogin();
