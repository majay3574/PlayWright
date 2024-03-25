import { Page, Browser } from 'playwright';
import { LoginPage } from './loginPage.spec';
import { utils } from '../utils';
import cerdintial from "../Data/usercerdintial.json"
import test from '@playwright/test';
let page: Page;
let browser: Browser;
let loginPage: LoginPage;



test('create',async()=>{
    loginPage.launchbrowser()
loginPage.login(cerdintial.un, cerdintial.pw)
})