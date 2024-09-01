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
     /* "Bro, I used an array to close the page. I think it is a page, not a context. 
    You can also use await totalPages[1].close();. Both are the same*/
    if (totalPages.length > 1) {
        await totalPages[1].close();
    } else {
        console.log("There are not enough pages to close the third one.");
    }
   
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("Search...").fill("Arivazhagan")
    await page.waitForTimeout(5000);
    await page.waitForLoadState();

})