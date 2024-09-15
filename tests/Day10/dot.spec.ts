import { test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({ path: join(__dirname, 'data', 'data.env') });

test(`Reading data from .env file`, async ({ page }) => {

  if (!process.env.QA_URL || !process.env.QA_UNAME || !process.env.QA_PWD) {
    throw new Error('Environment variables are not loaded correctly.');
  }

  await page.goto(process.env.QA_URL as string);
  await page.fill("#username", process.env.QA_UNAME as string);
  await page.fill("#password", process.env.QA_PWD as string);
  await page.click(".decorativeSubmit");
});
