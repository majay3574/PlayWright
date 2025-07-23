import test from "@playwright/test"

test("Test 0101", async ({ page }) => {

    await page.goto("https://www.bing.com/");
    await page.locator(`li[role='menuitem']`).first().click();
    await page.waitForTimeout(10000)
})
