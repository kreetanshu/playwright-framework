import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { HomePage } from '../pages/HomePage';


test.describe('Login Test', () => {
  // test.beforeAll(async () => {
  //   browser = await chromium.launch({ headless: false, channel: 'chrome', args: ['--incognito'] })
  //   page = await browser.newPage()
  // })
  let homePage: HomePage;

  // test.beforeAll(async()=>{
  //   console.log("-----Before All--------")
  // })

  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    await homePage.navigateTo('/');
    await homePage.waitForTimeout(2000)
  });

  test('Login', async ({ page }) => {
     await homePage.userLogin();
     await homePage.waitForTimeout(3000)
    // expect(page).toHaveURL(/.*new-cars/)
  });
});