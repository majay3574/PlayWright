import {   test } from "@playwright/test";
 
test.only('visibility', async ({ page }) => {

    await page.getByText('New',{exact:true})
//li[data-item-value='Miami'] div>div+div[Class^='ui-chkbox-box']

})