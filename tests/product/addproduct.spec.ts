import { test } from "../../src/fixtures/basefixture";

test("Add product to cart", async ({

    page,
    productPage,
    cartPage

}) => {

   await productPage.openInventory();

    await productPage.verifyInventoryPage();

   await productPage.addProduct("Sauce Labs Backpack");
   
    await productPage.verifyCartCount("1");

    await productPage.openCart();

    await cartPage.verifyCartPage();

    await cartPage.verifyProduct("Sauce Labs Backpack");

});