import { Given, When, Then } from '@cucumber/cucumber'
import { CustomWorld } from '../hooks/world';


Given('User is able to view the login page', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    await this.pages.basePage.navigateTo("https://www.saucedemo.com/")
});

Then('User is logged in to the application', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    await this.pages.basePage.waitForTimeout(2000)
    await this.pages.homePage.userLogin()
});

Given('I am able to validate a product price', async function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    let productInTest = 'Swag Labs'
    await this.pages.productPage.validateProductPrice(productInTest)
});

Then('I am able to validate product list count', async function (this: CustomWorld, dataTable) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    const productList = dataTable.raw().flat()
    await this.pages.productPage.validateProductList(productList)
});