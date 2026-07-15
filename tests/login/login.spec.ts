import { test, expect } from "../../src/fixtures/basefixture";
import { ConfigReader } from "../../src/utils/ConfigReader";
import { DataProvider } from "../../src/utils/DataProvider";
import { LoginPage } from "../../src/pages/LoginPage";
import { LoginData } from "../../src/models/LoginData";

const config = ConfigReader.getConfig();

const loginData =
    DataProvider.getData<LoginData[]>("loginData");

test.describe("Login Module", () => {

    for (const data of loginData) {

        test(data.scenario, async ({ page, loginPage }) => {

            await page.goto(config.baseUrl);

          

            await loginPage.login(
                data.username,
                data.password
            );

            if (data.expected === "success") {

                await expect(page).toHaveURL(/inventory/);

            } else {

                await expect(
                    await loginPage.getErrorMessage()
                ).not.toBe("");

            }

        });

    }

});