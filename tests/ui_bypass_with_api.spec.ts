import test from "@playwright/test";
test('ui_bypass_with_api', async ({ page }) => {

    await page.route('https://login.salesforce.com', async (route) => {
        const formData = new URLSearchParams();
        formData.append('un', 'majay3574@gmail.com');
        formData.append('pw', 'Ajaymichael@007');
        await route.continue({
            method: 'POST',
            headers: {
                ...route.request().headers(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            postData: formData.toString(),
        });
    });

    await page.goto("https://login.salesforce.com");
    /* await page.fill("#username", 'majay3574@gmail.com');
    await page.fill("#password", 'Ajaymichael@8428')
    await page.click("#Login"); */
    await page.waitForTimeout(5000);
    console.log( await page.title());
    
})