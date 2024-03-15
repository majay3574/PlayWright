import { test, expect } from "@playwright/test";
import login from "./login.spec"; 
import credentials from "./Data/usercerdintial.json"




test(`Create Task in leaftab`, async ({ page }) => {

    await login(page,credentials.un,credentials.pw);
    
    const search_parent = page.locator("div[class^='slds-form-element__control slds-grow']");
    await search_parent.locator("input[type='search']").fill("Tasks");
 
    const tasks_parent = page.locator("p.slds-truncate");
    await tasks_parent.locator("mark:has-text('Tasks')").click();
 
    await page.waitForLoadState('load');
 
    await page.locator(".oneActionsDropDown").nth(0).click();
 
    const parent_new_Task = page.locator("a[title='New Task']");
    const new_Task = parent_new_Task.locator("div:has-text('New Task')");
    await expect(new_Task).toBeVisible({ timeout: 3000 });
    await new_Task.click({ force: true });
   
    await page.waitForLoadState('load');
    const subject =  page.locator("div[class=slds-combobox_container] ");
    await subject.locator("input[part='input']").fill("Email");
 
    await page.locator("a[class='select']").nth(0).click();
   
    await page.locator("a:has-text('Waiting on someone else')").click({force:true});
   
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    const toast_message = page.locator("div[data-key='success']");
 
    await expect(toast_message).toBeVisible({ timeout: 10000 });
 
    await page.waitForTimeout(5000);
});
