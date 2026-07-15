import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Logger } from "../utils/Logger";
export class CheckoutOverviewPage extends BasePage {

    readonly title: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {

        super(page);

        this.title = page.locator(".title");

        this.finishButton = page.locator("#finish");

    }

    async verifyOverviewPage() {
       Logger.info("Verifying Overview Page");
        await expect(this.title).toHaveText("Checkout: Overview");
       Logger.success("Overview is Displaying");
    }

    async finishOrder() {

        await this.finishButton.click();
       Logger.success("finished order sucessfully");
    }

}