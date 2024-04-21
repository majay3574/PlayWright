import { chromium, Browser, Page, Response } from 'playwright';

async function login() {
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();

  const capturedApiResponses: { url: string, response: string }[] = [];

  // Intercept responses
  page.on('response', async (response: Response) => {
    // Check if the request is to the login endpoint
    if (response.url() === 'https://learn.e1cloudqa.com/admin') {
      // Check if the response is a redirect
      if (response.status() === 301 || response.status() === 302) {
        console.log('Redirect response:', response.url());
      } else {
        // Capture and log the response
        const responseBody = await response.text();
        capturedApiResponses.push({ url: response.url(), response: responseBody });
        console.log('Captured POST Response:', response.url());
        console.log('Response Body:', responseBody);
      }
    }
  });

  await page.goto("https://learn.e1cloudqa.com/admin");

  // Fill in the login form
  await page.fill("#username", "admin");
  await page.fill("#password", "Welcome1@");
  await page.click('button[type="submit"]');

  await browser.close();

  console.log('Captured POST Responses:', capturedApiResponses);
}

login().catch(error => console.error(error));

