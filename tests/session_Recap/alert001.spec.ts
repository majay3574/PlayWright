import test, { Page } from "@playwright/test"
test(`handling popup`, async ({ page, context }) => {

    await page.goto("https://www.leafground.com/alert.xhtml");
    await page.pause();
    await page.locator("(//span[text()='Show'])[1]").click();
    await page.waitForTimeout(5000);

    let dialog = await page.waitForEvent('dialog')
    await dialog.accept()

    await page.waitForTimeout(5000);


})