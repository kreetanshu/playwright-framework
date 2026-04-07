import {Page, expect} from '@playwright/test'
import {BasePage} from './BasePage'
import locators from '../locators/locators.json'

export class HomePage extends BasePage {

    private readonly landingPageTitle: string = "Swag Labs"
    private readonly homePageLocator = locators.HomePage;

    constructor(page: Page){
        super(page)
    }

    async userLogin(){
      await this.setText(this.homePageLocator.username,'standard_user')
      await this.setText(this.homePageLocator.password,'secret_sauce')
      await this.click(this.homePageLocator.loginButton)
      await this.waitForTimeout(2000)
      await this.validatePageTitle(this.landingPageTitle)
    }

}