import { Page } from "@playwright/test";

class MyClass {
    page: Page;
    url?: string;

    constructor(page: Page, url?: string) {
        this.page = page;
        this.url = url ?? ""
    }
}
