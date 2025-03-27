import test from "@playwright/test"
test(`test the localHost`, async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.keyboard.down("Control");
    await page.keyboard.press("T");
    await page.keyboard.up("Control");


})