import {test as baseTest, expect} from '@playwright/test'
import { PageFixtures } from './page-fixture'

type Fixtures = {
    pages: PageFixtures
}

export const test = baseTest.extend<Fixtures>({
   
    pages: async({page},use)=>{
        use(new PageFixtures(page))
    }
})

export{expect}