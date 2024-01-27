import { test, expect } from '@playwright/test';

test('Visual comparison test', async ({ page }) => {
  await page.goto('https://testleaf.com');
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot('testleaf.png');
});
