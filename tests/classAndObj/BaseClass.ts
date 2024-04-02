import page, { Page } from "@playwright/test"
import { url } from "inspector"

export class BaseClass{

   page:Page
constructor(page:Page){
    this.page=page
}


async goto(url:string){
    await this.page.goto(url)
}

async login(username:string,password:string){
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[id="password"]', password);
    await this.page.click('input[id="Login"]');
    await this.page.waitForLoadState('load');
}



}