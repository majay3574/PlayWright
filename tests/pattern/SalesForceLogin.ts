import { Page,Locator } from '@playwright/test';

export class SFLogin{

    page:Page;
    usernameField:Locator
    passwordField:Locator
    loginButton:Locator

    constructor(page:Page){
        this.page=page;
        this.usernameField=this.page.locator("#username")
        this.passwordField=this.page.locator("#password")
        this.loginButton=this.page.locator("#Login")
    }

    async loadUrl(url:string){
            await this.page.goto(url)
    }

    async enterCredentials(username:string,password:string){

        //this -->SFLogin class
        //usernamefield->locator -->been initialized in constructor
        //fill -->to type data -->user input through runtime
     await this.usernameField.isVisible();
      await this.usernameField.fill(username)
      await this.passwordField.fill(password)
      await this.loginButton.click();
   }










}