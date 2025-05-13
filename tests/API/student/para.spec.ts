import { Page } from '@playwright/test';

export class SignUpPage {
    selectors = {
        menuButton: '//i[@class="fa-duotone fa-bars fa-swap-opacity"]',
        signUpLink: '//a[text()="Sign Up"]',
        firstNameField: '//input[@id="first_name"]',
        lastNameField: '//input[@id="last_name"]',
        userNameField: '//input[@id="user_name"]',
        emailField: '//input[@id="email"]',
        passwordField: '//input[@id="password"]',
        confirmPasswordField: '//input[@id="confirmpassword"]',
        address1Field: '//input[@id="lnr_address1"]',
        address2Field: '//input[@id="lnr_address2"]'
    };
    private page: Page;

    async menuButton() {
        await this.page.locator(this.selectors.menuButton).click();
    }

    async signUpLink() {
        await this.page.locator(this.selectors.signUpLink).click();
    }

    async firstNameField(value: string) {
        await this.page.locator(this.selectors.firstNameField).fill(value);
    }

    async lastNameField(value: string) {
        await this.page.locator(this.selectors.lastNameField).fill(value);
    }

    async userNameField(value: string) {
        await this.page.locator(this.selectors.userNameField).fill(value);
    }

    async emailField(value: string) {
        await this.page.locator(this.selectors.emailField).fill(value);
    }

    async passwordField(value: string) {
        await this.page.locator(this.selectors.passwordField).fill(value);
    }

    async confirmPasswordField(value: string) {
        await this.page.locator(this.selectors.confirmPasswordField).fill(value);
    }

    async address1Field(value: string) {
        await this.page.locator(this.selectors.address1Field).fill(value);
    }

    async address2Field(value: string) {
        await this.page.locator(this.selectors.address2Field).fill(value);
    }
}