import test, { Page } from "@playwright/test"
test(`handling popup`, async ({ page, context }) => {

    await page.goto("https://www.leafground.com/window.xhtml");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click("//span[text()='Open']")
    ])
    console.log(newPage);

    const pages = newPage.context().pages();
    console.log(pages.length);

    console.log(`page1 title`, await pages[0].title());
    console.log(`page2 title`, await pages[1].title());

    await pages[1].fill("[name='email']", 'ajaymichael@123.com');
    await pages[0].bringToFront();
    await pages[0].click("//span[text()='Open Multiple']")
    await pages[0].waitForTimeout(5000);
})