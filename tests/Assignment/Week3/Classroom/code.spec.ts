import {test,  chromium } from "@playwright/test";


test(`Multi Browser`,async({context})=>{

const page =await context.newPage()


await page.goto("https://www.google.com/")
})

