import test, { chromium } from "@playwright/test"

test(`using presistentContext`, async ({ }) => {

    const myCokies = "./Cookies"
    const browser = await chromium.launchPersistentContext(myCokies, {
        headless: false,channel:'chrome',
        httpCredentials: {
            username: "admin",
            password: "testleaf",
            origin:"http://leafground.com:9323"
        }
    })
    const page = await browser.newPage()
    await page.goto("https://leafground.com/auth.xhtml")
    await page.click('span:text-is("Basic Auth")')

    await page.waitForTimeout(5000)
})

test.skip(`Persistent Context`, async () => {


    const userDataDir = "./myUserDataDir";


    //Launch a persistent context
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless:false,
        httpCredentials:{
            username: "admin",
            password: "testleaf",
            origin: "http://leafground.com:8090"
        }
    });


    const page = await context.newPage();
    await page.goto("https://leafground.com/auth.xhtml");


    await page.getByRole('button', {name:'Basic Auth'}).click();


     await page.waitForTimeout(5000);



    
})