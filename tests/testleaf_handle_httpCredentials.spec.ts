import test from "@playwright/test";
test('Basic Auth', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: "admin",
            password: "testleaf",
        }
    })
    const page = await context.newPage();
    await page.goto("https://www.leafground.com/auth.xhtml")
    await page.getByText("Basic Auth", { exact: true }).click();
    const totalPages = context.pages();
    console.log("The total no of pages are :" + totalPages.length)
    await page.waitForTimeout(2000);
    if (totalPages.length > 1) {
        await totalPages[1].close();
    } else {
        console.log("There are not enough pages to close the third one.");
    }
   
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("Search...").fill("Ajay Michael")
    await page.waitForTimeout(5000);
    await page.waitForLoadState();
   

})