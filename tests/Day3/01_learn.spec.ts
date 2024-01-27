import { chromium, test } from "@playwright/test"

test("title 1", async () => {
    const browserInstance = await chromium.launch({ headless: false })
    const browserContext = await browserInstance.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://www.google.com")
    await page.waitForTimeout(10000)
    const currentUrl = page.url()
    console.log(`The loaded url is ${currentUrl}`)
})

test.skip("title 2", async ({ page }) => {
    await page.goto("https://www.google.com")
    await page.waitForTimeout(10000)

})