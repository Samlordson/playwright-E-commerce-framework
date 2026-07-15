import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/basefixture";


test("Logout Successfully", async ({

    page,
    productPage

}) => {

    await productPage.openInventory();

    await productPage.header.logout();

    await expect(page).toHaveURL(/.*\/$/);

});