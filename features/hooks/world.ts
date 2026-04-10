import { setWorldConstructor, IWorldOptions, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import {PageFixtures} from '../../fixtures/page-fixture'

export class CustomWorld extends World{

    page!: Page;
    browser!: Browser;
    browserContext!: BrowserContext;
    pages!: PageFixtures

    constructor(options: IWorldOptions){
        super(options)
    }

    async init(){
        this.browser = await chromium.launch({
            headless: false,
            args: ["--start-maximized","--incognito"]
        })
        this.browserContext = await this.browser.newContext();
        this.page= await this.browserContext.newPage();
        this.pages = new PageFixtures(this.page)
        await this.page.setViewportSize({ width: 1920, height: 1080 });
    }

    async tearDown(){
        await this.page.close();
        await this.browser.close()
    }
}

setWorldConstructor(CustomWorld)