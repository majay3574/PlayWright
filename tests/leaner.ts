import { test, expect, Page } from '@playwright/test';

const selectors = {
  performanceButton: "//a[normalize-space(text())=\"Performance\"]",
  appsButton: "//a[normalize-space(text())=\"Apps\"]",
  textHintSpan: "span.text-hint",
  addKButton: "//span[normalize-space(text())=\"+ K\"]",
  webClockInButton: "//a[normalize-space(text())=\"Web Clock-In\"]",
};

class NavigationPage {
  page: Page;

  constructor(page: any) {
    this.page = page;
  }

  async validateElementVisibility(selector: string, elementName: string): Promise<void> {
    await expect(this.page.locator(selector)).toBeVisible({ timeout: 5000 });
  }

  async click(selector: string, label: string, type: string): Promise<void> {
    await this.page.click(selector);
  }


  public async performanceButton(): Promise<void> {
    try {
      await this.page.waitForSelector(selectors.performanceButton, { timeout: 5000 });
      await this.validateElementVisibility(selectors.performanceButton, "Performance Button");
      await this.click(selectors.performanceButton, "Performance", "Button");
    } catch (error) {
      console.error("Error clicking Performance button:", error);
      throw error;
    }
  }

  public async appsButton(): Promise<void> {
    try {
      await this.page.waitForSelector(selectors.appsButton, { timeout: 5000 });
      await this.validateElementVisibility(selectors.appsButton, "Apps Button");
      await this.click(selectors.appsButton, "Apps", "Button");
    } catch (error) {
      console.error("Error clicking Apps button:", error);
      throw error;
    }
  }

  public async textHintSpan(): Promise<void> {
    try {
      await this.page.waitForSelector(selectors.textHintSpan, { timeout: 5000 });
      await this.validateElementVisibility(selectors.textHintSpan, "Text Hint Span");
      await this.click(selectors.textHintSpan, "Text Hint", "Span");
    } catch (error) {
      console.error("Error clicking Text Hint span:", error);
      throw error;
    }
  }

  public async addKButton(): Promise<void> {
    try {
      await this.page.waitForSelector(selectors.addKButton, { timeout: 5000 });
      await this.validateElementVisibility(selectors.addKButton, "Add K Button");
      await this.click(selectors.addKButton, "Add K", "Button");
    } catch (error) {
      console.error("Error clicking Add K button:", error);
      throw error;
    }
  }

  public async webClockInButton(): Promise<void> {
    try {
      await this.page.waitForSelector(selectors.webClockInButton, { timeout: 5000 });
      await this.validateElementVisibility(selectors.webClockInButton, "Web Clock-In Button");
      await this.click(selectors.webClockInButton, "Web Clock-In", "Button");
    } catch (error) {
      console.error("Error clicking Web Clock-In button:", error);
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

test('Navigation test', async ({ page }) => {
  const navigationPage = new NavigationPage(page);
  await navigationPage.performanceButton();
  await navigationPage.appsButton();
  await navigationPage.textHintSpan();
  await navigationPage.addKButton();
  await navigationPage.webClockInButton();
});