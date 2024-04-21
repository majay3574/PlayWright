import { test, expect } from '@playwright/test';

test('Handling Nested Frames', async ({ page }) => {
  await page.goto('https://www.leafground.com/frame.xhtml');

  // Listening for dialog events
  page.on('dialog', async (dialog) => {
    const alertMessage = dialog.message();
    console.log(`The popup message: ${alertMessage}`);
    const typeOfAlert = dialog.type();
    console.log(`Type of alert: ${typeOfAlert}`);
    await dialog.accept('Michael');
  });

  await page.goto("https://www.leafground.com/frame.xhtml")
  //const  ClickMeInsideframe=page.locator(".card").filter({hasText:" Click Me (Inside frame)"})
  const frame=page.frame({url:"https://www.leafground.com/page.xhtml"})
  const nestedframe= frame!.frameLocator('#frame2').locator("button#Click")
  await nestedframe!.click({force:true})
});
