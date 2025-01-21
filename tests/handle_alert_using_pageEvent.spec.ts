import test from "@playwright/test"

test(`handling alert`,async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")

    page.on('dialog', async dialog => {
        console.log( dialog.message())
        await dialog.accept("Ajay");
      });
    
    let alert_class= page.locator(".card").filter({hasText:" Alert (Prompt Dialog)"})
    await alert_class.locator("button").click()
    // await page.waitForTimeout(5000)
 
})