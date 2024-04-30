import { expect, request, test } from "@playwright/test";
import multi from "./Data/multidata.json"
import account from "./Data/account.json"
let accessToken: any
let inst_url: any

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
    })
    const generatingTokenJSON = await generatingToken.json()
    console.log(generatingTokenJSON)
    accessToken = generatingTokenJSON.access_token
    inst_url = generatingTokenJSON.instance_url
    console.log("Bearer " + accessToken)
    console.log(inst_url)
})

multi.forEach(element => {
    test.skip(`deleting opportunity with id ${element.id}`, async ({ request }) => {
        const oppurl = "https://qeagle8-dev-ed.develop.my.salesforce.com/services/data/v36.0/sobjects/Opportunity/" + element.id;
        console.log(oppurl)
        let deleteTheOpportunity = await request.delete(oppurl, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Connection": "keep-alive",
                "Authorization": `Bearer ${accessToken}`
            }
        });

        let getResponse = deleteTheOpportunity.status();
        console.log(getResponse)

    });
});

test.skip(`deleting opportunity with id`, async ({ request }) => {
    const oppurl = `${inst_url}/services/data/v36.0/sobjects/Opportunity/0065g00000cEbqXAAS`;

    let deleteTheOpportunity = await request.delete(oppurl, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Connection": "keep-alive",
            "Authorization": `Bearer ${accessToken}`
        }
    });

    let getResponse = deleteTheOpportunity.status();
    console.log(getResponse)
    expect(getResponse).toBe(204);
});

test(`getting account VAlue `, async ({request}) => {
    const opppurl = "https://qeagle8-dev-ed.develop.my.salesforce.com/services/data/v36.0/sobjects/Account"
    let gettheAccounts = await request.get(opppurl, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Connection": "keep-alive",
            "Authorization": `Bearer ${accessToken}`
        }
    })

let AccountResponse= gettheAccounts.json()
console.log(AccountResponse)
// for(let i=0;i<18;i++){
// let gottenId:any= AccountResponse.recentItems[i].Id;
// let idArray = []; 
// idArray.push(gottenId); 
// console.log(idArray); 
//}



})

account.forEach(accounts => {
    test.skip(`deleting opportunity with id ${accounts.id}`, async ({ request }) => {
        const oppurl = "https://qeagle8-dev-ed.develop.my.salesforce.com/services/data/v36.0/sobjects/Account/" + accounts.id;
        console.log(oppurl)
        let deleteTheAccounts = await request.delete(oppurl, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Connection": "keep-alive",
                "Authorization": `Bearer ${accessToken}`
            }
        });

        let getResponse = deleteTheAccounts.status();
        console.log(getResponse)

    });
});