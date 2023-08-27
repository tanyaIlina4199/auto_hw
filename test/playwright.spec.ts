import { test, expect } from "@playwright/test"

const url = "https://www.airbnb.com/";

const password = "123456789Test!";
const username = "evgeniik980@gmail.com"
const timeout = 30 * 1000;

test.describe("Common tests", () => {
    test.skip("Title test", async ({ page }) => {
        await page.goto(url);
        expect(await page.title()).toBe("Vacation Homes & Condo Rentals - Airbnb");
    });

    test.skip("Click test", async ({ page }) => {
        await page.goto(url);
        page.setDefaultTimeout(timeout);
        await page.locator("div._3hmsj div:nth-of-type(1) > svg").click();
        await page.locator("[data-testid='cypress-headernav-login']").click();
        await page.locator("div:nth-of-type(4) div._bc4egv").click();
        await page.locator("[data-testid='email-login-email']").click()
        await page.locator("[data-testid='email-login-email']").type(username);
        await page.locator("span.t1ng71ne > span").click();
        await page.locator("[data-testid='email-signup-password']").click();
        await page.locator("[data-testid='email-signup-password']").type(password);
        await page.locator("span.t1ng71ne > span").click();
        await page.locator("div.cqtawrq img").click();
        await page.locator("a:nth-of-type(6) > div").click();

        expect(page.url()).toBe('https://www.airbnb.com/account-settings');
    });

    test.skip("Choose country", async ({ page }) => {
        await page.goto("https://www.airbnb.com/");
        page.setDefaultTimeout(timeout * 5);
        await page.locator("div.lkm6i7z button:nth-of-type(1) > div").click();
        await page.locator("div.hxsn4eb div:nth-of-type(4) img").click();
        await page.locator("[data-testid='expanded-searchbar-dates-months-tab']").click();
        await page.locator("div.c6ezw63 div.lycybj5").click();
        await page.locator("[data-testid='stepper-adults-increase-button'] > span").click();
        await page.locator("[data-testid='stepper-adults-increase-button'] > span").click();
        await page.locator("span.t1ng71ne > span").click();

        const url = await page.url();
        const includeUS = url.includes("United-States");

        expect(includeUS).toBe(true);
    });

    test("Price filter", async ({ page }) => {
        await page.goto(url);
        page.setDefaultTimeout(timeout);
        await page.locator("[data-testid='category-bar-filter-button'] > span").click();
        await page.locator("[data-testid='category-bar-filter-button'] > span").click()
        await page.locator("#price_filter_max").click()
        await page.locator("#price_filter_max").clear()
        await page.locator("#price_filter_max").type("800");
        await page.locator("div.cckqhgg > div").click()
        await page.locator("footer > a").click()
        page.setDefaultTimeout(timeout);
        await page.locator("[data-testid='category-bar-filter-button'] > span").click()

        const price = await page.locator("#price_filter_max").getAttribute("price_filter_max");
        console.log(price);
        const isSaved = price.includes("800")
        expect(isSaved).toBe(true);
    })
});