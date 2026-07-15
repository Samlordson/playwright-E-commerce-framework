import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/basefixture";

test("Remove Product", async ({

    page,
    productPage,
    cartPage

}) => {

    await page.goto("/inventory.html");

    await productPage.addProduct("Sauce Labs Backpack");

    await productPage.openCart();

    await cartPage.removeProduct();

    await cartPage.verifyCartIsEmpty();

});