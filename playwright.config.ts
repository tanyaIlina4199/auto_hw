import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    retries: 1,
    reporter: [
        ['allure-playwright']
    ],
    timeout: 30 * 1000,
    expect: {
        timeout: 1000
    },
    projects: [
        {
            name: "chrome",
            use: {
                browserName: "chromium",
                launchOptions: {
                    slowMo: 2000
                }
            }
        }
    ]
};

export default config;