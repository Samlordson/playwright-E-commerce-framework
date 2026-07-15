import { test, expect } from "../../src/fixtures/basefixture";
import { ConfigReader } from "../../src/utils/ConfigReader";
import { DataProvider } from "../../src/utils/DataProvider";
import { LoginPage } from "../../src/pages/LoginPage";
import { LoginData } from "../../src/models/LoginData";
import { Logger } from "../../src/utils/Logger";


const config = ConfigReader.getConfig();

const loginData =
    DataProvider.getData<LoginData[]>("loginData");

test.describe("Login Module", () => {

    for (const data of loginData) {

        test(data.scenario, async ({ page, loginPage }) => {

       Logger.info("========== Login Test Started ==========");

            await page.goto(config.baseUrl);

          

            await loginPage.login(
                data.username,
                data.password
            );

            if (data.expected === "success") {

                await expect(page).toHaveURL(/inventory/);

               Logger.success("========== Login Test Passed ==========");

            } else {

                await expect(
                    await loginPage.getErrorMessage()
                ).not.toBe("");

            }

        });

    }

});