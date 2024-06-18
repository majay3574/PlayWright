/* import { Test,chromium, Browser, Page } from '@playwright/test';
import { readFile } from 'fs';

Test ('',async ({page}) => {
  
    
    const html: string = await readFile("index.html", "utf-8"); // You need to implement readFile function for reading HTML file
    await page.setContent(html);

    // focus inside the annoying border to enable scroll
    await page.click(".document_container");

    for (let i = 0; i < 10; i++) {
        await page.mouse.wheel({ deltaY: 2500 });
        await page.waitForTimeout(500);
    }

    // strip out the annoying border that messes up PDF generation
    await page.evaluate(() => {
        const el = document.querySelector<HTMLElement>(".document_scroller");
        if (el) {
            el.parentElement?.appendChild(el.querySelector(".document_container")!);
            el.remove();
        }
    });
    
    await page.emulateMedia({ media: 'screen' });
    await page.pdf({ path: 'sales_report.pdf' });
    await browser.close();
})();
 */