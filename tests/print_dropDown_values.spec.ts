import test, { chromium } from "@playwright/test";

test('Learn Basic Locators', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.leafground.com/select.xhtml");

    // Select the first option by index
    await page.selectOption(".ui-selectonemenu", { index: 1 });

    await page.waitForTimeout(2000);

    // Select the option labeled "Puppeteer"
    await page.selectOption(".ui-selectonemenu", { label: "Puppeteer" });

    // Locate all options under the specified dropdown using XPath
    const ddEle = page.locator("//h5[contains(text(),'Automation tool?')]/following::select[@class='ui-selectonemenu']/option");

    // Count the number of options in the dropdown
    const countOpt = await ddEle.count();
    console.log(`Number of options: ${countOpt}`);

    // Get all the inner texts of the options
    const text = await ddEle.allInnerTexts();
    console.log("Dropdown options:", text);

    // Loop through the options and click the one at index 1
    if (countOpt < 1) {
        await ddEle.nth(1).click();
    }


});
