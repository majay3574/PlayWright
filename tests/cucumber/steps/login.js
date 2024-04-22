import { Given, When, Then } from "@cucumber/cucumber"
import test from "@playwright/test";

Given(`User navigates to the application`, async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

});
When("I enter the username as {string}", async (username) => {

    await page.locator("#username").fill(username);

});

When("I enter the password as {string}", async (password) => {

    await page.locator("#password").fill(password);

});

When("I click on login button", async () => {

    await page.locator(".decorativeSubmit").click();

});

Then("User should logged in successfully", async () => {

    const text = await page.locator("div[id='form'] h2").textContent();

    expect(text).toContain("Welcome ");

});

Then("Logout from the application", async () => {

    await page.locator(".decorativeSubmit").click();


});