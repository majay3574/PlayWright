import { test, expect } from "@playwright/test"
 
 
 
 
 
 
test(`Create Task`, async ({ page }) => {
 
    await page.goto("https://login.salesforce.com/");
    await page.fill('input[name="username"]', 'hari.radhakrishnan@qeagle.com');
    await page.fill('input[name="pw"]', 'Testleaf@1234');
    await page.click('input[name="Login"]');
    await page.waitForLoadState('load');
 
    const Global_Actions_SVG_icon = page.locator("div.slds-icon-waffle");
    await expect(Global_Actions_SVG_icon).toBeVisible({ timeout: 3000 })
    await Global_Actions_SVG_icon.click()
 
    const View_All = page.locator("button:has-text('View All')");
    await page.waitForSelector("button:has-text('View All')")
    await expect(View_All).toBeVisible({ timeout: 5000 })
    await View_All.click({ force: true })
 
    const search_parent = page.locator("div[class^='slds-form-element__control slds-grow']")
    await search_parent.locator("input[type='search']").fill("Tasks")
 
    const tasks_parent = page.locator("p.slds-truncate")
    await tasks_parent.locator("mark:has-text('Tasks')").click()
 
    await page.waitForLoadState('load');
 
    await page.locator(".oneActionsDropDown").nth(0).click()
 
    const parent_new_Task = page.locator("a[title='New Task']")
    const new_Task = parent_new_Task.locator("div:has-text('New Task')")
    await expect(new_Task).toBeVisible({ timeout: 3000 })
    await new_Task.click({ force: true });
   
    await page.waitForLoadState('load');
    const subject =  page.locator("div[class=slds-combobox_container] ")
    await subject.locator("input[part='input']").fill("Email")
 
    await page.locator("a[class='select']").nth(0).click()
   
    await page.locator("a:has-text('Waiting on someone else')").click({force:true})
   
    //await page.pause()
     await page.getByRole('button', { name: 'Save', exact: true }).click()
    //await page.locator("button").filter({hasText:'Save'}).click()
    //await page.locator("span:has-text('Save')").click()
    const toast_message = page.locator("div[data-key='success']")
 
    await expect(toast_message).toBeVisible({ timeout: 10000 })
 
    await page.waitForTimeout(5000);
 
 
})