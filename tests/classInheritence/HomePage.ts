import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    async verifyHomePage(): Promise<boolean> {
        const title = await this.getTitle();
        return title === 'Expected Home Page Title'; // Replace with the actual title
    }
}
