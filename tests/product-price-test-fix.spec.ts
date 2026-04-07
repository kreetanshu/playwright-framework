import { test, expect } from '../utils/test-base';

test.describe('Product Price Test using Fixtures', () => {

  test.beforeEach(async ({pages}) => {
    await pages.homePage.navigateTo('/');
    await pages.homePage.waitForTimeout(2000)
  });

  test('Validate Product Price', async ({ pages }) => {
     await pages.homePage.userLogin();
     await pages.productPage.validateProductPrice();
     await pages.homePage.waitForTimeout(3000)
  });
});