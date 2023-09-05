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

    async getHouseValue() {
        return await this.page.locator("div.g1rlxjq4 > div:nth-of-type(2) button").getAttribute("aria-pressed");
    }

    async chooseThreeBedrooms() {
        await this.clickButton("div.ig5jtz2 > div:nth-of-type(1) [data-testid='menuItemButton-3'] > button");
    }

    async chooseApartments() {
        await this.clickButton("div.g1rlxjq4 > div:nth-of-type(2) button");
    }

    async chooseEssentials() {
        await this.chooseWifi();
        await this.chooseAirConditioning();
        await this.clickShowMore();
        await this.chooseTV();
        await this.chooseHairDryer();
        await this.chooseIron();
    }

    async chooseWifi() {
        await this.clickButton("#filter-item-amenities-4-row-title");
    }

    async chooseAirConditioning() {
        await this.clickButton("[data-testid='filter-item-amenities-5'] label > div");
    }

    async clickShowMore() {
        await this.clickButton("div:nth-of-type(4) div.h1dyxq2n span");
    }

    async chooseTV() {
        await this.clickButton("#filter-item-amenities-58-row-title");
    }

    async chooseHairDryer() {
        await this.clickButton("[data-testid='filter-item-amenities-45'] label > div");
    }

    async chooseIron() {
        await this.clickButton("[data-testid='filter-item-amenities-46'] span > span");
    }

    async clickSelfCheckin() {
        await this.clickButton("#FILTER_SECTION_CONTAINER\\:BOOKING_OPTIONS1");
    }

    async clickSuperHost() {
        await this.clickButton("#FILTER_SECTION_CONTAINER\\:TOP_TIER_STAYS0");
    }

    async clearAll() {
        await this.clickButton("footer > button");
    }

    async isChecked(locator: string) {
        return await this.page.isChecked(locator);
    }

    async wifiChose() {
        return await this.isChecked("#filter-item-amenities-58-row-title");
    }

    async selfCheckinChose() {
        return await this.isChecked("#FILTER_SECTION_CONTAINER\\:BOOKING_OPTIONS1");
    }
}

