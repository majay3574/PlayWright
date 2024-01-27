import test from "@playwright/test"
test (`Using Keyboard action`,async({page})=>{

   await page.goto("https://www.google.co.in/")

   let input= page.locator("[title='Search']")
   await input.click()
   page.keyboard.type("Ajay")

   page.keyboard.press('Enter')
   

   await page.waitForTimeout(5000)
})