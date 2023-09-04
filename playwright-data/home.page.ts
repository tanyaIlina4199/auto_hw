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

    async getTitle() {
        return this.page.title();
    }

    getPage() {
        return this.page;
    }

    async clickFilterButton() {
        await this.clickButton("[data-testid='category-bar-filter-button'] > span");
    }

    async clickPriceMaxField() {
        await this.clickButton("#price_filter_max");
    }

    async fillMaxPriceValue(value: string) {
        await this.page.locator("#price_filter_max").fill(value);
    }

    async clickShowResultButton() {
        await this.clickButton("div.cckqhgg > div");
    }

    async clickButton(locator: string) {
        await this.page.locator(locator).click();
    }

    async getInputValue(locator: string) {
        return await this.page.locator(locator).inputValue();
    }

    async clickUnitedStatesRegion() {
        await this.clickButton("div.hxsn4eb div:nth-of-type(4) img");
    }

    async clickSearchButton() {
        await this.clickButton("div.lkm6i7z button:nth-of-type(1) > div");
    }

    async clickMonthsBar() {
        await this.clickButton("[data-testid='expanded-searchbar-dates-months-tab']");
    }

    async increaseAdultsInSearch() {
        await this.clickButton("[data-testid='stepper-adults-increase-button'] > span");
    }

    async clickShowSearchResults() {
        await this.clickButton("span.t1ng71ne > span");
    }

    async getUrl() {
        return this.page.url();
    }

    async clickProfile() {
        await this.clickButton("[data-testid='cypress-headernav-profile']");
    }

    async clickLogin() {
        await this.clickButton("[data-testid='cypress-headernav-login'] > div");
    }

    async clickLoginWithEmail() {
        await this.clickButton("[data-testid='social-auth-button-email']");
    }

    async typeEmail(email: string) {
        await this.page.locator("[data-testid='email-login-email']").type(email);
    }

    async clickContinue() {
        await this.clickButton("span.t1ng71ne > span");
    }

    async fillPassword(password: string) {
        await this.page.locator("[data-testid='email-signup-password']").type(password);
    }
}