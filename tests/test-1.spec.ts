import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=amzon&rlz=1C1VDKB_enIN1112IN1112&oq=amzon&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEyOTRqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.locator('#tads').getByRole('link', { name: 'Shop online at Amazon India' }).click();
  await page.getByRole('link', { name: 'Today\'s Deals' }).click();
  await page.getByTestId('filter-bubble-trending-bubble').click();
  await page.getByTestId('connection-problem-retry-button').click();
});