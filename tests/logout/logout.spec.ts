import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/basefixture";
import { Logger } from "../../src/utils/Logger";


test("Logout Successfully", async ({

    page,
    productPage

}) => {
Logger.info("========== Logout Test Started ==========");
    await productPage.openInventory();

    await productPage.header.logout();

    await expect(page).toHaveURL(/.*\/$/);
   
 Logger.success("========== Logout Test Passed ==========");   

});