import test,{chromium, Locator} from '@playwright/test';


test(`test the data`,async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://digital-sit.standardbank.co.za/sbsa/landing');

    // Click Home Sign In
    await page.click("//button[text()='SIGN IN ']");

    // Enter Username
    await page.fill("//input[@name='pf.username']", 'HensonSolomon');
    await page.click("//span[text()='Sign In']");
    await page.waitForTimeout(3000); // Medium pause
    if (!(await page.isVisible("//input[@name='pf.pass']")) && await page.isVisible("#signOnPassword")) {
        await page.waitForLoadState();
        await page.click("#signOnPassword");
    }
    await page.fill("//input[@name='pf.pass']", 'Backbase@4321');
    await page.click("//span[text()='Sign In']");
    await page.waitForTimeout(3000);
    await page.fill("//ng-otp-input[@class='pt-5 pb-2 d-flex justify-content-between']//descendant::input[1]", '123456');
    await page.click("//button[normalize-space()='NEXT']");
    const spinner: Locator = page.locator("div.loading-spinner");
    await spinner.waitFor({ state: "hidden", timeout: 30000 });
    await page.waitForTimeout(5000);
    await context.storageState({ path: "storage/login.json" });
    console.log("Storage state saved!");
    await page.waitForTimeout(5000);
    if (await page.isVisible("(//h2[text()[normalize-space()='Select business profile']]/following::div[text()='Business profile'])[1]")) {
        console.log("Business profiles are displayed.");
        await page.click(`(//h2[text()[normalize-space()='Select business profile']]/following::div[text()='your-business-profile']/following::div[text()='Business profile'])[1]`);
        console.log("Dashboard is verified with accounts.");
    }
    await browser.close();
})
