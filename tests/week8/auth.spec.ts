import { chromium, expect, test } from "@playwright/test";
import assert from "assert";

test("To launch a browser and assert new window text", async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://leafground.com/auth.xhtml");
    
    // Listen for the popup event
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click("//span[text()='Basic Auth']")
    ]);

    // Wait for the new page to load
    await newPage.waitForLoadState();

    // Assert that the new window's body contains the text "Babu"
    const bodyText = await newPage.textContent('body');
    console.log(bodyText);

    
    
})
