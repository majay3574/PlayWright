import { test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Load the environment variables from the .env file located in the data directory
dotenv.config({ path: join(__dirname, 'data', '.env') });

test(`Reading data from .env file`, async ({ page }) => {
  // Ensure environment variables are loaded
  if (!process.env.QA_URL || !process.env.QA_UNAME || !process.env.QA_PWD) {
    throw new Error('Environment variables are not loaded correctly.');
  }

  await page.goto(process.env.QA_URL as string);
  await page.fill("#username", process.env.QA_UNAME as string);
  await page.fill("#password", process.env.QA_PWD as string);
  await page.click(".decorativeSubmit");
});
