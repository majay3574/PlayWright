import { chromium, expect, test } from "@playwright/test"

test(`Testing waiting for a button to become visible`, async ({ page, context, browser }) => {
    // const windowPromise = context.waitForEvent("page")
    await page.goto("https://www.leafground.com/window.xhtml;")
    const windowPromise =  context.waitForEvent("page")
    await page.getByText("Open", { exact: true }).click();
    const window = await windowPromise
    console.log(windowPromise)
    await expect(window).toHaveURL("https://www.leafground.com/dashboard.xhtml")

    await window.bringToFront()

})


test(`Testing multiple window open`, async ({ page, context }) => {
    await page.goto("https://www.leafground.com/window.xhtml;")
    const windowPromise = context.waitForEvent("page")
    await page.getByText("Open with delay", { exact: true }).click()
    const window = await windowPromise
    await expect(window).toHaveURL("https://www.leafground.com/dashboard.xhtml")

    await window.bringToFront()
})


/* const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for the popup
    page.click('a[target="_blank"]') // Action that opens the popup
  ]); */