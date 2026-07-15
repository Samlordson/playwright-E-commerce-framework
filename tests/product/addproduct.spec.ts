import { test } from "../../src/fixtures/basefixture";
import { Logger } from "../../src/utils/Logger";


test("Add product to cart", async ({

    page,
    productPage,
    cartPage

}) => {

   Logger.info("========== Add Product Test Started ==========");


   await productPage.openInventory();

    await productPage.verifyInventoryPage();

   await productPage.addProduct("Sauce Labs Backpack");
   
    await productPage.verifyCartCount("1");

    await productPage.openCart();

    await cartPage.verifyCartPage();

    await cartPage.verifyProduct("Sauce Labs Backpack");

   Logger.success("========== Add Product Test Passed ==========");

});