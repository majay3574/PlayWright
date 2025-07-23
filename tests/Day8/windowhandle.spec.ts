import test from "@playwright/test"
import { log } from "console";


test(`handling alert`, async ({ page, context }) => {
    page.goto("http://leafground.com/window.xhtml");
    const [multiPage] = await Promise.all([  context.waitForEvent('page'), page.getByText("Open Multiple", { exact: true }).click() ])
    console.log(multiPage);

    /* // no of pages getting opened
    const pages = multiPage.context().pages();
    console.log(`No of pages opened: ${pages.length}`);
    pages.forEach(tabs => {
        const tabName = tabs.url();
        console.log(`URL of the page is : ${tabName}`);
    })
    let webPage: any;
    for (let index = 0; index < pages.length; index++) {
        const title = await pages[index].title();
        console.log(`title of the page: ${title}`);
        if (title === 'Web Table') {
            webPage = pages[index];
            console.log(webPage);
            
        }
        //console.log(webPage)
    }
    await webPage.fill("input[placeholder='Search']", "Amy Elsner");
    await webPage.waitForTimeout(5000); */
})