import test from "@playwright/test"

test(`handle alert and frame in w3School`, async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    let blockFurther = false
    await page.route('**/*', async (route) => {
        console.log(`🛰️ Intercepted: ${route.request().url()}`);
        if (blockFurther) {
            console.log(`⛔ Blocking: ${route.request().url()}`);
            await route.abort();
        } else {
            await route.continue();
        }
    });

    page.on("dialog", async (dialog) => {
        const text = 'Ajay';
        await page.waitForTimeout(5000);
        await dialog.accept(text);
        console.log('Dialog Message:', dialog.message());
    });

    const iframe = page.frameLocator('#iframeResult');
    await iframe.locator("button:has-text('Try it')").click()


})
