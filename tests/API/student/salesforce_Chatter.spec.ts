
import { test, expect } from "@playwright/test"
import { log } from "console";

test.only(`Creating a new dashboard`, async ({ page }) => {
    test.slow()
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", 'majay3574@gmail.com');
    await page.fill("#password", 'Ajaymichael@8508')
    await page.click("#Login");

    //Open the App Launcher menu
    let eleAppLaunch = page.locator('button .slds-icon-waffle');
    await expect(eleAppLaunch).toBeVisible({ timeout: 150000 });
    await eleAppLaunch.click();
    await page.waitForLoadState('load');

    //Click the View All link text
    let viewAll = page.locator('button:text-is("View All")');
    await expect(viewAll).toBeVisible({ timeout: 150000 });
    await viewAll.click();
    await page.waitForLoadState('load')
    await page.waitForSelector("one-app-launcher-modal input.slds-input");

    //Type ‘Service’ in the search box and click on the Service link.
    await page.locator('one-app-launcher-modal input.slds-input').fill('Service');
    await page.click("mark:text-is('Service')");

    // Navigate to the Cases tab from the Service dashboard
    await page.click("span:text-is('Cases')");
    let spinnerDisappear = page.locator("div[class^='slds-spinner_container']:not(#spinner-container)");
    await expect.soft(spinnerDisappear).toHaveCount(0);

    //Click on the New button to create a new case.
    await page.click("div:text-is('New')");

    //Click on the Search Contacts input field in Contact Name
    await page.click("label:text-is('Contact Name') + * input");

    //Click on the New Contact link
    await page.click("span:text-is('New Contact')");

    // Fill in all the mandatory fields (Salutation, First Name, Last Name) with a valid data
    await page.waitForLoadState('load');
    await page.waitForSelector("h1:text-is('New Contact')");
    await page.click("div[class^='salutation'] a");
    await page.click("a:text-is('Mr.')")
    let firstName = "Ajay"
    await page.fill(`input[placeholder="First Name"]`, firstName);
    await page.fill(`input[placeholder="Last Name"]`, "Michael");

    // Click on the Save button.
    await page.click("button[title='Save']");
    let successMsg = await page.innerText(`div[class^='toastContent']`);
    expect(successMsg).toContain("Contact was created")

    //Click Search Accounts input field in Account Name and click on the New Account link
    await page.click(`input[placeholder="Search Accounts..."]`);
    await page.click("span:text-is('New Account')");

    //Fill in all the mandatory fields (Account Name, Account Number) with a valid data.
    await page.waitForLoadState('load');
    await page.waitForSelector("h1:text-is('New Account')");

    //Fill in all the mandatory fields (Account Name, Account Number) with a valid data.
    await page.fill("//span[text()='Account Name']/parent::label/following-sibling::input", "Wolverine");
    await page.fill("//span[text()='Account Number']/parent::label/following-sibling::input", "11231555");

    //Select the Rating dropdown and choose the option ‘Hot’
    await page.click("//span[text()='Rating']/parent::span//following-sibling::div//a");
    await page.click("a:text-is('Hot')");

    //Click on the Save button.
    await page.click("button[title='Save']");
    let acctSuccessMsg = await page.innerText(`div[class^='toastContent']`);
    expect(acctSuccessMsg).toContain("created")

    //Select the Status dropdown icon and choose the value as New
    await page.click("label:text-is('Status') + * button");
    await page.click("span:text-is('New')", { force: true });


await page.getByRole

    //Select the Priority dropdown icon and choose the value as ‘High’
    await page.click("//label[text()='Priority']/parent::div//button");
    await page.click("span:text-is('Medium')");

    //Select the Case Origin dropdown icon and choose the value as ‘Email
    await page.click("label:text-is('Case Origin') + * button");
    await page.click("span:text-is('Email')");

    // Fill in the Subject input field as ‘Product Return Request’ and Description input field as ‘Requesting a 
    // return for a defective product
    await page.fill("label:text-is('Subject') + * input", "Test");
    await page.fill("label:text-is('Description') + * textarea", "Testing Application");

    //Click on the Save button.
    await page.click("button[name='SaveEdit']");
    let caseSuccessMsg = await page.innerText(`div[class^='toastContent']`);
    console.log(caseSuccessMsg);
    expect(caseSuccessMsg).toContain("created")

    //Edit the Status under Details category and choose the ‘Escalated’ option from the dropdown.
    await page.waitForLoadState('load');
    await page.waitForSelector("a:text-is('Feed')");
    await page.click(`button[title="Edit Status"]`);
    await page.click("label:text-is('Status') + * button");
    await page.waitForSelector("label:text-is('Status') + * span:text-is('Escalated')", { state: 'visible' });
    await page.click("label:text-is('Status') + * span:text-is('Escalated')");

    //Click on the Save button.
    await page.click("button:text-is('Save')");
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);


    //Enter a valid data in the Share an Update input field and click on the Share button. 
    await page.click("button[title='Share an update...']", { force: true });
    await page.waitForSelector('div[data-placeholder="Share an update..."]');
    await page.click('div[data-placeholder="Share an update..."]');
    await page.fill(`div[data-placeholder="Share an update..."] p`, "Test data");
    await page.click("button:text-is('Share')");

    //Click on the dropdown icon and choose the Like on Chatter option
    await page.click("(//span[text()='Just now']//parent::a//following::a)[1]");
    await page.waitForSelector("span:text-is('Like on Chatter')");
    await page.click("span:text-is('Like on Chatter')");

    //Navigate to the Chatter tab and verify the post liked by the user
    await page.click("span:text-is('Chatter')");
    await page.waitForLoadState('load');
    



});