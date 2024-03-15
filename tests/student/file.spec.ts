import {test} from '@playwright/test'
import path from 'path';


test(`Reading data from json file `, async({page})=>{


 await page.goto("https://login.salesforce.com/");
 await page.fill("#username","majay3574@gmail.com");
 await page.fill("#password","Ajaymichael@007");
 await page.click('[value="Log In"]')
 await page.waitForTimeout(3000);
  //Clicking on AppLauncher
  await page.waitForLoadState('load')
  await page.click(".slds-icon-waffle");
  await page.locator('//button[text()="View All"]').click()
 //searching for marketing tab
  await page.getByPlaceholder("Search apps or items...").fill("Marketing");
  await page.getByPlaceholder("Search apps or items...").focus()
  await page.keyboard.press("Enter");
  await page.click('//mark[text()="Marketing"]',{timeout:2000});
  await page.waitForLoadState('load')
  await page.locator('//span[text()="Contacts"]').click()

  //creating to new contact
  await page.click('[data-id="Contact"] >a +* svg')
  
  await page.click("//span[text()='New Contact']")
  await page.waitForLoadState('load')
  await page.click('button[name="salutation"]');
  await page.getByTitle('Ms.').click();
  //await page.getByPlaceholder("First Name").fill('kayathri');
  await page.getByPlaceholder("Last Name").fill('pasuran');
  await page.click("button[name='SaveEdit']");
  console.log( await page.getByRole("alertdialog").innerText());
  const pathvalue = "C:/Users/AjayMichael/PlayWright/testleaf.jpg";

  await page.setInputFiles("input[type='file']", pathvalue);
  

await page.waitForTimeout(10000)


})