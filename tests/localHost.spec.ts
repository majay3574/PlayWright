import test from "@playwright/test"
test(`test the localHost`, async ({ page }) => {

    await page.goto("http://127.0.0.1:3000");

})