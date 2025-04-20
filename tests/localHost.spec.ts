import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Navigation and Interaction Test', async ({ page }) => {
  // Performance link
  const performanceLink = page.locator('//a[normalize-space(text())="Performance"]');
  await expect(performanceLink).toBeVisible({ timeout: 5000 });
  await performanceLink.click();

  // Apps link
  const appsLink = page.locator('//a[normalize-space(text())="Apps"]');
  await expect(appsLink).toBeVisible({ timeout: 5000 });
  await appsLink.click();

  // Hint span
  const hintSpan = page.locator('span.text-hint');
  await expect(hintSpan).toBeVisible({ timeout: 5000 });
  await hintSpan.click();


  // + K span
  const plusKSpan = page.locator('//span[normalize-space(text())="+ K"]');
  await expect(plusKSpan).toBeVisible({ timeout: 5000 });
  await plusKSpan.click();

  // Web Clock-In link
  const webClockInLink = page.locator('//a[normalize-space(text())="Web Clock-In"]');
  await expect(webClockInLink).toBeVisible({ timeout: 5000 });
  await webClockInLink.click();
});