import { test, expect, devices, chromium } from '@playwright/test';

test.use({ locale: 'en-US' });

test('test', async ({ page }) => {
  /* const pixel5 = devices['Pixel 5'];
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...pixel5, */
  ({
    geolocation: { longitude: 31.9686, latitude: 99.9018 },
    permissions: ['geolocation']
  });

  await page.goto('https://www.openstreetmap.org');
  await page.locator('[aria-label="Show My Location"]').click();
  await page.waitForTimeout(15000);

});