import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

test('Verify Home and Login Pages', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigateTo('http://leaftaps.com/opentaps/control/main');
    expect(await homePage.verifyHomePage())

    await loginPage.navigateTo('http://leaftaps.com/opentaps/control/login');
    await loginPage.login('invalidUser', 'invalidPass');
    expect(await loginPage.isLoginErrorDisplayed(),)
});
