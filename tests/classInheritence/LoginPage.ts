import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    async login(username: string, password: string): Promise<void> {
        // You'll need to adjust the selectors based on the actual page structure
        await this.page.fill('#username', "demosalesmanager");
        await this.page.fill('#password', "crmsfa");
        await this.page.click('.decorativeSubmit');
    }

    async isLoginErrorDisplayed(): Promise<boolean> {
        // Adjust the selector to match the error message element
        return this.page.isVisible('.error-message');
    }
}
