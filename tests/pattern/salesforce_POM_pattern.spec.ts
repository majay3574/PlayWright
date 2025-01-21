import { test } from '@playwright/test';
import { SFLogin } from './SalesForceLogin';
import { SFHomePage } from './SFHomePage';


test('do it', async ({ page }) => {
    const login = new SFLogin(page);
    const SFHome = new SFHomePage(page)

    await login.loadUrl('https://example.com');  // Replace with your actual URL
    await login.enterCredentials('your-username', 'your-password');
    await SFHome.clickAppLauncher();
});
