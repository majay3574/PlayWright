//    table[class^='slds-table']>tbody>tr[data-row-key-value]
import { test, expect } from "@playwright/test"

test.only(`Creating a new dashboard`, async ({ page }) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", 'majay3574@gmail.com');
    await page.fill("#password", 'Ajaymichael@8428')
    await page.click("#Login");

    //Open the App Launcher menu
    let eleAppLaunch = page.locator('button .slds-icon-waffle');
    await expect(eleAppLaunch).toBeVisible({ timeout: 150000 });
    await eleAppLaunch.click();
    await page.waitForLoadState('load');

    //Click the View All link text
    let viewAll = page.locator('//button[text()="View All"]');
    await expect(viewAll).toBeVisible({ timeout: 150000 });
    await viewAll.click();
    await page.waitForLoadState('load')
    await page.waitForSelector("one-app-launcher-modal input.slds-input")
    //Search the "Dashboards" option
    await page.locator('one-app-launcher-modal input.slds-input').fill('Dashboards');
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
    await page.waitForTimeout(5000)

})