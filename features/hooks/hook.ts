import { CustomWorld } from "./world";
import { Before, After, BeforeAll,AfterAll,Status} from '@cucumber/cucumber';
import path from 'path'
import fs  from 'fs'
import dotenv from 'dotenv'

Before(async function(this: CustomWorld){
  await this.init()
  dotenv.config();
})

After(async function (this: CustomWorld) {
  await this.tearDown()  
})

After(async function (this: CustomWorld,scenario) {
    if(scenario.result?.status==Status.FAILED){
        const screenshotPath = path.resolve(`screenshots/${Date.now()}.png`)
        fs.mkdirSync(path.dirname(screenshotPath),{recursive: true})
        await this.page.screenshot({path: screenshotPath, fullPage: true})

        const imageBuffer = fs.readFileSync(screenshotPath)
        this.attach(imageBuffer,'image/png')
    }
})