import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    retries: 3,
    reporter: [
        ['allure-playwright']
    ],
    timeout: 30 * 1000,
};

export default config;