import test, { chromium } from "@playwright/test";

test(`using persistentContext`, async () => {
    const userDataDir = "C:/Users/AjayMichael/AppData/Local/Google/Chrome/User Data";


    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
    });
    const page = await context.newPage();

    await page.goto("https://qeagle.keka.com/#/home/dashboard");
    await page.waitForLoadState('networkidle');


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
    let webClockIn = page.locator("//button[text()='Web Clock-In']");
    let confirm = page.locator("//button[text()='Confirm']")
    
    if (await clockOut.isVisible()) {
        await clockOut.click({ force: true });
        await page.waitForTimeout(1000);
        await page.click("//div[@class='ng-star-inserted']//button[text()='Clock-out']", { force: true });
        if (await confirm.isVisible({ timeout: 5000 })) {
            await confirm.click({ force: true });
        }
    } else if (await webClockIn.isVisible()) {
        await webClockIn.click({ force: true });
        await page.fill("//textarea[@name='reason']", "Work From Office");

        await confirm.click({ force: true });
        if (await confirm.isVisible({ timeout: 5000 })) {
            await confirm.click({ force: true });
        }
    } else {
        console.log("there is nothing to click");
    }
    await page.waitForTimeout(5000);

});