import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { ConfigReader } from "../../src/utils/ConfigReader";

const config = ConfigReader.getConfig();

setup("Authenticate User", async ({ page }) => {

    await page.goto(config.baseUrl);

    const loginPage = new LoginPage(page);

    await loginPage.login(
        config.username,
        config.password
    );

    // Wait until authentication is complete
    await expect(page).toHaveURL(/inventory/);

    // Save Browser Context
    await page.context().storageState({
        path: "playwright/.auth/user.json"
    });

});