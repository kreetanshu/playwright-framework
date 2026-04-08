import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'
import locators from '../locators/locators.json'
import { readCSVData } from '../utils/readCSV'

export class ProductPage extends BasePage {

    private readonly locatorProductPage = locators.ProductPage
    private readonly sauceBagPrice = "$29.99"
    private readonly productData = readCSVData("test-data/productPrice.csv")

    constructor(page: Page) {
        super(page)
    }

    async validateProductPrice(productName: string) {
        await this.click(this.locatorProductPage.bagPack)
        let price = await this.getText(this.locatorProductPage.bagPackPrice)
        console.log(`Actual Price of ${productName} is ${price}`)
        expect(price).toEqual(this.productData.find(p => p.productname = productName)?.price)
    }

    async validateProductList(expectedProdList: string[]) {
        const items: string[] = await this.page.locator(this.locatorProductPage.inventoryItems).allInnerTexts();
        expect(items, "Actual prodcut list does not match with expected").toEqual(expectedProdList)
    }

}