import test from "@playwright/test"


test(`handling alert`,async({page})=>{

    page.goto("https://www.leafground.com/alert.xhtml")

    page.on('dialog',async dialog =>{
        const alertmessage=dialog.message()
        console.log(`the pop up message ${alertmessage}`)
        const typeofAlert =dialog.type()
        console.log(`type of alert ${typeofAlert}`)
        dialog.accept("Michael")
    })

    const promptalert = page.locator(".card").filter({hasText:" Alert (Prompt Dialog)"})
    await promptalert.locator("span:text-is('Show')").click({force:true})
    await page.waitForTimeout(2000)
    const confirmAlert = page.locator(".card").filter({hasText:" Alert (Confirm Dialog)"})
    await confirmAlert.locator("span:text-is('Show')").click({force:true})
await page.waitForTimeout(2000)
    const SimpleDialog = page.locator(".card").filter({hasText:" Alert (Simple Dialog)"})
    await SimpleDialog.locator("span:text-is('Show')").nth(0).click({force:true})


})