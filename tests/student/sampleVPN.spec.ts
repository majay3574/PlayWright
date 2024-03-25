import { test, expect } from "@playwright/test";
test.use({
    geolocation: { longitude: -100.000000, latitude: 31.000000 },
    permissions: ['geolocation'],
  });

test("using VPN for some illegal website", async ({ page }) => {

    await page.goto("https://www.google.com/maps")
    await page.goto("https://www.tiktok.com/en/");
    await page.waitForTimeout(10000);
    // Add your test assertions or actions here
});
