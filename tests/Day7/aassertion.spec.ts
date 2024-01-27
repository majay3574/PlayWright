import test, { expect } from "@playwright/test"

test(`using expect library`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",'DemoSalesManager')
    await page.fill("#password",'crmsfa')
    await page.click(".decorativeSubmit")
    
    const crmsf = page.locator('a:text-is("CRM/SFA")')
    await expect(crmsf).toBeVisible({timeout:5000})
    await crmsf.click()
})