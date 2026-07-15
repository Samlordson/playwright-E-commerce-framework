import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderComponent } from "../components/HeaderComponent";

export class ProductPage extends BasePage {

    readonly inventoryTitle: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;
    readonly header: HeaderComponent;

    constructor(page: Page) {

        super(page);

        this.inventoryTitle = page.locator(".title");
        this.cartIcon = page.locator(".shopping_cart_link");
        this.cartBadge = page.locator(".shopping_cart_badge");
          this.header = new HeaderComponent(page);
    }
    
async openInventory(): Promise<void> {
    await this.page.goto("/inventory.html");
    await this.verifyInventoryPage();
}
    async verifyInventoryPage() {

        await expect(this.inventoryTitle).toHaveText("Products");

    }

    async addProduct(productName: string) {

        await this.page
            .locator(".inventory_item")
            .filter({
                has: this.page.locator(".inventory_item_name", {
                    hasText: productName
                })
            })
            .locator("button")
            .click();

    }

    async removeProduct(productName: string) {

        await this.page
            .locator(".inventory_item")
            .filter({
                has: this.page.locator(".inventory_item_name", {
                    hasText: productName
                })
            })
            .locator("button")
            .click();

    }

    async openCart() {

        await this.cartIcon.click();

    }

    async verifyCartCount(count: string) {

        await expect(this.cartBadge).toHaveText(count);

    }
}