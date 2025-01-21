import test from "@playwright/test"

test(`create PDf`, async ({ page }) => {

    await page.goto("https://www.selenium.dev/selenium/docs/api/py/api.html");
    await page.pdf({ path: "./demofile.pdf" });
  

})