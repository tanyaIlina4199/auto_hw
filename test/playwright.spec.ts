import { test, expect } from "@playwright/test"
import PageFactory from "../playwright-data/factory.page";
import PageName from "../playwright-data/page-name";

const password = "123456789Test!";
const invalidPassword = "123456789Test!!!!";
const username = "evgeniik980@gmail.com"
const timeout = 30 * 1000;

test.describe("Common tests", () => {
    test("Title test", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        const mainpage = homepage.getPage();
        expect(await mainpage.title()).toBe("Vacation Homes & Condo Rentals - Airbnb");
    });

    test("Choose country", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        const mainpage = homepage.getPage();
        mainpage.setDefaultTimeout(timeout * 5);
        await mainpage.locator("div.lkm6i7z button:nth-of-type(1) > div").click();
        await mainpage.locator("div.hxsn4eb div:nth-of-type(4) img").click();
        await mainpage.locator("[data-testid='expanded-searchbar-dates-months-tab']").click();
        await mainpage.locator("div.c6ezw63 div.lycybj5").click();
        await mainpage.locator("[data-testid='stepper-adults-increase-button'] > span").click();
        await mainpage.locator("[data-testid='stepper-adults-increase-button'] > span").click();
        await mainpage.locator("span.t1ng71ne > span").click();

        const url = await mainpage.url();
        const includeUS = url.includes("United-States");

        expect(includeUS).toBe(true);
    });
});

test.describe("Filter tests", () => {
    test("Price filter", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        const mainpage = homepage.getPage();
        mainpage.setDefaultTimeout(timeout);
        await mainpage.locator("[data-testid='category-bar-filter-button'] > span").click();
        await mainpage.locator("[data-testid='category-bar-filter-button'] > span").click()
        await mainpage.locator("#price_filter_max").click()
        await mainpage.locator("#price_filter_max").clear()
        await mainpage.locator("#price_filter_max").fill("800");
        await mainpage.locator("div.cckqhgg > div").click()
        await mainpage.locator("footer > a").click()
        mainpage.setDefaultTimeout(timeout);
        await mainpage.locator("[data-testid='category-bar-filter-button'] > span").click()

        const price = await mainpage.locator("#price_filter_max").inputValue();
        console.log(price);
        expect(price).toBe("800");
    });

    test("Select filters", async ({ page }) => {
        await page.setViewportSize({
            width: 1072,
            height: 815
        })

        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        const mainpage = homepage.getPage();
        await mainpage.locator("[data-testid='category-bar-filter-button'] > span").click();
        await mainpage.locator("div.ig5jtz2 > div:nth-of-type(1) [data-testid='menuItemButton-3'] > button").click();
        await mainpage.locator("div.g1rlxjq4 > div:nth-of-type(2) button").click();
        const houseValueAfterClick = await mainpage.locator("div.g1rlxjq4 > div:nth-of-type(2) button").getAttribute("aria-pressed");
        await mainpage.locator("#filter-item-amenities-4-row-title").click();
        await mainpage.locator("[data-testid='filter-item-amenities-5'] label > div").click();
        await mainpage.locator("div:nth-of-type(4) div.h1dyxq2n span").click();
        await mainpage.locator("#filter-item-amenities-58-row-title").click();
        await mainpage.locator("[data-testid='filter-item-amenities-45'] label > div").click();
        await mainpage.locator("[data-testid='filter-item-amenities-46'] span > span").click();
        await mainpage.locator("#FILTER_SECTION_CONTAINER\\:BOOKING_OPTIONS1").click();
        await mainpage.locator("#FILTER_SECTION_CONTAINER\\:TOP_TIER_STAYS0").click();
        await mainpage.locator("footer > button").click();

        const value = await mainpage.isChecked("#filter-item-amenities-58-row-title");
        const bookValue = await mainpage.isChecked("#FILTER_SECTION_CONTAINER\\:BOOKING_OPTIONS1");
        const houseValueAfterReset = await mainpage.locator("div.g1rlxjq4 > div:nth-of-type(1) button").getAttribute("aria-pressed");
        console.log(value);
        console.log(bookValue);
        console.log(houseValueAfterReset);
        expect(value).toBeFalsy();
        expect(bookValue).toBeFalsy();
        expect(JSON.parse(houseValueAfterClick)).toBeTruthy();
        expect(JSON.parse(houseValueAfterReset)).toBeFalsy();
    });
})

test.describe("Login test", () => {

    test.only("Succesful login", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        const mainpage = homepage.getPage();
        mainpage.setDefaultTimeout(timeout);
        await mainpage.locator("div._3hmsj div:nth-of-type(1) > svg").click();
        await mainpage.locator("[data-testid='cypress-headernav-login']").click();
        await mainpage.locator("div:nth-of-type(4) div._bc4egv").click();
        await mainpage.locator("[data-testid='email-login-email']").click()
        await mainpage.locator("[data-testid='email-login-email']").type(username);
        await mainpage.locator("span.t1ng71ne > span").click();
        await mainpage.locator("[data-testid='email-signup-password']").click();
        await mainpage.locator("[data-testid='email-signup-password']").type(password);
        await mainpage.locator("span.t1ng71ne > span").click();
        await mainpage.locator("div.cqtawrq img").click();
        await mainpage.locator("a:nth-of-type(7) > div").click();

        expect(mainpage.url()).toBe('https://www.airbnb.com/account-settings');
    });
    test("Incorrect email", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        const mainpage = homepage.getPage();
        mainpage.setDefaultTimeout(40000);
        await mainpage.locator("[data-testid='cypress-headernav-profile']").click();
        await mainpage.locator("[data-testid='cypress-headernav-login'] > div").click();
        await mainpage.locator("[data-testid='social-auth-button-email']").click();
        await mainpage.locator("[data-testid='email-login-email']").type("ygguhgjg");
        await mainpage.locator("span.t1ng71ne > span").click();

        const error = await mainpage.getByTestId("email-login-email-InputField-help-error").textContent();
        expect(error).toBe("Enter a valid email.");
    });

    test("Incorrect password", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        const mainpage = homepage.getPage();
        mainpage.setDefaultTimeout(40000);
        await mainpage.locator("[data-testid='cypress-headernav-profile']").click();
        await mainpage.locator("[data-testid='cypress-headernav-login'] > div").click();
        await mainpage.locator("[data-testid='social-auth-button-email']").click();
        await mainpage.locator("[data-testid='email-login-email']").fill(username);
        await mainpage.locator("span.t1ng71ne > span").click();
        await mainpage.locator("span.t1ng71ne > span").click()
        await mainpage.locator("[data-testid='email-signup-password']").type(invalidPassword);
        await mainpage.locator("span.t1ng71ne > span").click()

        const error = await mainpage.locator("section section").textContent();
        expect(error).toBe("Let's try that againInvalid login credentials. Please try again.");
    });
})