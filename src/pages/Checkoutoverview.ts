import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutOverviewPage extends BasePage {

    readonly title: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {

        super(page);

        this.title = page.locator(".title");

        this.finishButton = page.locator("#finish");

    }

    async verifyOverviewPage() {

        await expect(this.title).toHaveText("Checkout: Overview");

    }

    async finishOrder() {

        await this.finishButton.click();

    }

}