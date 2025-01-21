import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the page
  await page.goto('https://example.com');

  // Wait for dropdown to load dynamic options
  await page.waitForSelector('select#dropdownId');

  // Select by visible text (label)
  await page.selectOption('select#dropdownId', { label: 'English' });
  await page.selectOption('select#dropdownId', { label: 'Français' });

  await browser.close();
})();
