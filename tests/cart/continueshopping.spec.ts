import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/basefixture";
import { Logger } from "../../src/utils/Logger";
import "../../src/hooks/ReportingHooks";

test("Continue Shopping", async ({

    page,
    productPage,
    cartPage

}) => {
Logger.info("========== Continue Shopping Test Started ==========");
   await productPage.openInventory();

    await productPage.addProduct("Sauce Labs Backpack");

    await productPage.openCart();

    await cartPage.continueShopping();

    await productPage.verifyInventoryPage();

Logger.success("========== Continue Shopping Test Passed ==========");

});