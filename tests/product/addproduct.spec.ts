import { test } from "../../src/fixtures/basefixture";
import { Logger } from "../../src/utils/Logger";
import * as allure from "allure-js-commons";
import "../../src/hooks/ReportingHooks";
import { expect } from "playwright/test";

test("Add product to cart", async ({

    page,
    productPage,
    cartPage

}) => {
     await allure.owner("Sam");
    await allure.severity("critical");
    await allure.epic("E-Commerce");
    await allure.feature("Shopping Cart");
    await allure.story("Add Product to Cart");

   Logger.info("========== Add Product Test Started ==========");


   await productPage.openInventory();

    await productPage.verifyInventoryPage();

   await productPage.addProduct("Sauce Labs Backpack");
   
    await productPage.verifyCartCount("1");

    await productPage.openCart();

    await cartPage.verifyCartPage();

    await cartPage.verifyProduct("Sauce Labs Backpack");


   // await expect(page).toHaveURL(/wrongurl/);

   Logger.success("========== Add Product Test Passed ==========");

});