import { chromium, expect, test } from "@playwright/test"

test(`Testing waiting for a button to become visible`, async ({ page, context, browser }) => {
    await page.goto("https://www.leafground.com/window.xhtml;")
    const windowPromise = context.waitForEvent("page")
    await page.getByText("Open", { exact: true }).click()
    const window = await windowPromise
    await expect(window).toHaveURL("https://www.leafground.com/dashboard.xhtml")

    await window.bringToFront()
    console.log(await window.title());

})


test(`Testing multiple window open`, async ({ page, context }) => {
    await page.goto("https://www.leafground.com/window.xhtml;")
    const windowPromise = context.waitForEvent("page")
    await page.getByText("Open with delay", { exact: true }).click()
    const window = await windowPromise
    await expect(window).toHaveURL("https://www.leafground.com/dashboard.xhtml")

    await window.bringToFront()



})



test.only(`Handling`, async ({ page, context }) => {
    // Launch the browser and open a new context and page
    await page.goto('https://leafground.com/window.xhtml');
    const [childPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for a new page to be opened
        page.click('button:has-text("Open")') // Click the "Open" button
    ]);
    await childPage.waitForLoadState();
    const emailInputSelector = 'input[id="email"]'; // Adjust selector based on the actual child page structure
    await childPage.fill(emailInputSelector, 'example@example.com');

    // Step 5: Verify the title of the parent page
    const parentTitle = await page.title();
    console.log('Parent Page Title:', parentTitle);

})
