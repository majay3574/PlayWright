/* 1. Create a DashboardPage class with:
         A Page object to interact with the browser.
         A url string to store the URL of the dashboard.
2. The class should include:
         A constructor that initializes the Page object and             the URL.
         An asynchronous navigate method to visit the url.
3. Test Execution:
         Write an async function dashboardTest to:
         Launch a browser using Playwright's chromium module (non-headless mode).
         Open a new page.
         Create an instance of DashboardPage, passing the new page and the URL 'https://leafground.com/' to the constructor.
        Call the navigate method of the DashboardPage instance. */

        import { chromium, Page } from 'playwright';

        class DashboardPage {
            public page: Page;
            public url: string;
        
            constructor(page: Page, url: string) {
                this.page = page;
                this.url = url;
            }
        
            async navigate() {
                await this.page.goto(this.url);
            }
        
            async sendMessageToResolutionCenter() {
                await this.page.fill('#email', 'majay3574@gmail.com');
                await this.page.fill('#message', 'Test Message to Resolution Center');
                await this.page.click('button[type="submit"]');
            }
        }
        
        // Usage in a test with a staging URL
        async function dashboardTest() {
            const browser = await chromium.launch({ headless: false });
            const page = await browser.newPage();
            const dashboardPage = new DashboardPage(page, 'https://leafground.com/');
            await dashboardPage.navigate();
            await dashboardPage.sendMessageToResolutionCenter(); // Fixed method call
            await browser.close();
        }
        
        dashboardTest();
        