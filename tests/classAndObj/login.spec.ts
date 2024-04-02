import { BaseClass } from "./BaseClass";
import test from '@playwright/test';



test(`login`,async({page})=>{
    const base= new BaseClass(page)
    base.goto("https://login.salesforce.com/?locale=in")
    base.login("majay3574@gmail.com","Ajaymichael@8428")
})