import {test as baseTest} from "@playwright/test"

export const test=baseTest.extend({loginPage:async({page},use)=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoCSR");
    await page.fill("#password","crmsfa");
    await page.click(".decorativeSubmit");
    use(page);
}})