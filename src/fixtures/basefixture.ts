import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutOverviewPage } from "../pages/Checkoutoverview";
import {CheckoutCompletePage} from "../pages/Checkoutcomplete";

type PageFixtures = {

    loginPage: LoginPage;

    productPage: ProductPage;

    cartPage: CartPage;

    checkoutPage: CheckoutPage;

    checkoutoverviewPage : CheckoutOverviewPage

    checkoutCompletePage : CheckoutCompletePage

};

export const test = base.extend<PageFixtures>({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);

    },

    productPage: async ({ page }, use) => {

    await use(new ProductPage(page));

},

 cartPage: async ({ page }, use) => {

    await use(new CartPage(page));

},
 checkoutPage: async ({ page }, use) => {

    await use(new CheckoutPage(page));

},
 
 checkoutoverviewPage:  async ({ page }, use) => {

    await use(new CheckoutOverviewPage(page));
 },

 checkoutCompletePage: async ({ page }, use) => {

    await use(new CheckoutCompletePage(page));
 },

});


export { expect } from "@playwright/test";