import { APIRequestContext } from "@playwright/test";

let leadId: string | undefined;

export async function generateToken(request: APIRequestContext) {
    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive",
        },
        form: {
            "grant_type": "password",
            "client_id": "3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
            "client_secret": "149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
            "username": "vidyar@testleaf.com",
            "password": "Sales@123",
        },
    });

    const resBody = await response.json();
    return {
        acToken: resBody.access_token,
        tokenType: resBody.token_type,
        insUrl: resBody.instance_url,
    };
}

export async function createResource(request: APIRequestContext, lname: string, cname: string) {
    const token = await generateToken(request); // Generate token once and reuse
    const response = await request.post(`${token.insUrl}/services/data/v62.0/sobjects/Lead`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.tokenType} ${token.acToken}`,
        },
        data: {
            "LastName": lname,
            "Company": cname,
        },
    });

    const resBody = await response.json();
    leadId = resBody.id;
    console.log("Created Lead ID:", leadId);
    return leadId;
}

export async function getResource(request: APIRequestContext) {
    if (!leadId) {
        throw new Error("Lead ID is undefined. Please create a resource first.");
    }

    const token = await generateToken(request); 
    const response = await request.get(`${token.insUrl}/services/data/v62.0/sobjects/Lead/${leadId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.tokenType} ${token.acToken}`,
        },
    });

    const resBody = await response.json();
    console.log("Lead Details:", resBody);

    const lastname = resBody.LastName;
    console.log("Last Name:", lastname);
    return lastname;
}
