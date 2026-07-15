import { defineConfig, devices } from "@playwright/test";
import { ConfigReader } from "./src/utils/ConfigReader";

const config = ConfigReader.getConfig();

export default defineConfig({

  testDir: "./tests",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [

  [
    "html",
    {
      outputFolder: "playwright-report",
      open: "never",
    },
  ],

  [
    "allure-playwright",
  ],

],

  use: {

    baseURL: config.baseUrl,

    trace: "retain-on-failure",

    screenshot: "only-on-failure",

    video: "retain-on-failure",

},

  projects: [

    // Authentication Setup
    {
      name: "setup",

      testMatch: /.*\.setup\.ts/,
    },

    // Chromium
    {
      name: "chromium",

      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/user.json",
      },

      dependencies: ["setup"],
    },

    // Firefox
    {
      name: "firefox",

      use: {
        ...devices["Desktop Firefox"],
        storageState: "playwright/.auth/user.json",
      },

      dependencies: ["setup"],
    },

    // WebKit
    {
      name: "webkit",

      use: {
        ...devices["Desktop Safari"],
        storageState: "playwright/.auth/user.json",
      },

      dependencies: ["setup"],
    },

  ],

});