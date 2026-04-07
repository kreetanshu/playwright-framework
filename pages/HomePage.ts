import {Page, expect} from '@playwright/test'
import {BasePage} from './BasePage'
import locators from '../locators/locators.json'

export class HomePage extends BasePage {

    private readonly landingPageTitle: string = "Swag Labs"

    constructor(page: Page){
        super(page)
    }

    async userLogin(){
      await this.setText(locators.HomePage.username,'standard_user')
      await this.setText(locators.HomePage.password,'secret_sauce')
      await this.click(locators.HomePage.loginButton)
      await this.waitForTimeout(2000)
      await this.validatePageTitle(this.landingPageTitle)
    }

}