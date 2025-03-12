import test from '@playwright/test';
import { createResource, getResource } from './apiUtility';
import { faker } from '@faker-js/faker';

test(`Create a resource using access token`, async ({ context }) => {
   
    const lname = faker.person.lastName();
    const cname = faker.company.buzzNoun();
    const leadId = await createResource(context.request, lname, cname);
    test.expect(leadId).toBeTruthy(); 
    const leadDetails = await getResource(context.request);
    console.log("Lead created and validated successfully:", leadDetails);
});
