import test from '@playwright/test';
import { LoginPage } from '../pages/loginPage.spec';
import data from '../Data/usercerdintial.json'



test(`Create a lead Account`,async({page})=>{
    const login = new  LoginPage(page)
    login.login(data.un,data.pw)
})
