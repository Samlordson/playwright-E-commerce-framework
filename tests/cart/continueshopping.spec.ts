import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/basefixture";

test("Continue Shopping", async ({

    page,
    productPage,
    cartPage

}) => {

   await productPage.openInventory();
   
    await productPage.addProduct("Sauce Labs Backpack");

    await productPage.openCart();

    await cartPage.continueShopping();

    await productPage.verifyInventoryPage();

});