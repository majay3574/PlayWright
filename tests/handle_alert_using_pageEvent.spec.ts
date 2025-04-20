import { test, expect } from '@playwright/test';

const selectors = {
  installingPlaywrightHeading: '//h2[@id="installing-playwright"]',
  initPlaywrightButton: '//span[normalize-space(text())="init playwright@latest"]',
};

class ExamplePage {
  page: any;

  constructor(page: any) {
    this.page = page;
  }

  async validateElementVisibility(selector: string, elementName: string): Promise<void> {
    await expect(this.page.locator(selector)).toBeVisible({ timeout: 5000 });
  }


  async click(selector: string, label: string, type: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  public async installingPlaywrightHeading(): Promise<void> {
    try {
      await this.page.waitForSelector(selectors.installingPlaywrightHeading, { timeout: 5000 });
      await this.validateElementVisibility(selectors.installingPlaywrightHeading, 'Installing Playwright Heading');
      await this.click(selectors.installingPlaywrightHeading, 'Installing Playwright Heading', 'Heading');
    } catch (error) {
      console.error(`Error interacting with Installing Playwright Heading: ${error}`);
      throw error;
    }
  }

  public async initPlaywrightButton(): Promise<void> {
    try {
      await this.page.waitForSelector(selectors.initPlaywrightButton, { timeout: 5000 });
      await this.validateElementVisibility(selectors.initPlaywrightButton, 'Init Playwright Button');
      await this.click(selectors.initPlaywrightButton, 'Init Playwright Button', 'Button');
    } catch (error) {
      console.error(`Error interacting with Init Playwright Button: ${error}`);
      throw error;
    }
  }
}


test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Example test using POM', async ({ page }) => {
  const examplePage = new ExamplePage(page);
  await examplePage.installingPlaywrightHeading();
  await examplePage.initPlaywrightButton();
});