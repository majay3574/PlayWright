import { test } from "@playwright/test";

test(`Retrieve cookie from Salesforce`, async ({ page }) => {

  await page.goto("https://login.salesforce.com/");
  await page.fill("#username", "majay3574@gmail.com");
  await page.fill("#password", "Ajaymichael@123");
  await page.click("#Login");
  await page.waitForTimeout(10000);

 
  const cookies = await page.context().cookies();
  //console.log(cookies);
  const sidCookie = cookies.find(cookie => cookie.name === 'sid');
  const sidValue = sidCookie ? sidCookie.value : null;
  
  console.log(sidValue);
  
});
