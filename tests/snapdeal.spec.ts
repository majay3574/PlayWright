/* 1. Launch https://www.snapdeal.com/
2. Go to Mens Fashion(mouse hover)
3. Go to Sports Shoes(click)
4. Get the count of the sports shoes
5. Click Training shoes
6. Mouse hover on First resulting Shoe
7.Click Quick view
8.Take Screenshot */

import test from "@playwright/test"

test(`Launching Snapdeal and click the Quick view feature`,async({page})=>{
  await page.goto("https://www.snapdeal.com/")
  await page.waitForLoadState('load')
  await page.hover('span:text-is("Men\'s Fashion")') 
  await page.click("span:text-is('Sports Shoes')")
  const sportsShoes=await page.locator('//div[text()="Sports Shoes for Men"]/following-sibling::div').innerText()
console.log(sportsShoes)

await page.click("div:text-is('Training Shoes')")
const firstShoe =page.locator("div[class$='favDp product-tuple-listing js-tuple ']").first();
await firstShoe.hover();
const QuickViewButton =page.locator("div[class='clearfix row-disc']").first()
await QuickViewButton.filter({hasText:"Quick View"}).click()
await page.screenshot({ path: 'expected.png' });
})