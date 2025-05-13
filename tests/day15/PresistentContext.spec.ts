import test, { chromium } from "@playwright/test";

test(`using persistentContext`, async () => {
    const userDataDir = "C:/Users/AjayMichael/AppData/Local/Google/Chrome/User Data";


    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
    });
    const page = await context.newPage();

    await page.goto("https://qeagle.keka.com/#/home/dashboard");


    const allPages = context.pages();
    console.log(`Total open pages: ${allPages.length}`);
    for (const p of allPages) {
        const title = await p.title();
        if (title.includes(" Home | Dashboard")) {
            await p.bringToFront();
            console.log(`Switched to page with title: ${title}`);
            break;
        }
    }
    let clockOut = page.locator("//button[text()='Clock-out']");
    await page.locator("//button[text()='View All']").waitFor();


    if (await clockOut.isVisible()) {
        await clockOut.click({ force: true });
        await page.waitForTimeout(1000);
        await page.click("//div[@class='ng-star-inserted']//button[text()='Clock-out']", { force: true });
    } else {
        console.log("there is nothing to click");
    }
    await page.waitForTimeout(5000);

});



/* test(`Persistent Context`, async () => {


    const userDataDir = "./myUserDataDir";


    //Launch a persistent context
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false, channel: 'msedge',
        httpCredentials: {
            username: "admin",
            password: "testleaf",
            origin: "http://leafground.com:8090"
        }
    });


    const page = await context.newPage();
    await page.goto("https://leafground.com/auth.xhtml");


    await page.getByRole('button', { name: 'Basic Auth' }).click();


    await page.waitForTimeout(5000);




}) */