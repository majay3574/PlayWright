import test from "@playwright/test"

test(`Testing Arial method`, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('banner')).toMatchSnapshot(`
      - banner:
        - heading /Playwright enables reliable end-to-end/ [level=1]
        - link "Get started"
        - link "Star microsoft/playwright on GitHub"
        - link /[\\d]+k\\+ stargazers on GitHub/
    `);
})