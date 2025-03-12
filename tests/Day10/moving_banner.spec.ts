import { test, expect } from '@playwright/test';

test.describe('LambdaTest Scenarios', () => {
  test('Scenario 1: Simple Form Demo', async ({ page }) => {
    // Navigate to the playground
    await page.goto('https://www.lambdatest.com/selenium-playground');
    
    // Click Simple Form Demo
    await page.click('text=Simple Form Demo');
    
    // Validate URL contains simple-form-demo
    await expect(page).toHaveURL(/simple-form-demo/);
    
    // Test message
    const testMessage = 'Welcome to LambdaTest';
 
    
    // Enter message in the text box
    await page.fill('#user-message', testMessage);
    
    // Click Get Checked Value button
    await page.click('#showInput');
    
    // Validate the message
    const displayedMessage = await page.locator('#message').textContent();
    expect(displayedMessage).toBe(testMessage);
  });

  test('Scenario 2: Drag & Drop Sliders', async ({ page }) => {
    // Navigate to the playground
    await page.goto('https://www.lambdatest.com/selenium-playground');
    
    // Click Drag & Drop Sliders
    await page.click('text=Drag & Drop Sliders');
    
    // Find the slider with default value 15
    const slider = page.locator('input[value="15"]');
    
    // Get the bounding box of the slider
    const box = await slider.boundingBox();
    if (!box) throw new Error('Could not find slider');
    
    // Calculate positions for the drag
    const targetValue = 95;
    
    // Drag the slider
    await slider.dragTo(slider, {
      targetPosition: { x: box.width, y: 0 },
      force: true
    });
    
    // Verify the value is 95
    const output = page.locator('text=95');
    await expect(output).toBeVisible();
  });

  test('Scenario 3: Input Form Submit', async ({ page }) => {
    // Navigate to the playground
    await page.goto('https://www.lambdatest.com/selenium-playground');
    
    // Click Input Form Submit
    await page.click('text=Input Form Submit');
    
    // Click Submit without filling the form
    await page.click('button:has-text("Submit")');
    
    // Assert error message
    await expect(page.locator('.error')).toContainText('Please fill in the fields');
    
    // Fill in the form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.fill('input[name="company"]', 'Test Company');
    await page.fill('input[name="website"]', 'https://example.com');
    
    // Select country
    await page.selectOption('select[name="country"]', { label: 'United States' });
    
    await page.fill('input[name="city"]', 'Test City');
    await page.fill('input[name="address_line1"]', '123 Test St');
    await page.fill('input[name="address_line2"]', 'Suite 100');
    await page.fill('input[name="state"]', 'Test State');
    await page.fill('input[name="zip"]', '12345');
    
    // Submit the form
    await page.click('button:has-text("Submit")');
    
    // Validate success message
    await expect(page.locator('.success-msg')).toContainText('Thanks for contacting us, we will get back to you shortly.');
  });
});