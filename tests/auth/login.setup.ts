import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { ConfigReader } from "../../src/utils/ConfigReader";
import { Logger } from "../../src/utils/Logger";
import "../../src/hooks/ReportingHooks";

const config = ConfigReader.getConfig();

setup("Authenticate User", async ({ page }) => {
 Logger.info("========== Autenticate User setup started ==========");
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

    Logger.success("========== Authenticated the user and the Saved Storage State Sucessfully==========");

});