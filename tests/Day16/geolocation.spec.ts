import { test, expect } from '@playwright/test';

test.use({
  geolocation: { longitude: -100.000000, latitude: 31.000000 },
  permissions: ['geolocation'],
});

test('my test with geolocation', async ({ page, context }) => {
  
  await page.goto("https://www.google.com/maps")
  await page.waitForLoadState('domcontentloaded')
  await page.click('button[aria-label="Your Location"]>div')
  await page.waitForTimeout(10000)
});

test.skip('my test with geolocati', async ({ page, context }) => {
  
  await page.goto("https://www.google.com/maps")
  await page.waitForLoadState('domcontentloaded')
  await page.click('button[aria-label="Your Location"]>div')
  await page.waitForTimeout(10000)
});