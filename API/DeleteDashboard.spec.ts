import { test, expect } from "@playwright/test";
 
 
let accessToken: any
let inst_url: any
let account_id:any
 
 
    test.skip(`Creating a new dashboard`, async ({ page }) => {
 
        await page.goto("https://login.salesforce.com");
        await page.fill("#username", 'majay3574@gmail.com');
        await page.fill("#password", 'Ajaymichael@007')
        await page.click("#Login");
 
        //Open the App Launcher menu
        let eleAppLaunch = page.locator('button .slds-icon-waffle');
        await expect(eleAppLaunch).toBeVisible({ timeout: 150000 });
        await eleAppLaunch.click();
        await page.waitForLoadState('load');
 
        //Click the View All link text
        let viewAll = page.locator('//button[text()="View All"]');
        await expect(viewAll).toBeVisible({ timeout: 150000 });
        await viewAll.click();
 
        //Search the "Dashboards" option
        await page.locator('one-app-launcher-modal input.slds-input').fill('Dashboards');
        await page.locator("//mark[text()='Dashboards']").click();
 
        //Click the New Dashboard button
        await page.locator("//div[text()='New Dashboard']").click();
 
        await page.waitForLoadState('load');
        
        //Loacte the frame
        const dashboardFrame = page.frameLocator("[title='dashboard']");
        
        //Fill in the input field *** Name ***
        await dashboardFrame.locator("#dashboardNameInput").fill("Ajay Michael");
 
        //Fill in the input field  *** Description ***
        await dashboardFrame.locator("#dashboardDescriptionInput").fill("Filling with some text in description");
 
        // Click Create Button
        await dashboardFrame.locator("#submitBtn").click();
 
        await page.waitForLoadState('load');
       
        await page.frameLocator("[title='dashboard']").locator("button:text-is('Save')").click()
        await page.waitForLoadState('load');
        const dashboardName = await dashboardFrame.locator("//div[contains(@class,'slds-has-divider_bottom')]/span").innerText();
 
        console.log(dashboardName);
        await page.waitForTimeout(5000)
 
    })
 
 
 
test('Get Access token from Salesforce', async ({ request }) => {
 
 
    const url = "https://login.salesforce.com/services/oauth2/token";
 
    const formdata = new URLSearchParams();
    formdata.append('grant_type', 'password');
    formdata.append('client_id', '3MVG9fe4g9fhX0E5hbGhek7Fp9ijXU30Q2eWnfUpEFvJ1mkEJCNcHmE01luXmSbgA73HgGRy5Ouj3c1IE2SLZ');
    formdata.append('client_secret', '0184AC8597512459A6BF96E1F46CB699EAEA1CEC34212BDDF383F28F99CCB376');
    formdata.append('username', 'majay3574@gmail.com');
    formdata.append('password', 'Ajaymichael@007');
 
    const generatingToken = await request.post(url, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive",
        },
        data: formdata.toString(),
    });
 
 
 
    const generatingTokenJSON = await generatingToken.json()
    console.log(generatingTokenJSON)
    accessToken = generatingTokenJSON.access_token
    inst_url = generatingTokenJSON.instance_url
    console.log("Bearer " + accessToken)
    console.log(inst_url)
});
 
test(`get the account from dashboard`,async({request})=>{
 
 
let get_url=`${inst_url}/services/data/v36.0/sobjects/Dashboard/`
 
let get_dasboard= await request.get(get_url,{
    headers:{
        "Authorization":`Bearer ${accessToken}`
       
    }
})
  let dashboard_response=await get_dasboard.json()
  console.log(dashboard_response)
  account_id =dashboard_response.recentItems[0].Id
  console.log(account_id)
 
})
 
 
test.skip(`Delete the account from dashboard`,async({request})=>{
 
 
    let delete_url=`${inst_url}/services/data/v36.0/sobjects/Dashboard/${account_id}`
   
    let delete_dasboard= await request.delete(delete_url,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
           
        }
    })
      let status=delete_dasboard.status()
      expect(204).toBe(status)
   
    })