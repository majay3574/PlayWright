import { test, expect } from "@playwright/test"

test(`Creating a new dashboard`, async ({ page }) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", 'majay3574@gmail.com');
    await page.fill("#password", 'Ajaymichael@123')
    await page.click("#Login");


    let eleAppLaunch = page.locator('button .slds-icon-waffle');
    await eleAppLaunch.click();
    let viewAll = page.locator('//button[text()="View"]');
    await expect(page).toHaveTitle('Home | Salesforce')
    await viewAll.click();



   /*  await page.locator('one-app-launcher-modal input.slds-input').fill('Dashboards',);
    await page.locator("//mark[text()='Dashboards']").click();

    //Click the New Dashboard button
    await page.locator("//div[text()='New Dashboard']").click();

    await page.waitForLoadState('load');

    //Loacte the frame
    const dashboardFrame = page.frameLocator("[title='dashboard']");

    //Fill in the input field *** Name ***
    await dashboardFrame.locator("#dashboardNameInput").fill("Ajay Michael");

    //Fill in the input field  *** Description ***
    await dashboardFrame.locator("#dashboardDescriptionInput").fill("Filling with some text in description");

    // Click Create Button
    await dashboardFrame.locator("#submitBtn").click();

    await page.waitForLoadState('load');

    await page.frameLocator("[title='dashboard']").locator("button:text-is('Save')").click()
    await page.waitForLoadState('load');
    const dashboardName = await dashboardFrame.locator("//div[contains(@class,'slds-has-divider_bottom')]/span").innerText();

    console.log(dashboardName);
    await page.waitForTimeout(5000) */
    await page.getByRole('option', { name: 'Service', exact: true }).click();

})
