import { type Page } from "@playwright/test"

export default class Homepage {
    readonly page: Page;
    readonly url = "https://www.airbnb.com/";

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        return this.page.goto(this.url);
    }

    getPage() {
        return this.page;
    }
}