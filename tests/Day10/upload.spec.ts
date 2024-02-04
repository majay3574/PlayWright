import {test,expect} from "@playwright/test";
import path from "path"
 
 

    test(`T001 - File upload by set input files`,async({page})=>{
        await page.goto("https://www.leafground.com/file.xhtml")
        const card =  page.locator(".card").filter({has:page.getByText("Basic Upload")})
        await page.waitForTimeout(5000);
        await card.locator("input[type='file']").setInputFiles([path.join(__dirname, 'testleaf.jpg')])
        await expect(card.locator(".ui-fileupload-filename")).toContainText("testleaf.jpg")
        await page.waitForTimeout(5000);
    })
 
    test(`T002 - File upload by event handler`,async({page})=>{
  
        await page.goto("https://the-internet.herokuapp.com/upload")
        const fileChooserPromise = page.waitForEvent("filechooser",{timeout:10000})
        await page.locator("#drag-drop-upload").click()
        await page.waitForTimeout(5000);
        const fileChooser = await fileChooserPromise
        await fileChooser.setFiles([path.join(__dirname, 'testleaf.jpg'),
                                    path.join(__dirname, 'testleaf.jpg')])
        await page.waitForTimeout(5000);
        await expect(page.locator("#drag-drop-upload")).toHaveClass(/dz-success-mark/)
    })

    test('T003 - File upload by using exact path', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload');
        const filePath = 'C:\Users\AjayMichael\PlayWright'; 
        const fileInput = page.locator('input#file-upload');
        await fileInput.setInputFiles(path.join(filePath, 'testleaf.jpg'));
        await page.waitForTimeout(5000);
          
    });
    