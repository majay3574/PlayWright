import test from "@playwright/test"

test(`code gen`,async({page})=>{
   await page.goto('https://www.google.com/search?q=leaftaps&oq=leaftaps&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM4ODBqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
   await page.getByRole('link', { name: 'Leaftaps - TestLeaf' }).click();
   await page.getByLabel('Username').click();
   await page.getByLabel('Username').fill('demosalesmanager');
   await page.getByLabel('Password').click();
   await page.getByLabel('Password').fill('crmsfa');
   await page.getByRole('button', { name: 'Login' }).click();
   await page.goto('http://leaftaps.com/crmsfa/control/contactsMain');

})