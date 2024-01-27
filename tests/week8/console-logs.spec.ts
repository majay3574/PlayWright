import { test } from '@playwright/test';

test('Console logs capture', async ({ page }) => {
  page.on('console', message => {
    console.log(`Console log: ${message.type()}: ${message.text()}`);
  });

  await page.goto('https://www.testleaf.com/');
  await page.waitForTimeout(10000);
});