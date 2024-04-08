import test, { chromium } from "@playwright/test"

test(`using persistentContext`, async ({ }) => {

   // const userDataDir = "./myUserDataDir";
    const browser = await chromium.launchPersistentContext("./myUserDataDir", {
        headless: false,channel:'chrome',
        httpCredentials: {
            username: "admin",
            password: "testleaf",
            origin: "http://leafground.com:9323"
        }
    });
    const page = await browser.newPage();
    await page.goto("https://leafground.com/auth.xhtml");

    // Wait for the 'Basic Auth' button to appear and then click it
    await page.waitForSelector('span:has-text("Basic Auth")');
    await page.click('span:has-text("Basic Auth")');

    
});


test(`Persistent Context`, async () => {


    const userDataDir = "./myUserDataDir";


    //Launch a persistent context
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless:false,channel:'msedge',
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