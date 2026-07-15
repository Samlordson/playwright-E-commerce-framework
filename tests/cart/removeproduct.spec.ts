import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/basefixture";
import { Logger } from "../../src/utils/Logger";

test("Remove Product", async ({

    page,
    productPage,
    cartPage

}) => {
    
Logger.info("========== Remove Product Test Started ==========");
    await page.goto("/inventory.html");

    await productPage.addProduct("Sauce Labs Backpack");

    await productPage.openCart();

    await cartPage.removeProduct();

    await cartPage.verifyCartIsEmpty();

    Logger.success("========== Remove product Test Passed ==========");

});