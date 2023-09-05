import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    retries: 0,
    reporter: [
        ['allure-playwright']
    ],
    timeout: 40 * 1000,
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
    ],
    use: {
        screenshot: 'only-on-failure'
    }
};

export default config;