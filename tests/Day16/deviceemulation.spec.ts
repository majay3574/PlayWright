import { test, devices } from "@playwright/test";

// Use the iPhone 12 device at the top level of the test file
test.use({ ...devices['Galaxy S5'] });

//test.use({ viewport: { width: 1600, height: 1200 } });
  test("using expect library", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username", 'DemoSalesManager');
    await page.fill("#password", 'crmsfa');
    await page.click(".decorativeSubmit");

    const crmsf = await page.waitForSelector('a:has-text("CRM/SFA")', { timeout: 5000 });
    await crmsf.click();
  });

