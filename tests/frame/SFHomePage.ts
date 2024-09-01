import { Page ,Locator} from "@playwright/test";
import { SFLogin } from "./SalesForceLogin";

export class SFHomePage extends SFLogin{


    appLauncher:Locator
    viewAll:Locator
    searchmodule:Locator
    moduleName:Locator
    modName:string
    constructor(page:Page){
        super(page)
        this.appLauncher=this.page.locator(".slds-icon-waffle")
        this.viewAll=this.page.getByRole('button',{name:'View All'})
        this.searchmodule=this.page.locator("//p[text()='Sales']")
        //this.moduleName=this.page.locator(`a[title='${this.modName}']`)
        this.moduleName=this.page.locator(`a[title='Leads']`)
         
    }

    async clickAppLauncher():Promise<string>{
      await this.appLauncher.click();
      const title=await this.page.title()
      return title;
    }

    async clickViewAll(){
        await this.viewAll.click();

    }

    async searchModule(data:string){
       await  this.searchmodule.fill(data)
    }

    async clickLeadModule(){
      //  await this.moduleName(Lead).click();
        await this.moduleName.click();

    }

    async clickAccountModule(){
        //  await this.moduleName(Lead).click();
          await this.moduleName.click();
  
      }
    
}