

async function login(page: any, username: any, password: any) {
    await page.goto("https://login.salesforce.com/");
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="pw"]', password);
    await page.click('input[name="Login"]');
    await page.waitForLoadState('load');

    const Global_Actions_SVG_icon = await page.locator("div.slds-icon-waffle")
    await Global_Actions_SVG_icon.click({ force: true });

    const View_All = await page.locator("button:has-text('View All')")
    await View_All.click({ force: true });
}

export default login;
