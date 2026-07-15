import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage"; 

export class CheckoutCompletePage extends BasePage {

    readonly title: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.title = page.locator(".title");

        this.successMessage = page.locator(".complete-header");

    }

    async verifyOrderPlaced() {

        await expect(this.title)
            .toHaveText("Checkout: Complete!");

        await expect(this.successMessage)
            .toHaveText("Thank you for your order!");

    }

}