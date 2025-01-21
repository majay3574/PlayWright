import{test, expect} from "@playwright/test";

test(`To test how assertion works` , async ({page}) => {

    await page.goto("https://www.leafground.com/input.xhtml");

    let nameField = page.getByPlaceholder("Babu Manickam");
    await expect( nameField).toBeEnabled();
    await nameField.fill(`Sathish`);
    await page.waitForTimeout(3000);


    let disabledTextbox = page.getByPlaceholder("Disabled");
    await expect(disabledTextbox).toBeEnabled();  
    // await disabledTextbox.fill('testvalue');
    // await page.waitForTimeout(3000);

})