import { test, devices } from "@playwright/test";


  test("using expect library", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username", 'DemoSalesManager');
    await page.fill("#password", 'crmsfa');
    await page.click(".decorativeSubmit");
    // Listen for all console logs
    page.off('console', msg => console.log(msg.text()));
    page.on('console', msg => console.error('error'));

    // Listen for all console events and handle errors
    page.off('console', msg => {
        if (msg.type() === 'error')
          console.log(`Error text: "${msg.text()}"`);
      });
      
    const crmsf = await page.waitForSelector('a:has-text("CRM/SFA")', { timeout: 5000 });
    await crmsf.click();
  });