import { chromium, test } from "@playwright/test"
import { channel } from "diagnostics_channel"

test("title 1", async ({page}) => {
    /* const browserInstance = await chromium.launch({ headless: false ,channel:"msedge"})
    const browserContext = await browserInstance.newContext()
    const page = await browserContext.newPage() */
    await page.goto("https://www.google.com")
    await page.waitForTimeout(10000)
    const currentUrl = page.url()
    console.log(`The loaded url is ${currentUrl}`)
})

test.skip("title 2", async ({ page }) => {
    await page.goto("https://www.google.com")
    await page.waitForTimeout(10000)

})