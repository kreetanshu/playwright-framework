import {test as baseTest, Page, expect} from '@playwright/test'
import { PageFixtures } from '../fixtures/page-fixture'

import { BasePage } from '../pages/BasePage'

type Fixtures = {
    pages: PageFixtures;
}

export const test = baseTest.extend<Fixtures>({
    pages: async({page},use)=>{
        use(new PageFixtures(page))
    }
})

export{expect}

