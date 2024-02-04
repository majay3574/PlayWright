import test from "@playwright/test"

test(`download file from destination`,async({page})=>{
    page.goto("")
    const downloadPromise = page.waitForEvent('download');
    await page.getByText('Download file').click();
    const download = await downloadPromise;


    await download.saveAs('/path/to/save/at/' + download.suggestedFilename());
})