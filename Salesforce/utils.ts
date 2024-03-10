import { promises } from 'dns';
import { Page, Browser } from 'playwright';

export class BasePage {
    protected page: Page;
    protected browser: Browser;

    constructor(page: Page, browser: Browser) {
        this.page = page;
        this.browser = browser;
    }

    async goto(url: string, options: any):Promise<void> {
        console.log(`Navigating to ${url}...`);
        await this.page.goto(url, options);
    }

    async getUrl() {
        const gettingURL = this.page.url();
        console.log(gettingURL);
    }

    async getTitle() {
        const gettingTitle = await this.page.title();
        console.log(gettingTitle);
    }

    async click(locator: string, option: any) {
        try {
            await this.page.click(locator, option);
        } catch (error) {
            console.log("The page has an error: " + error);
            throw error;
        } finally {
            await this.browser.close()
        }
    }

    async doubleClick(locator: string, option: any) {
        try {
            await this.page.click(locator, option);
            await this.page.click(locator, option);
        } catch (error) {
            console.log("The page has an error: " + error);
            throw error;
        } finally {
            await this.browser.close()
        }
    }

    async delayedClick(locator: string, option: any) {
        try {
            await this.page.waitForTimeout(3000);
            await this.page.click(locator, option);
        } catch (error) {
            console.log("The page has an error: " + error);
            throw error;
        } finally {
            await this.browser.close()
        }
    }

    async elementWaiting(locator: string, option: any) {
        try {
            await this.page.waitForSelector(locator, option);
        } catch (error) {
            console.log("The page has an error: " + error);
            throw error;
        } finally {
            await this.browser.close()
        }
    }

    async getText(locator:string, option: any,) {
        try {
            const text=await this.page.innerText(locator,option)
            console.log(text +"")
        } catch (error) {
            console.log("The page has an error: " + error);
            throw error;
        } finally {
            await this.browser.close()
        }
    }

    async keyboardAction(Key: string) {
        try {
            await this.page.keyboard.press(Key);
        } catch (error) {
            console.log("The page has an error: " + error);
            throw error;
        }finally{
            await this.browser.close()
         }
    }
}
