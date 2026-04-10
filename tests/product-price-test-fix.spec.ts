import { test, expect } from '../fixtures/my-fixture';

test.describe('Product Price Test using Fixtures', () => {

  test.beforeEach(async ({pages}) => {
    await pages.homePage.navigateTo('/');
    await pages.homePage.waitForTimeout(2000)
  });

  let productInTest = 'Swag Labs'

  test('Validate Product Price', async ({ pages }) => {
     await pages.homePage.userLogin();
     await pages.productPage.validateProductPrice(productInTest);
     await pages.homePage.waitForTimeout(3000)
  });
});