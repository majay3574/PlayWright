import { test } from "@playwright/test";
//test.use({ storageState: "st_login.json" }) // This will be used for all tests in this file
test.beforeAll(`Get the storage state of Login Page`, async ({ page, }) => {
    page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.fill("#username", 'demoSalesManager');
    await page.fill("#password", "crmsfa");
    await page.click(`[value='Login']`);
    await page.waitForTimeout(2000);
    await page.click(`[class='crmsfa']`);
    await page.waitForTimeout(5000);
    await page.context().storageState({ path: "st_login.json" });
})

test.describe(`Login Page`, () => {
    test.use({ storageState: "st_login.json" });
    test(`Get the storage state of Login Page`, async ({ page, }) => {
        await page.goto(`http://leaftaps.com/crmsfa/control/main`);
        await page.waitForTimeout(5000);
    })
})