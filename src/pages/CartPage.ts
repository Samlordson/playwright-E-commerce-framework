import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Logger } from "../utils/Logger";

export class CartPage extends BasePage {

    readonly cartTitle;
    readonly checkoutButton;
    readonly continueShoppingButton;
    readonly removeButton;
    readonly cartItemName: Locator;

    constructor(page: Page) {

        super(page);

        this.cartTitle = page.locator(".title");

        this.checkoutButton = page.locator("#checkout");

        this.cartItemName = page.locator(".inventory_item_name");

        this.continueShoppingButton = page.locator("#continue-shopping");

        this.removeButton = page.locator("button:has-text('Remove')");
    }

    async verifyCartPage() {
        Logger.info("Verify Cart Page");
        await expect(this.cartTitle).toHaveText("Your Cart");
        Logger .success("Cart Page is Displaying")
    }

    async removeProduct() {
    Logger.info("Remove Product");
        await this.removeButton.click();
    Logger.success("Removed the Product")
    }

    async continueShopping() {
       Logger.info("Continuing Shopping");

        await this.continueShoppingButton.click();

       Logger.success("Returned to Inventory");

    }

    async proceedToCheckout() {
       Logger.info("proceedToCheckout");
        await this.checkoutButton.click();
       Logger.success("Checkedout Sucessfully");
    }

    async verifyCartIsEmpty() {
      Logger.info("Verifying the Cart is Empty");
        await expect(
            this.page.locator(".cart_item")
        ).toHaveCount(0);
      Logger.success("Cart is empty ");
    }

    async verifyProduct(productName: string) {
    Logger.info("Verify Product");
    await expect(this.cartItemName).toHaveText(productName);
    Logger.info("Verified Product Name Sucessfully");
}
}