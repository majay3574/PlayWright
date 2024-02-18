import { test, devices } from "@playwright/test";



  test("test case", async ({ page }) => {
    await page.goto("https://www.google.com/search?q=leaftaps&oq=leaftaps&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM4ODBqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8");
    await page.waitForSelector('a[href="http://www.testleaf.com"]');
    const link = await page.$('a[href="http://www.testleaf.com"]')
    

    await page.waitForSelector('input[name="USERNAME"]');
    await page.fill('input[name="USERNAME"]', 'demosalesmanager');

    await page.waitForSelector('input[name="PASSWORD"]');
    await page.fill('input[name="PASSWORD"]', 'crmsfa');

    await Promise.all([
      page.waitForNavigation(),
      page.click('input[value="Login"]')
    ]);

    await page.goto('http://leaftaps.com/crmsfa/control/contactsMain');
  });

