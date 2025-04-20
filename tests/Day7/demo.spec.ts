/* let sampleNum = ["Rs:20000.00", "Rs:30000.00", "Rs:40000.00"];
let cleaned = sampleNum.map(num => num.replace("Rs:", "").replace(".00", ""));
let number: string[] = [];
cleaned.forEach(element => {
    if (element === "40000") {
        number.push(element);
    }
});
console.log(parseInt(number[0])); 
 */

import { test, chromium } from "@playwright/test";

test("sanap", async () => {
    let browser = await chromium.launch({ headless: false ,channel: 'chrome'});
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.snapdeal.com/");
    await page.getByRole('textbox', { name: 'Search products & brands' }).click();
    await page.locator('#inputValEnter').fill('Shoes men');
    await page.locator('#inputValEnter').focus();
    await page.locator('#inputValEnter').press('Enter',{delay: 1000});
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(5000);
    let price = await page.locator(`[id^='display-price']`).allTextContents();
    let newPrice = price.map(num => num.replace("Rs. ", "").replace(".00", ""));
    console.log(parseInt(newPrice[0]));
    
})