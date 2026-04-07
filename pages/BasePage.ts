import {Page, expect} from '@playwright/test'

export class BasePage {

    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async navigateTo(url: string){
        await this.page.goto(url)
    }

    async hover(selector: string) {
        await this.page.locator(selector).hover()
    }

    async click(selector: string){
        await this.page.locator(selector).click()
    }

    async setText(selector: string, text: string){
        await this.page.locator(selector).fill(text)
    }

    async getText(selector: string): Promise<string>{
        return await this.page.locator(selector).innerText()
    }

    async waitForTimeout(timeout: number){
        await this.page.waitForTimeout(timeout)
    }

    async validatePageTitle(expTitle: string){
        await expect(this.page).toHaveTitle(expTitle);
    }
}