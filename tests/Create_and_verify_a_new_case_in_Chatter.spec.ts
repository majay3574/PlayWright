//Testcase : Chatter in SalesForce
import { test } from "@playwright/test";


test("Create and verify a new case in Chatter", async ({ page }) => {



    await page.goto("https://login.salesforce.com");
    await page.locator("input[id='username'] ").fill("majay3574@gmail.com");
    await page.locator("input[id='password'] ").fill("Ajaymichael@321");
    await page.locator("input[id='Login']").click();

    // Wait for the page to load as it take more time for me , Timeout does not helped in my case.
    await page.waitForLoadState('load');
    await page.waitForTimeout(6000)
    await page.locator("//div[@class='slds-icon-waffle']").click();
    await page.locator("//button[text()='View All']").click();

    // Wait for the page to load as it take more time
    await page.waitForLoadState('load');
    await page.getByPlaceholder("Search apps or items...").fill("Service");
    await page.locator("//mark[text()='Service']").first().click();

    //await page.locator("//span[text()='Cases']").click();
    //await page.locator("//span[contains(text(),'New Case')]").click();
    //await page.locator("(//one-app-nav-bar-menu-button[contains(@class,'slds-dropdown-trigger')])").nth(2).click();


    // Click on Cases and create a new case

    await page.locator("(//span[text()='Cases']//following::*[local-name()='svg'])[1]").click();
    await page.waitForSelector("//span[contains(text(),'New Case')]");
    await page.locator("//span[contains(text(),'New Case')]").click();
    await page.getByPlaceholder("Search Contacts...").click();
    await page.locator("//span[contains(text(),'New Contact')]").click();
    await page.locator("//div[contains(@class,'salutation')] //a[text()='--None--']").click();
    await page.locator("//a[@title='Mrs.']").click();
    await page.getByPlaceholder("First Name").fill("Vidya");
    await page.getByPlaceholder("Last Name").fill("Test1");
    await page.locator("//span[text()='Save']").click();

    // Verify the "contact was created "

    const outputContact = await page.locator(" //span[contains( @class,'toastMessage')]").innerText();
    console.log(outputContact);
    //expect(outputContact).toContain("created")

    // Search Accounts...

    await page.getByPlaceholder("Search Accounts...").nth(0).click();
    await page.locator("//span[contains(text(),'New Account')]").click();

    //input[contains(@class,'input')]/preceding-sibling::label/span[contains(text(),'Account Name')]

    // Enter Account Name & Account Number

    await page.locator("(//input[contains(@class,'input')])[10]").fill("Vidya Jayaraman");
    await page.locator("(//input[contains(@class,'input')])[14]").fill("112233445566");
    await page.locator("//button[@title='Save']").click();

    // To verify Account got created or Not.

    const outputAccount = await page.locator(" //span[contains( @class,'toastMessage')]").innerText();
    console.log(outputAccount);
    //expect(outputAccount).toContain("created");

    // To select status, priority,case origin

    await page.locator("//label[contains(text(),'Status')]/following-sibling::div").click();
    await page.locator("//span[@title='New']").click();

    await page.locator("//label[contains(text(),'Priority')]/following-sibling::div").click();
    await page.locator("//span[@title='High']").click();

    await page.locator("//label[contains(text(),'Case Origin')]/following-sibling::div").click();
    await page.locator("//span[@title='Email']").click();

    await page.locator("(//label[text()='Subject']/following::input)[1]").fill("Playwright Test case");
    await page.locator("//button[text()='Save']").click();

    // To verify the case got created or not

    const outputAccUpdate = await page.locator(" //span[contains( @class,'toastMessage')]").innerText();
    console.log(outputAccUpdate);
    //expect(outputAccUpdate).toContain("created")

    // To Edit Case Details

    await page.locator("//button[contains(text(),'Edit')]").click();
    await page.locator("//label[contains(text(),'Status')]/following-sibling::div").click();
    await page.locator("//span[@title='Escalated']").click();
    await page.locator("//button[text()='Save']").click();
    const outputCase = await page.locator(" //span[contains( @class,'toastMessage')]").innerText();
    console.log(outputCase);
    //expect(outputCase).toContain("saved")


    //Share an Update & Like the chatter

    //await page.locator("//span[text()='Post']").click();
    //await page.locator("//button[contains(@title,'update')]").click();
    await page.waitForLoadState('load')
    await page.waitForSelector("//button[@title='Share an update...']")
    await page.locator("//button[@title='Share an update...']").hover();
    await page.locator("//button[@title='Share an update...']").click({ force: true });

    // await page.waitForSelector("//div[@data-placeholder='Share an update...']/following::p[1]");    
    await page.locator("//div[@title='Share an update...'']/following::p").nth(0).fill("test");
    await page.click("//button[contains(text(),'Share')]");
})