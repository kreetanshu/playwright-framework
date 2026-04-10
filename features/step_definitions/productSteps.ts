import { Given, When, Then } from '@cucumber/cucumber'
import { CustomWorld } from '../hooks/world';


Given('User is able to view the login page', async function (this: CustomWorld) {
    await this.pages.basePage.navigateTo("https://www.saucedemo.com/")
});

Then('User is logged in to the application', async function (this: CustomWorld) {
    await this.pages.basePage.waitForTimeout(2000)
    await this.pages.homePage.userLogin()
});

Given('I am able to validate a product price', async function (this: CustomWorld) {
    let productInTest = 'Swag Labs'
    await this.pages.productPage.validateProductPrice(productInTest)
});

Then('I am able to validate product list count', async function (this: CustomWorld, dataTable) {
    //const context = this.page.context()
    //context.tracing.start({screenshots: true, snapshots:true})
    const productList = dataTable.raw().flat()
    await this.pages.productPage.validateProductList(productList)
    //context.tracing.stop({ path: '.../../trace.zip' })
});