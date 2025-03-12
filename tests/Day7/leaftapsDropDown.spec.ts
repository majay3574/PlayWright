import test from "@playwright/test"
import data from "../Day4/createleadData.json"
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
   await source_dropdown.selectOption({ label:"Public Relations"})
   
})