import test from "@playwright/test"

test(`Salesforce Window`, async ({ page, context }) => {

    await page.goto("https://login.salesforce.com");
    await page.locator("input[id='username'] ").fill("majay3574@gmail.com");
    await page.locator("input[id='password'] ").fill("Ajaymichael@8508");
    await page.locator("input[id='Login']").click();
    await page.waitForLoadState('load');
    const [multiPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("//span[text()='Learn More']").click()
    ])
    await page.waitForTimeout(3000)
    const pages = multiPage.context().pages();
    await pages[1].bringToFront();
    await pages[1].locator("//button[text()='Confirm']").click();
    await pages[1].waitForLoadState('load');
    console.log(await pages[1].title());
    
    
    
})

