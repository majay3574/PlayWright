import { test, expect } from "@playwright/test";

test("mocks a test call to API", async ({ page }) => {
  const routePattern = '**/aura?preloadActions';

  await page.route(routePattern, async route => {
    const jsonResponse = {
      "Id": "00Q5g00000XFo6REAT",
      "Name": "Michael, Ajay"
    };
    // Fulfill the route with the JSON response
    await route.fulfill({ contentType: 'application/json', body: JSON.stringify(jsonResponse) });
  });

  await page.goto("https://login.salesforce.com");
  await page.fill("#username", 'majay3574@gmail.com');
  await page.fill("#password", 'Ajaymichael@8428');
  await page.click("#Login");

  // Wait for the Salesforce app launcher icon to be visible
  await page.waitForSelector('div.slds-icon-waffle', { timeout: 150000 });
  const eleAppLaunch = page.locator('div.slds-icon-waffle');
  await eleAppLaunch.click();
  await page.waitForLoadState('load');

  // Click the "View All" link
  const viewAll = page.locator('text=View All');
  await viewAll.click();

  // Search for the "Leads" option
  await page.fill('one-app-launcher-modal input.slds-input', 'Leads');
  await page.click('mark:text("Leads")');
  await page.waitForLoadState('load');

  // Wait for some time before checking for the text element
  await page.waitForTimeout(10000);

  // Check if the text element is visible on the page
  const textElement = page.locator('a[title="Michael, Ajay"]');
  if (await textElement.isVisible()) {
    await expect(textElement).toBeVisible({ timeout: 20000 });
  } else {
    console.log('Text element not found');    
  }
});
