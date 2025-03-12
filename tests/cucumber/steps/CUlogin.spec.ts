import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';

let browser, page;

Given('User navigates to the application', async function () {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('http://leaftaps.com/opentaps/control/main');
});

When('I enter the username as {string}', async function (username: string) {
    await page.locator('#username').fill(username);
});

When('I enter the password as {string}', async function (password: string) {
    await page.locator('#password').fill(password);
});

When('I click on login button', async function () {
    await page.locator('.decorativeSubmit').click();
});

Then('User should logged in successfully', async function () {
    const text = await page.locator('div[id="form"] h2').textContent();
    expect(text).toContain('Welcome ');
});

Then('Logout from the application', async function () {
    await page.locator('.decorativeSubmit').click();
    await browser.close();
});
