import {  expect, test } from "@playwright/test";
 
test.only('visibility', async ({ page }) => {
 
    await page.goto("https://www.leafground.com/waits.xhtml")
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"})
    const buttonToClick = cardToSelect.locator("button").filter({hasText:"Click"})
    const buttonHideen = cardToSelect.locator("button").filter({hasText:"I am here"})
    //await page.pause()
    await expect(buttonHideen).not.toBeVisible()
    await buttonToClick.click()
    await expect(buttonHideen).toBeVisible({timeout:10000})
 
    const  wait_for_invisibility =page.locator(".card").filter({hasText:"Wait for Invisibility (1 - 10 Sec)"})
    const  invisibility_button = wait_for_invisibility.locator("button").filter({hasText:"I am about to hide"})
    const  clickable_button = wait_for_invisibility.locator("button").filter({hasText:"Click"})
 
    await expect(invisibility_button).toBeVisible()
    await clickable_button.click()
    await expect(invisibility_button).not.toBeVisible({timeout:10000})
 
   
  });