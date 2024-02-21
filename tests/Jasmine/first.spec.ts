import { test, expect } from "@playwright/test";

beforeAll(async ({page}) => {
  await page.goto('https://whatismybrowser.com/');
});

test('should display correct browser', async ({ page }) => {
  const browser = await page.$eval('.string-major', (el) => el.innerHTML);
  expect(browser).toContain('Chrome');
});
