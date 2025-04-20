import { test, expect } from '@playwright/test';

const selectors = {
  image: 'img[data-csiid="Afz9Z-CeM6XN1e8P8LfJyAM_2"]',
  searchBox: '//textarea[@id="APjFqb"]',
  trendingSearches: '//div[normalize-space(text())="Trending searches"]',
};

class GoogleSearchPage {
  page: any;

  constructor(page: any) {
    this.page = page;
  }

  public async clickImage() {
    try {
      await this.page.waitForSelector(selectors.image, { timeout: 5000 });
      await this.validateElementVisibility(selectors.image, 'Image');
      await this.click(selectors.image, 'Image', 'Click');
    } catch (error) {
      console.error('Error clicking image:', error);
      throw error;
    }
  }

  public async fillSearchBox(text: string) {
    try {
      await this.page.waitForSelector(selectors.searchBox, { timeout: 5000 });
      await this.validateElementVisibility(selectors.searchBox, 'Search Box');
      await this.page.fill(selectors.searchBox, text);
    } catch (error) {
      console.error('Error filling search box:', error);
      throw error;
    }
  }

  public async clickTrendingSearches() {
    try {
      await this.page.waitForSelector(selectors.trendingSearches, { timeout: 5000 });
      await this.validateElementVisibility(selectors.trendingSearches, 'Trending Searches');
      await this.click(selectors.trendingSearches, 'Trending Searches', 'Click');
    } catch (error) {
      console.error('Error clicking Trending Searches:', error);
      throw error;
    }
  }

  private async validateElementVisibility(selector: string, elementName: string) {
    await expect(this.page.locator(selector)).toBeVisible({ timeout: 2000 });
    console.log(`${elementName} is visible`);
  }


  private async click(selector: string, label: string, type: string) {
    await this.page.click(selector);
    console.log(`Clicked ${label} (${type})`);
  }
}


test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Google Search Test', async ({ page }) => {
  const googleSearchPage = new GoogleSearchPage(page);
  await googleSearchPage.clickImage();
  await googleSearchPage.fillSearchBox('Playwright');
  await googleSearchPage.clickTrendingSearches();
});