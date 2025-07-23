import { test, expect } from '@playwright/test';

test('Login to Salesforce via API and set session', async ({ browser, request }) => {
  // Request OAuth token from Salesforce
  const response = await request.post('https://login.salesforce.com/services/oauth2/token', {
    form: {
      grant_type: 'password',
      client_id: '3MVG9WVXk15qiz1I615fotjKcEKr2mJ9_axJ8GcUZZXJm822dNEngOFNptnLRf5LcgdQy1yDHLssgyNjUpDH9',
      client_secret: '79EE46D1521636BD9F774178605981E6BA516C4C1358E36545C1E5BC50A274BF',
      username: 'majay3574@gmail.com',
      password: 'Ajaymichael@321', // include security token if required
    },
  });

  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  const accessToken = data.access_token;
  const instanceUrl = data.instance_url;

  // Create browser context
  const context = await browser.newContext();

  // Set Salesforce session cookie
  await context.addCookies([{
    name: 'sid',
    value: accessToken,
    domain: new URL(instanceUrl).hostname,
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'Lax',
  }]);

  const page = await context.newPage();
  await page.goto(`${instanceUrl}/lightning/page/home`);
  await page.waitForTimeout(5000);
});