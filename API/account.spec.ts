import fs from "fs"
import { expect, request, test } from "@playwright/test";
let accessToken: any
let inst_url: any
import data from "./data.json"

test('Get Access token from Salesforce', async ({ request }) => {

    const clientId = '3MVG9fe4g9fhX0E5hbGhek7Fp9ijXU30Q2eWnfUpEFvJ1mkEJCNcHmE01luXmSbgA73HgGRy5Ouj3c1IE2SLZ';
    const clientSecret = '0184AC8597512459A6BF96E1F46CB699EAEA1CEC34212BDDF383F28F99CCB376';
    const username = 'majay3574@gmail.com';
    const password = 'Ajaymichael@007';


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

test(`getting account VAlue `, async ({ request }) => {
    const opppurl = "https://qeagle8-dev-ed.develop.my.salesforce.com/services/data/v36.0/sobjects/Opportunity"
    let gettheAccounts = await request.get(opppurl, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Connection": "keep-alive",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    let AccountResponse: any = await gettheAccounts.json(); 
    console.log(AccountResponse);

    let idArray: string[] = [];
    
    for (let i = 0; i < AccountResponse.recentItems.length; i++) {
        idArray.push(AccountResponse.recentItems[i].Id);
    }
console.log(idArray)
    let formattedIds: { Id: string }[] = [];

    for (let i = 0; i < idArray.length; i++) {
        formattedIds.push({ Id: idArray[i] });
    }
console.log(formattedIds)
    // const jsonData = JSON.stringify(formattedIds);
    // console.log(jsonData);
    fs.writeFileSync('data.json', JSON.stringify(formattedIds));
    


})

data.forEach(accounts => {
    test(`deleting opportunity with id ${accounts.Id}`, async ({ request }) => {
        const oppurl = "https://qeagle8-dev-ed.develop.my.salesforce.com/services/data/v36.0/sobjects/Opportunity/" + accounts.Id;
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
})