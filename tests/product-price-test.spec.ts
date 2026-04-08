import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';


test.describe('Product Price Test', () => {

  let homePage: HomePage;
  let productPage: ProductPage;
  let productInTest = 'Swag Labs'

  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    await homePage.navigateTo('/');
    await homePage.waitForTimeout(2000)
  });

  // test('Login', async ({ page }) => {
  //    await homePage.userLogin();
  //    await homePage.waitForTimeout(3000)
  // });

  test.skip('Validate Product Price', async ({ page }) => {
     await homePage.userLogin();
     await productPage.validateProductPrice(productInTest);
     await homePage.waitForTimeout(3000)
  });
});