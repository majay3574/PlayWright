import { chromium, test } from "@playwright/test";

test(`Test to launch the browser using persistent context`, async () => {
  const userDataDir = "C:/Users/AjayMichael/AppData/Local/Google/Chrome/User Data";

  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    permissions: ['notifications', 'geolocation'],
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", 
    httpCredentials: {
      username: "admin",
      password: "testleaf"
    }
  });

  const page = context.pages()[0]; 
  await page.goto("https://leafground.com/auth.xhtml");
  await page.pause();
  await page.getByRole("button", { name: "Basic Auth" }).click();
  await page.waitForTimeout(3000);

  // Close context at the end
  await context.close();
});
