import { test } from "../../src/fixtures/basefixture";
import { DataProvider} from "../../src/utils/DataProvider";
import { CheckoutData} from "../../src/models/CheckoutData";

test("Complete Checkout", async ({

    page,
    productPage,
    cartPage,
    checkoutPage,
    checkoutoverviewPage,
    checkoutCompletePage

}) => {

    await productPage.openInventory();

    await productPage.addProduct("Sauce Labs Backpack");

    await productPage.openCart();

    await cartPage.proceedToCheckout();

  const checkoutData =
    DataProvider.getData<CheckoutData>("checkoutData");

await checkoutPage.enterCustomerDetails(

    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.postalCode

);

    

    await checkoutoverviewPage.verifyOverviewPage();

    await checkoutoverviewPage.finishOrder();

    await checkoutCompletePage.verifyOrderPlaced();

});