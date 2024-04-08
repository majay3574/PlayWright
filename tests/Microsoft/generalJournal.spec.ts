import { test, expect } from '@playwright/test';
import  {faker}  from "@faker-js/faker";
import user from "./Data/userdata.json"
//import generator from "./randomGeneratoe"


let savingIndicator: any;
const BalAccountValues = [ "Giro Bank", "New Bank of London"];
const dummy = ["Outsourced Logistics", "Main Warehouse", "Blue Warehouse", "East Warehouse"];

function randomGenerator(dataEmulator: string[]): string {
    const randomIndex = Math.floor(Math.random() * dataEmulator.length);
    const randomValue = dataEmulator[randomIndex];
    return randomValue;
}

let ram1: any = randomGenerator(BalAccountValues);
let ram2: any = randomGenerator(dummy);


test('Create General Journal Entry', async ({ page, context }) => {
    // Navigate to the Dynamics Business Central login page
    await page.goto("https://businesscentral.dynamics.com/");
    await page.locator("[id^='hero-basic_access-your-dynamics-']").filter({ hasText: "Sign in" }).click();

    // Wait for the Microsoft login page
    const microsoftPage = await context.waitForEvent('page');
    console.log(await microsoftPage.title());
    await page.close();

    // Fill in Microsoft login form and submit
    await microsoftPage.fill('[name="loginfmt"]', user.username);
    await microsoftPage.click("[class^='win-button button_primary']");

    // Fill in password and submit
    await microsoftPage.fill('[name="passwd"]', user.password);
    await microsoftPage.click('[class^="win-button button_primary"]');
    await microsoftPage.click('[class^="win-button button_primary"]');

    // Wait for the spinner to disappear
    const spinner = microsoftPage.locator("[class='spinner_designer spinner_transition spinner_container']");
    await expect(spinner).toHaveCount(0);
    await microsoftPage.waitForLoadState('load');

    // Navigate to the Finance section
    const frame = (".designer-client-frame");
    const financeHeader = microsoftPage.frameLocator(frame).locator(".caption--MD9MNu_XGLgkd4_Uxo_p");
    await financeHeader.locator("span:text-is('Finance')").click();

    // Navigate to General Journals
    const generalJournals = microsoftPage.frameLocator(frame).locator("[class^='ms-Button-textContainer']");
    await generalJournals.locator("span:text-is('General Journals')").click();
    await microsoftPage.waitForLoadState('load');

    // Click on 'New' to create a new entry
    const newButton = microsoftPage.frameLocator(frame).locator("[title='Create a new entry.']");
    await newButton.locator("span:text-is('New')").click();

    // Fill in data for the new entry
    const monthInput = microsoftPage.frameLocator(frame).locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(3)>input');
    await monthInput.fill(faker.date.month(), { force: true });

    const productDescriptionInput = microsoftPage.frameLocator(frame).locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(5)>input');
    await productDescriptionInput.fill(faker.commerce.productDescription(), { force: true });

    const selectElement = microsoftPage.frameLocator(frame).locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(6)>select');
    await selectElement.click({ force: true });
    await selectElement.selectOption({ index: 3 });

    // Check if data is saved
    savingIndicator = microsoftPage.frameLocator(frame).locator("span[title='Your data is saved now and the page can be closed.']");
    expect(savingIndicator).toHaveCount(1);

    // Click on the location input field
    await microsoftPage.frameLocator(frame).locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(7)>input').click({ force: true });

    // Select a random balance account value
   

    await microsoftPage.frameLocator(frame).locator("a:text-is('Select from full list')").click({ force: true });
    await microsoftPage.frameLocator(frame).locator(`span[title='${ram1}']`).click({ force: true });
    await microsoftPage.frameLocator(frame).locator('button>span:text-is("OK")').click();

    // Click on the next input field
    await microsoftPage.frameLocator(frame).locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(8)>input').click({ force: true });

    // Select a random location code
    const locationCodes = ["Outsourced Logistics", "Main Warehouse", "Blue Warehouse", "East Warehouse"];
    const codesIndex = Math.floor(Math.random() * locationCodes.length);
    const codeValue = locationCodes[codesIndex];
    console.log(codeValue);

    await microsoftPage.frameLocator(frame).locator(`span[title='${ram2}']`).click({ force: true });
    await microsoftPage.frameLocator(frame).locator(`button[title="Back"]>span>i`).click({ force: true });
});
