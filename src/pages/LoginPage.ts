import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private readonly txtUsername: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly lblError: Locator;

    constructor(page: Page) {

        super(page);

        this.txtUsername = page.locator('[data-test="username"]');
        this.txtPassword = page.locator('[data-test="password"]');
        this.btnLogin = page.locator('[data-test="login-button"]');
        this.lblError = page.locator('[data-test="error"]');

    }

    async login(
        username: string,
        password: string
    ): Promise<void> {

        await this.fill(this.txtUsername, username);
        await this.fill(this.txtPassword, password);
        await this.click(this.btnLogin);

    }

    async getErrorMessage(): Promise<string> {

        return await this.getText(this.lblError);

    }

}