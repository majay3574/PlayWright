import test from "@playwright/test";
import { json } from "stream/consumers";


let AccessToken: string;
test.beforeAll(`Get Access Tokken`, async ({ request }) => {
    let getAccessTokken = await request.post('https://dummyjson.com/auth/login', {
        data: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass',
        }), headers: { 'Content-Type': 'application/json' }
    })
    let response = await getAccessTokken.json()
    console.log(response);
    console.log(getAccessTokken.status());

    AccessToken = response.accessToken

})
test(`API Request using post call`, async ({ request }) => {

    let getUser = await request.get('https://dummyjson.com/auth/me', {
        headers: {
            "Authorization": `Bearer ${AccessToken}`,
            'Content-Type': 'application/json'
        }
    })
    console.log(getUser.status());
    let response = await getUser.json()
    let serilizedDATA = JSON.stringify(response)
    console.log(serilizedDATA);
    if (response.company.department == "Engineering") {
        console.log("Retrived data is exactly same");
    } else {
        console.error("Retrived data has a issue");
    }

})