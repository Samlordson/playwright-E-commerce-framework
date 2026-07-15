import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        super(page);

        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.postalCode = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");
        this.cancelButton = page.locator("#cancel");
    }

    async enterCustomerDetails(
        first: string,
        last: string,
        zip: string
    ) {

        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(zip);

        await this.continueButton.click();

    }

}