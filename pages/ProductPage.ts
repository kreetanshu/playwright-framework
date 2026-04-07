import {Page, expect} from '@playwright/test'
import {BasePage} from './BasePage'
import locators from '../locators/locators.json'

export class ProductPage extends BasePage{

    private readonly locatorProductPage = locators.ProductPage
    private readonly sauceBagPrice = "$29.99"

    constructor(page: Page){
        super(page)
    }

    async validateProductPrice(){
        await this.click(this.locatorProductPage.bagPack)
        let price =await this.getText(this.locatorProductPage.bagPackPrice)
        console.log(price)
        expect(price).toEqual(this.sauceBagPrice)
    }

}