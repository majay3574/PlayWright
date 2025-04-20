/* Introduction
"Hello everyone, today I’ll be explaining how to bypass a UI login flow in Salesforce using Playwright's request interception feature. Instead of interacting with the UI elements manually, we will intercept the network request, modify the credentials, and authenticate directly through an API request."

Why Use Request Interception?
"In UI automation, login is a repetitive and time-consuming step. By intercepting network requests, we can:
✅ Speed up test execution by avoiding UI interactions.
✅ Ensure test stability by reducing dependency on page elements.
✅ Simulate real-world scenarios by modifying API requests dynamically.

Playwright provides three key methods for handling network requests:
1️⃣ route.fulfill() - Mocks API responses without making real network calls.
2️⃣ route.continue() - Modifies and forwards a request while allowing it to proceed.
3️⃣ route.abort() - Blocks a request from being made, useful for blocking third-party resources like ads or analytics scripts."

Test Scenario
"In this test case, we are automating the login process for Salesforce:
1️⃣ Intercept the request to the Salesforce login page.
2️⃣ Modify the request by injecting login credentials.
3️⃣ Continue the request to authenticate via API.
4️⃣ Navigate to the Salesforce home page and verify the login success."

Code Walkthrough
"Now, let’s look at the implementation step by step:

🔹 Step 1: Intercepting the Request

We use page.route() to intercept the request to https://login.salesforce.com.

We create a URL-encoded form with the username and password.

We then modify the request by appending the login credentials before continuing it.

🔹 Step 2: Navigating to Salesforce

Since authentication is already handled via API, we simply navigate to the login page.

🔹 Step 3: Validating Login Success

We wait for the page to load.

Then, we fetch the page title and check if it matches "Home | Salesforce", which indicates a successful login." */


import test from "@playwright/test";

/* ✅ Use fulfill() when you want to mock API responses and avoid real network calls.
✅ Use continue() when you want to modify a request but still let it go through.
✅ Use abort() when you want to block specific requests from being made. */

test('ui_bypass_with_api', async ({ page }) => {

    // Intercepting the request to Salesforce login page and modifying the request data
    await page.route('https://login.salesforce.com', async (route) => {

        //right now iam passing right or correct  user name let as check what happens
        // Creating URL encoded form data with username and password
        const formData = new URLSearchParams();
        formData.append('un', 'majay3574@gmail.com');
        formData.append('pw', 'Ajaymichael@007');

        // Continuing the intercepted request with modified login credentials
        await route.continue({
            method: 'POST', // Sending the request as a POST request
            headers: {
                ...route.request().headers(), // Retaining original headers
                'Content-Type': 'application/x-www-form-urlencoded', // Setting content type
            },
            postData: formData.toString(), // Attaching login credentials as POST data
        });
    });

    // Navigating to the Salesforce login page (which is already bypassed by API request)
    await page.goto("https://login.salesforce.com");

    // The following manual login steps are commented out as API-based login is used
    /* await page.fill("#username", 'majay3574@gmail.com');
    await page.fill("#password", 'Ajaymichael@8428');
    await page.click("#Login"); */

    // Waiting for 5 seconds to let the page load after login
    await page.waitForTimeout(5000);

    // Printing the title of the page to verify if login was successful
    const actualTitle = await page.title();
    if (actualTitle === "Home | Salesforce") {
        console.log("The Expected Title is:", actualTitle);
    } else {
        console.error("Wrong Page! The actual title is:", actualTitle);
    }

});
