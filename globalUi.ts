import test from "@playwright/test";


test("test case", async ({ page }) => {

    await page.goto("https://github.com/majay3574/SonicFramework");
    await page.waitForTimeout(2000);
})