import { test } from './customHooks';

test("To launch a browser", async({retrypage}) => {
    
          
    await retrypage.goto("http://leaftaps.com/opentaps/control/main");
    
    retrypage.locator("#username").fill("DemoSalesManager");
    retrypage.locator(".password").fill("crmsfa");
    retrypage.click("//input[@type='submit']");

    const currentUrl = retrypage.url();
    console.log(`The loaded url is ${currentUrl}`);   
    
})
