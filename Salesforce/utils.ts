import { Page, Browser } from 'playwright';

export class utils {
    protected page: Page;
    protected browser: Browser;

    constructor(page: Page, browser: Browser) {
        this.page = page;
        this.browser = browser;
    }

    async goto(url: string, options: any): Promise<void> {
        try {
            console.log(`Navigating to ${url}...`);
            await this.page.goto(url, options);
        } catch (error) {
            console.error("An error occurred during navigation:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async getUrl(): Promise<string> {
        try {
            return await this.page.url();
        } catch (error) {
            console.error("An error occurred while getting URL:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async getTitle(): Promise<string> {
        try {
            return await this.page.title();
        } catch (error) {
            console.error("An error occurred while getting title:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }
    async fillInput(locator: string, option: any): Promise<void> {
        try {
            await this.page.fill(locator, option);
        } catch (error) {
            console.error("An error occurred during filling Value:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }
    async click(locator: string, option: any): Promise<void> {
        try {
            await this.page.click(locator, option);
        } catch (error) {
            console.error("An error occurred during click:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async doubleClick(locator: string, option: any): Promise<void> {
        try {
            await this.page.dblclick(locator, option);
        } catch (error) {
            console.error("An error occurred during double click:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async delayedClick(locator: string, option: any): Promise<void> {
        try {
            await this.page.waitForTimeout(3000);
            await this.page.click(locator, option);
        } catch (error) {
            console.error("An error occurred during delayed click:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async elementWaiting(locator: string, option: any): Promise<void> {
        try {
            await this.page.waitForSelector(locator, option);
        } catch (error) {
            console.error("An error occurred while waiting for element:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async getText(locator: string, option: any): Promise<string> {
        try {
            return await this.page.innerText(locator, option);
        } catch (error) {
            console.error("An error occurred while getting text:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async keyboardAction(key: string): Promise<void> {
        try {
            await this.page.keyboard.press(key);
        } catch (error) {
            console.error("An error occurred during keyboard action:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async mouseHover(locator: string): Promise<void> {
        try {
            await this.page.hover(locator);
        } catch (error) {
            console.error("An error occurred during mouse hover:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async mouseHoverAndClick(locator: string, option: any): Promise<void> {
        try {
            await this.page.hover(locator);
            await this.page.click(locator, option);
        } catch (error) {
            console.error("An error occurred during mouse hover and click:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async elementFocus(locator: string, option: any): Promise<void> {
        try {
            await this.page.locator(locator).focus(option);
        } catch (error) {
            console.error("An error occurred during element focus:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }

    async dragAnddrop(locator: string, targetLocator: any, option: any): Promise<void> {
        try {
            const pointedLocator = this.page.locator(locator, option);
            await pointedLocator.dragTo(this.page.locator(targetLocator, option));
        } catch (error) {
            console.error("An error occurred during drag and drop:", error);
            throw error;
        } finally {
            await this.browser.close();
        }
    }
}
