import { test, expect, chromium } from '@playwright/test';

test('View YouTube Shorts with Random Geolocation', async () => {
  // Function to generate random latitude and longitude
  const generateRandomGeolocation = () => {
    const randomLatitude = (Math.random() * 180 - 90).toFixed(6); // Latitude: -90 to +90
    const randomLongitude = (Math.random() * 360 - 180).toFixed(6); // Longitude: -180 to +180
    return { latitude: parseFloat(randomLatitude), longitude: parseFloat(randomLongitude) };
  };

  // Generate random geolocation
  const randomLocation = generateRandomGeolocation();
  console.log(`Using random geolocation: Latitude ${randomLocation.latitude}, Longitude ${randomLocation.longitude}`);

  // Launch browser with geolocation permissions
  const browser = await chromium.launch({headless:true});
  const context = await browser.newContext({
    permissions: ['geolocation'], // Enable geolocation permissions
    geolocation: randomLocation, // Set random geolocation
    locale: 'en-US', // Optional: Set locale
  });

  const page = await context.newPage();
  
  // Navigate to the YouTube Shorts URL
  await page.goto('https://www.youtube.com/shorts/CNFbi6RTEJE');

  // Wait for the video player to load
  await page.waitForSelector('video', { timeout: 60000 });

  // Verify the video element is visible
  const isVideoVisible = await page.isVisible('video');
  expect(isVideoVisible).toBeTruthy();

  // Wait for 60 seconds if needed
  await page.waitForTimeout(60000);

  // Close the browser
  await browser.close();
});
