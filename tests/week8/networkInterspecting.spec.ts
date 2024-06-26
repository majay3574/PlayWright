import { test } from "@playwright/test";

test.describe(`Intercepting the API`,async()=>{

    test(`Login to salesforce`,async({page})=>{

        page.route("**/aura?preloadActions", async (route, request) => {

            if(request.method() === 'POST'){
                console.log(request.url());
                console.log(await request.allHeaders());
                const response = await request.response();
                // console.log(response)
                const bodyContents = await response?.body();
                console.log(bodyContents)

            } else{

                route.continue();
            }
            
        })        
        await page.goto("https://login.salesforce.com/");
        await page.fill("#username","majay3574@gmail.com");
        await page.fill("#password","Ajaymichael@8428")
        await page.click("#Login")
        
        const appLauncherLocator = page.locator(".slds-icon-waffle")

        await appLauncherLocator.click()

        const viewAllLocator = page.getByLabel("View All Applications")
        await viewAllLocator.click()
    })
})