import { Page } from 'playwright';

export class utils {
    readonly:utils
    public page: Page;
    

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string, ){
        try {
            console.log(`Navigating to ${url}...`);
            await this.page.waitForTimeout(5000)
            await this.page.goto(url);
        } catch (error) {
            console.error("An error occurred during navigation:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }

    async getUrl(): Promise<any> {
        try {
            console.log( this.page.url());
        } catch (error) {
            console.error("An error occurred while getting URL:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }

    async getTitle(): Promise<string> {
        try {
            return await this.page.title();
        } catch (error) {
            console.error("An error occurred while getting title:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }
    async fillInput(locator: string, option: any): Promise<void> {
        try {
            await this.page.fill(locator, option);
        } catch (error) {
            console.error("An error occurred during filling Value:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }
    async click(locator: string, option: any): Promise<void> {
        try {
            await this.page.click(locator, option);
        } catch (error) {
            console.error("An error occurred during click:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }

    async doubleClick(locator: string, option: any): Promise<void> {
        try {
            await this.page.dblclick(locator, option);
        } catch (error) {
            console.error("An error occurred during double click:", error);
            throw error;
        } finally {
            await this.page.close();
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
            await this.page.close();
        }
    }

    async elementWaiting(locator: string, option: any): Promise<void> {
        try {
            await this.page.waitForSelector(locator, option);
        } catch (error) {
            console.error("An error occurred while waiting for element:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }

    async getText(locator: string, option: any): Promise<string> {
        try {
            return await this.page.innerText(locator, option);
        } catch (error) {
            console.error("An error occurred while getting text:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }

    async keyboardAction(key: string): Promise<void> {
        try {
            await this.page.keyboard.press(key);
        } catch (error) {
            console.error("An error occurred during keyboard action:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }

    async mouseHover(locator: string): Promise<void> {
        try {
            await this.page.hover(locator);
        } catch (error) {
            console.error("An error occurred during mouse hover:", error);
            throw error;
        } finally {
            await this.page.close();
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
            await this.page.close();
        }
    }

    async elementFocus(locator: string, option: any): Promise<void> {
        try {
            await this.page.locator(locator).focus(option);
        } catch (error) {
            console.error("An error occurred during element focus:", error);
            throw error;
        } finally {
            await this.page.close();
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
            await this.page.close();
        }
    }
}
