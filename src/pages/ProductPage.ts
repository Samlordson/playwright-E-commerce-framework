import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderComponent } from "../components/HeaderComponent";
import { Logger } from "../utils/Logger";

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
    Logger.success("Inventory Page opened");
}
    async verifyInventoryPage() {

        await expect(this.inventoryTitle).toHaveText("Products");

         Logger.success("Inventory Page verified");

    }


    async addProduct(productName: string) {

         Logger.info(`Adding product : ${productName}`);

        await this.page
            .locator(".inventory_item")
            .filter({
                has: this.page.locator(".inventory_item_name", {
                    hasText: productName
                })
            })
            .locator("button")
            .click();

Logger.success(`${productName} added to cart`);

    }

    async removeProduct(productName: string) {

         Logger.info(`Removing product '${productName}'`);

        await this.page
            .locator(".inventory_item")
            .filter({
                has: this.page.locator(".inventory_item_name", {
                    hasText: productName
                })
            })
            .locator("button")
            .click();
            Logger.success("Product removed");

    }

    async openCart() {
        
        Logger.info("Opening Cart");

        await this.cartIcon.click();
        
        Logger.success("Cart opened");
    }

    async verifyCartCount(count: string) {

  Logger.info(`Verifying cart count (${count})`);
        await expect(this.cartBadge).toHaveText(count);

        Logger.success("Cart count verified");

    }
}