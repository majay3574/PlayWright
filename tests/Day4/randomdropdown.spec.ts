import test from "@playwright/test"

test(`handling drodown`, async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username", 'DemoSalesManager')
    await page.fill("#password", 'crmsfa')
    
    await page.click(".decorativeSubmit")
    await page.click("a:has-text('CRM/SFA')")

    await page.waitForLoadState('load')
    await page.click("a:has-text('Create Lead')")

    await page.locator("#createLeadForm_companyName").fill("Aj Groups");
    await page.locator("#createLeadForm_firstName").fill("Ajay");
    await page.locator("#createLeadForm_lastName").fill("Michael");

    // Use the correct CSS selector to target the dropdown options
    const source_dropdown = page.locator("#createLeadForm_dataSourceId");
    const dd = source_dropdown.locator("option")
    let val = await dd.count();

    console.log('Number of options in the dropdown:', val);

    const randomNumber = Math.floor(Math.random() * val);
    console.log('random Number = ', randomNumber);
    await source_dropdown.selectOption({ index: randomNumber })
    await page.locator("#createLeadForm_generalProfTitle").fill("God Of War");

    const industry_dropdown= page.locator("#createLeadForm_industryEnumId")
    await  industry_dropdown.selectOption({value:"IND_HARDWARE"})
    await page.locator(".smallSubmit").click({timeout:5000});
    await page.waitForTimeout(3000);

})
/* 
const page = await browser.newPage();
await page.setContent(`
  <select>
    <option value='1'>Order Number : 1234 (purchased on 10/01/2022)</option>
    <option value='2'>Order Number : 4567 (purchased on 02/03/2022)</option>
  </select>
`);

// Get option text that we want to select. You can use xpath as well, but this is probably
// more readable!
const optionToSelect = await page.locator('option', { hasText: '4567' }).textContent();
// Use option text to select
await page.locator('select').selectOption({ label: optionToSelect }); */