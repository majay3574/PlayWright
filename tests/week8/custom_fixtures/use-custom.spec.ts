import { test } from './custom-fixtures';

test("To launch a browser and assert new window text", async({maximizedPage}) => {
    
    await maximizedPage.locator(".password").fill("crmsfa");
    await maximizedPage.waitForTimeout(5000);
    
    
})
