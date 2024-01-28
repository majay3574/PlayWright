import test from "@playwright/test"


test(`handling windowa frame`,async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")
const  ClickMeInsideframe=page.locator(".card").filter({hasText:" Click Me (Inside frame)"})
//const frame=page.frame({url:"https://www.leafground.com/default.xhtml"})?.click("button#Click")
const click = ClickMeInsideframe.frameLocator("iframe").locator("button#Click")
await click.click({force:true})

})


test(`handling multiple frame`,async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")
    const  ClickMeInsideframe=page.locator(".card").filter({hasText:" Click Me (Inside frame)"})
    const frame=page.frame({url:"https://www.leafground.com/page.xhtml"})
    const nestedframe= frame?.frameLocator('#frame2').locator("button#Click")
    await nestedframe?.click({force:true})
    
    
    })
    

