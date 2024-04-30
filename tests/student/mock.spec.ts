import test from "@playwright/test"

test("mocks a fruit and doesn't call api", async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async route => {
      const json = [{ name: 'Strawberry', id: 21 }];
      await route.fulfill({ json });
    });
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');
  
    // Assert that the Strawberry fruit is visible
    // Retrieve the text element with 'Strawberry' text
  const textElement =  page.locator('text=Strawberry');


  if (textElement !== null) {
    const isVisible = await textElement.isVisible();
    console.log('Is text visible:', isVisible);
  } else {
    console.log('Text element not found');
  }

  });