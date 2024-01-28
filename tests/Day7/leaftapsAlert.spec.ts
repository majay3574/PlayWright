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

})