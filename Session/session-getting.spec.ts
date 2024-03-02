import { test } from "@playwright/test";

test(`Login using Salesforce`, async({page})=>{
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "majay3574@gmail.com");
    await page.fill("#password", "Ajaymichael@007");
    await page.click("#Login");
    // await page.waitForLoadState("load");
    // await page.click(".slds-icon-waffle");
    // await page.getByText("View All").click();

    await page.context().storageState({path:"creds/sf-login-storage.json"})

})