import { Locator, Page } from "@playwright/test";

export class HeaderComponent {

    readonly menuButton: Locator;
    readonly logoutLink: Locator;
    readonly resetAppState: Locator;
    readonly aboutLink: Locator;

    constructor(private page: Page) {

        this.menuButton = page.locator("#react-burger-menu-btn");

        this.logoutLink = page.locator("#logout_sidebar_link");

        this.resetAppState = page.locator("#reset_sidebar_link");

        this.aboutLink = page.locator("#about_sidebar_link");

    }

    async openMenu() {

        await this.menuButton.click();

    }

    async logout() {

        await this.openMenu();

        await this.logoutLink.click();

    }

    async resetApplication() {

        await this.openMenu();

        await this.resetAppState.click();

    }

}