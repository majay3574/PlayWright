import { expect, request, test } from "@playwright/test";
import create from "./Data/firstdata.json"

let accessToken: any
let inst_url: any
let lead_id: any

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


test(`POST - Create new Lead`, async ({ request }) => {


    let Create_Lead_url = `${inst_url}/services/data/v59.0/sobjects/lead`
    const create_lead = await request.post(Create_Lead_url, {
        headers: {
            "Connection": "keep-alive",
            "Authorization": `Bearer ${accessToken}`
        },
        data: create
    })
    const created_lead_response = await create_lead.json()
    console.log(created_lead_response)
    lead_id = created_lead_response.id
    console.log(lead_id)

})


test(`Update the lead account`, async ({ request }) => {


    let patch_lead_id = await request.patch(`${inst_url}/services/data/v59.0/sobjects/lead/${lead_id}`, {
        headers: {
            "Connection": "keep-alive",
            "Authorization": `Bearer ${accessToken}`
        },
        data: {
            "FirstName": "Ajay",
            "Title": "SDET",
            "Street": "Fox Street",
            "City": "Ninjutsu",
            "State": "Uzumaki",
            "PostalCode": "2000",
            "Country": "Ninja World",
            "MobilePhone": "8428543434",
            "Email": "majay3574@gmail.com",
            "Website": "www.ninjaworld.com"
        }
    })
    let patchStatus = patch_lead_id.status();
    console.log(patchStatus)


})

test(`Delete the lead account`, async ({ request }) => {

    let delete_lead_id = await request.delete(`${inst_url}/services/data/v59.0/sobjects/lead/${lead_id}`, {
        headers: {
            "Connection": "keep-alive",
            "Authorization": `Bearer ${accessToken}`
        }
    })

    let deleteStatus = delete_lead_id.status();
    console.log(deleteStatus)
})