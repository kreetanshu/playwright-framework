import {Page, expect} from '@playwright/test'
import {HomePage} from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import locators from '../locators/locators.json'

export class PageFixtures {
    readonly homePage: HomePage;
    readonly productPage: ProductPage;

    constructor(page: Page){
        this.homePage = new HomePage(page)
        this.productPage = new ProductPage(page)
    }

    
}