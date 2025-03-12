import { test, expect } from '@playwright/test';
import chroma from 'chroma-js';
import colorNamer from 'color-namer';

test('Sales pick Color', async ({ page }) => {
  await page.goto('https://www.leafground.com/alert.xhtml');

  // Locate the button
  const deleteBtn = page.locator("//span[text()='Delete']/parent::button");

  // Ensure the element is visible before retrieving the color
  await expect(deleteBtn).toBeVisible();

  // Retrieve the RGB color of the button
  const buttonColor = await deleteBtn.evaluate((element) => {
    const targetElement = element.closest('button') || element;
    return window.getComputedStyle(targetElement).backgroundColor;
  });

  console.log('Button color in RGB:', buttonColor);

  // Check if the color is in the expected format and extract RGB values
  const rgbArray = buttonColor.match(/\d+/g);
  let color
  if (rgbArray) {
    // Convert RGB string values to numbers
    color = chroma.rgb(...rgbArray.map(Number)).hex();
    console.log(color);
  } else {
    console.log('Failed to extract RGB values from the button color');
  }
  const color_value = colorNamer(color).basic[0].name;

  console.log('Color name:', color_value);
});
