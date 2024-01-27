import test, { expect } from "@playwright/test";

test('Network interception with custom response', async ({ page }) => {
  // Intercepting a POST request to a specific URL
  await page.route('**/aura?preloadActions', async (route, request) => {
    if (request.method() === 'POST') {
       // Wait for a specific POST response
        console.log(await request.allHeaders());
      
    } else {
      // For non-POST requests, continue as usual
      route.continue();
    }
  });

    await page.goto('https://login.salesforce.com/');
    await page.locator("#username").fill("ranjini.r@testleaf.com")
    await page.locator("#password").fill("Testleaf$1234")
    await page.locator("#Login").click()
    
    const appLauncherLocator = page.locator(".slds-icon-waffle");
    await expect(appLauncherLocator).toBeVisible({timeout:10000})

});
