import test, { chromium } from "@playwright/test"


test(`launching browser`,async({})=>{
    const browser=await chromium.launch({channel:'chrome'})
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://artsandculture.google.com/project")
    console.log(page.url())
    console.log(await page.title())
})