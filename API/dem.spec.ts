import {chromium, expect, test} from '@playwright/test'



let accessToken: any;
let inst_url: any;
let dashboardId:any;




test('Get Access token from Salesforce', async ({ request }) => {

    const clientId = '3MVG9fe4g9fhX0E5hbGhek7Fp9ijXU30Q2eWnfUpEFvJ1mkEJCNcHmE01luXmSbgA73HgGRy5Ouj3c1IE2SLZ';
    const clientSecret = '0184AC8597512459A6BF96E1F46CB699EAEA1CEC34212BDDF383F28F99CCB376';
    const username = 'majay3574@gmail.com';
    const password = 'Ajaymichael@8428';


    const url = "https://login.salesforce.com/services/oauth2/token";

    const generatingToken = await request.post(url, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive",
        },
        form: {
            grant_type: 'password',
            client_id: clientId,
            client_secret: clientSecret,
            username: username,
            password: password
        },
    });



    const generatingTokenJSON = await generatingToken.json()
    console.log(generatingTokenJSON)
    accessToken = generatingTokenJSON.access_token
    inst_url = generatingTokenJSON.instance_url
    console.log("Bearer " + accessToken)
    console.log(inst_url)
});

test(`TC001_Verify Dashboard`, async ({request}) => {

const dashboard = await request.get(`${inst_url}/services/data/v36.0/sobjects/Dashboard`,
{
    headers:{
        "Authorization": "Bearer "+accessToken,
        "Connection" : "keep-alive"
    }
})
const dashboard_response = await dashboard.json();
console.log(`Dashboard response is--${dashboard_response}`);   
dashboardId=dashboard_response.recentItems[0].Id;
console.log(`Recent created Dashboard Id ${dashboardId}`);
console.log(`Status code is ${dashboard.status()}`);
expect(dashboard.status()).toBe(200); 

})

test(`TC_002_Delete The Created Dashboard`, async ({request}) => {

    const dashboardrea = await request.delete(`${inst_url}/services/data/v36.0/sobjects/Dashboard/${dashboardId}` ,
    {
        headers:{
            "Authorization": "Bearer "+accessToken,
            "Connection" : "keep-alive"
        }
    })
    let dashboard_response = await dashboardrea.json();
    console.log(dashboardrea);   
    
    console.log(`Status code is ${dashboardrea.status()}`);
    //expect(dashboard.statusText()).toBe('No Content'); 
    
    })