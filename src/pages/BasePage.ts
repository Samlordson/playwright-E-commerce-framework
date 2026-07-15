import { Locator, Page } from "@playwright/test";

export class BasePage {

    constructor(protected page: Page) {}

    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    async fill(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    async getText(locator: Locator): Promise<string> {
        return await locator.textContent() ?? "";
    }

    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    async waitForElement(locator: Locator): Promise<void> {
        await locator.waitFor({
            state: "visible"
        });
    }

}