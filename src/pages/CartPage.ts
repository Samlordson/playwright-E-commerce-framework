import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

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

        await expect(this.cartTitle).toHaveText("Your Cart");

    }

    async removeProduct() {

        await this.removeButton.click();

    }

    async continueShopping() {

        await this.continueShoppingButton.click();

    }

    async proceedToCheckout() {

        await this.checkoutButton.click();

    }

    async verifyCartIsEmpty() {

        await expect(
            this.page.locator(".cart_item")
        ).toHaveCount(0);

    }
    
    async verifyProduct(productName: string) {

    await expect(this.cartItemName).toHaveText(productName);

}
}