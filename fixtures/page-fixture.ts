import {Page, expect} from '@playwright/test'
import {HomePage} from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import locators from '../locators/locators.json'
import { BasePage } from '../pages/BasePage';

export class PageFixtures {
    readonly page: Page;
    readonly productPage: ProductPage;
    readonly homePage: HomePage;
    readonly basePage: BasePage;

    constructor(page: Page){
        this.page = page;
        this.basePage = new BasePage(page)
        this.homePage = new HomePage(page)
        this.productPage = new ProductPage(page)
    }

    
}