import { test, expect } from '@playwright/test';
import {faker} from "@faker-js/faker"
let saving :any


test('', async ({ page, context }) => {
 
  await page.goto("https://businesscentral.dynamics.com/")
  await page.locator("[id^='hero-basic_access-your-dynamics-']").filter({hasText:"Sign in"}).click()
 // await page.click("#hero-basic_access-your-dynamics-365-business-central-account_CTA-1")

  const microsoftpage = await context.waitForEvent('page')
  console.log(await microsoftpage.title())
  await page.close()
 

    //await expect(microsoftpage.()).toHaveURL("https://login.microsoftonline.com/common/oauth2/authorize?")
    await microsoftpage.fill('[name="loginfmt"]', 'ajaymichael.sundarkani@playwrightins.onmicrosoft.com')
  await microsoftpage.click("[class^='win-button button_primary']")

  await microsoftpage.fill('[name="passwd"]', 'Poz096381')
  await microsoftpage.click('[class^="win-button button_primary"]')
  await microsoftpage.click('[class^="win-button button_primary"]')

  const spinner = microsoftpage.locator("[class='spinner_designer spinner_transition spinner_container']")
  await expect(spinner).toHaveCount(0)
  await microsoftpage.waitForLoadState('load')
  const frame = (".designer-client-frame")
  //await microsoftpage.frameLocator(frmae).waitForSelector("span:text-is('CRONUS IN')")
  const headerClass = microsoftpage.frameLocator(frame).locator(".caption--MD9MNu_XGLgkd4_Uxo_p")
  await headerClass.locator("span:text-is('Finance')").click();

  const insiderClass = microsoftpage.frameLocator(frame).locator("[class^='ms-Button-textContainer']")
  await insiderClass.locator("span:text-is('General Journals')").click();
  await microsoftpage.waitForLoadState('load')
  const newbutton = microsoftpage.frameLocator(frame).locator("[title='Create a new entry.']")
  await newbutton.locator("span:text-is('New')").click()

  // const newbutton2 = microsoftpage.frameLocator(frame).locator("[class$='thm-bgcolor--minflat'] [title='Create a new entry.']")
  // await newbutton2.locator("span:text-is('New')").click()

  await microsoftpage.frameLocator(frame)
    .locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(3)>input')
    .fill(faker.date.month(),{ force: true })
  await microsoftpage.frameLocator(frame)
    .locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(5)>input')
    .fill(faker.commerce.productDescription(), { force: true })
  await microsoftpage.frameLocator(frame)
    .locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(6)>select')
    .click({ force: true })
  await microsoftpage.frameLocator(frame)
    .locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(6)>select')
    .selectOption({ index: 3 })

 
  saving =microsoftpage.frameLocator(frame).locator("span[title='Your data is saved now and the page can be closed.']")
  expect(saving).toHaveCount(1)
  

  await microsoftpage.frameLocator(frame)
    .locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(7)>input')
    .click({ force: true })

  const BalAccountValues = ["World Wide Bank", "Giro Bank", "New Bank of London", "World Wide Bank"];
  const randomIndex = Math.floor(Math.random() * BalAccountValues.length);
  const randomValue = BalAccountValues[randomIndex];
  console.log(randomValue)

  await microsoftpage.frameLocator(frame).locator("a:text-is('Select from full list')").click({ force: true })
  await microsoftpage.frameLocator(frame).locator(`span[title='${randomValue}']`).click({ force: true })
  await microsoftpage.frameLocator(frame).locator('button>span:text-is("OK")').click()
  await microsoftpage.frameLocator(frame)
    .locator('table[class^="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table"]>tbody>tr:nth-child(1)>td:nth-child(8)>input')
    .click({ force: true })



  const locationCodes = ["Outsourced Logistics", "Main Warehouse", "Blue Warehouse", "East Warehouse"]
  const codesIndex = Math.floor(Math.random() * locationCodes.length);
  const codeValue = locationCodes[codesIndex];
  console.log(codeValue)

  await microsoftpage.frameLocator(frame).locator(`span[title='${codeValue}']`).click({ force: true })
  await microsoftpage.frameLocator(frame).locator(`button[title="Back"]>span>i`).click({ force: true })
  


});
