import { test, expect } from "@playwright/test"
import PageFactory from "../playwright-data/factory.page";
import PageName from "../playwright-data/page-name";

const password = "123456789Test!";
const invalidPassword = "123456789Test!!!!";
const username = "evgeniik980@gmail.com";

test.describe("Common tests", () => {
    test("Title test", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        const title = await homepage.getTitle();
        expect(title).toBe("Vacation Homes & Condo Rentals - Airbnb");
    });

    test("Choose country", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        await homepage.clickSearchButton();
        await homepage.clickUnitedStatesRegion();
        await homepage.clickMonthsBar();
        await homepage.clickButton("div.c6ezw63 div.lycybj5");
        await homepage.increaseAdultsInSearch();
        await homepage.increaseAdultsInSearch();
        await homepage.clickShowSearchResults();

        const url = await homepage.getUrl();
        const includeUS = url.includes("United-States");

        expect(includeUS).toBe(true);
    });
});

test.describe("Filter tests", () => {
    test("Price filter", async ({ page }) => {
        const value = "800";

        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        await homepage.clickFilterButton();
        await homepage.clickPriceMaxField();
        await homepage.fillMaxPriceValue(value);
        await homepage.clickShowResultButton();
        await homepage.clickButton("footer > a");
        await homepage.clickFilterButton();

        const price = await homepage.getInputValue("#price_filter_max");
        console.log(price);
        expect(price).toBe(value);
    });

    test("Select filters", async ({ page }) => {
        await page.setViewportSize({
            width: 1072,
            height: 815
        })
        page.setDefaultTimeout(50000);

        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        await homepage.clickFilterButton();
        await homepage.chooseThreeBedrooms();
        await homepage.chooseApartments();
        const houseValueAfterClick = await homepage.getHouseValue();
        await homepage.chooseEssentials();
        await homepage.clickSelfCheckin();
        await homepage.clickSuperHost();
        await homepage.clearAll();

        const value = await homepage.wifiChose();
        const bookValue = await homepage.selfCheckinChose();
        const houseValueAfterReset = await homepage.getHouseValue();
        console.log(value);
        console.log(bookValue);
        console.log(houseValueAfterClick);
        console.log(houseValueAfterReset);
        expect(value).toBeFalsy();
        expect(bookValue).toBeFalsy();
        expect(JSON.parse(houseValueAfterClick)).toBeTruthy();
        expect(JSON.parse(houseValueAfterReset)).toBeFalsy();
    });
})

test.describe("Login test", () => {

    test("Succesful login", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        await homepage.clickProfile();
        await homepage.clickLogin();
        await homepage.clickLoginWithEmail();
        await homepage.typeEmail(username);
        await homepage.clickContinue();
        await homepage.fillPassword(password);
        await homepage.clickContinue();
        await homepage.clickProfile();
        await homepage.clickButton("a:nth-of-type(7) > div");

        const url = await homepage.getUrl();
        expect(url).toBe('https://www.airbnb.com/account-settings');
    });

    test("Incorrect email", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        await homepage.clickProfile();
        await homepage.clickLogin();
        await homepage.clickLoginWithEmail();
        await homepage.typeEmail("ygguhgjg");
        await homepage.clickContinue();

        const mainpage = homepage.getPage();
        const error = await mainpage.getByTestId("email-login-email-InputField-help-error").textContent();
        expect(error).toBe("Enter a valid email.");
    });

    test("Incorrect password", async ({ page }) => {
        const homepage = new PageFactory(page).getPage(PageName.HOME_PAGE);
        await homepage.open();
        await homepage.clickProfile();
        await homepage.clickLogin();
        await homepage.clickLoginWithEmail();
        await homepage.typeEmail(username);
        await homepage.clickContinue();
        await homepage.clickContinue();
        await homepage.fillPassword(invalidPassword);
        await homepage.clickContinue();

        const mainpage = homepage.getPage();
        const error = await mainpage.locator("section section").textContent();
        expect(error).toBe("Let's try that againInvalid login credentials. Please try again.");
    });
})