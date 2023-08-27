import { type Page } from "@playwright/test";
import PageName from "./page-name";
import Homepage from "./home.page";

export default class PageFactory {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public getPage(pageName: PageName) {
        switch (pageName) {
            case PageName.HOME_PAGE:
                return new Homepage(this.page);
        }
    }
}