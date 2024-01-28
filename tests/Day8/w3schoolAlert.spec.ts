import test from "@playwright/test"

test(`handle alert and frame in w3School`,async({page})=>{
    page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    page.on("dialog", async (dialog) => {
        const text = 'Ajay'; // Replace with the desired text 
        await dialog.accept(text);
        console.log('Dialog Message:', dialog.message());
    });
 
    const iframe = page.frameLocator('#iframeResult');
    await iframe.locator("button:has-text('Try it')").click()
 
    
})
