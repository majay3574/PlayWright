import test, { Page } from "@playwright/test"
test.skip(`handling popup`, async ({ page, context }) => {

    await page.goto("https://www.leafground.com/window.xhtml");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click("//span[text()='Open']")
    ])

    const pages = newPage.context().pages();
    console.log(pages.length);

    let webPages:any
    for (let i = 0; i < pages.length; i++) {
        const title = await pages[i].title()
        console.log(`page title`, title);
        if (title === "Dashboard") {
            webPages = pages[i];
        }

    }
    await webPages.fill("[name='email']",'ajaymichael@123.com');
    await webPages.pause();
    await webPages.waitForTimeout(3000);

})