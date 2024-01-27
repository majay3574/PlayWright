import { test, expect, devices, chromium } from '@playwright/test';

test.use({ locale: 'en-US' });

test('test', async () => {
    const pixel5 = devices['Pixel 5'];
    const browser = await chromium.launch();
    const context = await browser.newContext({
      ...pixel5,
  
      geolocation: { longitude: -82.172920, latitude: 28.250010 },
      permissions: ['geolocation']
    });
    const page = await context.newPage();
    await page.goto('https://www.openstreetmap.org');
    await page.locator('[aria-label="Show My Location"]').click();
    await page.waitForTimeout(15000);

});