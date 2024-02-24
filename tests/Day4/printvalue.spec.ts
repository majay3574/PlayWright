import test from "@playwright/test"
import data from "./createleadData.json"
test(`handling drodown`, async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username", 'DemoSalesManager')
    await page.fill("#password", 'crmsfa')
    await page.click(".decorativeSubmit")
    await page.click("a:has-text('CRM/SFA')")

    await page.waitForLoadState('load')
    await page.click("a:has-text('Create Lead')")

    await page.locator("#createLeadForm_companyName").fill(data.companyname);
    await page.locator("#createLeadForm_firstName").fill("Ajay");
    await page.locator("#createLeadForm_lastName").fill("Michael");

    // Use the correct CSS selector to target the dropdown options
    const source_dropdown = page.locator("#createLeadForm_dataSourceId");
    const dd = source_dropdown.locator("option")
    let val = await dd.count();

for (let i = 0; i < val; i++) {
    
    console.log(await dd.nth(i).innerText())
    await source_dropdown.selectOption({index:i})
}

})