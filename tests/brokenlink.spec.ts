import { chromium, test } from '@playwright/test';
import fetch from 'node-fetch';

test(`brokenLink`, async ({ page }) => {

    await page.goto('http://www.deadlinkcity.com/');
    await page.waitForLoadState('load');

    const links = await page.$$eval('a', anchors => anchors.map(anchor => anchor.href));
    console.log("Total number of links:", links.length); // Output the total number of links

    let brokenLinks = 0;

    for (const link of links) {
        if (!link) {
            console.log(link)

            // Use dynamic import to import node-fetch
            const fetch = await import('node-fetch');

            test(`brokenLink`, async ({ page }) => { // Added browser parameter      

                await page.goto('http://www.deadlinkcity.com/');
                await page.waitForLoadState('load');
                await page.setViewportSize({ width: 1280, height: 720 });

                const links = await page.$$eval('a', anchors => anchors.map(anchor => anchor.href));
                console.log("Total number of links:", links.length); // Output the total number of links

                let brokenLinks = 0;

                for (const link of links) {
                    if (!link) {
                        console.log("href attribute value is empty.");
                        continue;
                    }

                    try {
                        const response = await fetch.default(link); // Use fetch.default() to access the fetch function
                        if (response.status >= 400) {
                            console.log(`${link} ===> Broken Link`);
                            brokenLinks++;
                        } else {
                            console.log(`${link} ===> Not Broken Link`);
                        }
                    } catch (error) {
                        console.log(`${link} ===> Broken Link`);
                        brokenLinks++;
                    }
                }

                console.log("Total number of broken links:", brokenLinks);

                await page.context().close(); // Use page.context().close() instead of browser.close()
            });
            ("href attribute value is empty.");
            continue;
        }

        try {
            const response = await fetch(link);
            if (response.status >= 400) {
                console.log(`${link} ===> Broken Link`);
                brokenLinks++;
            } else {
                console.log(`${link} ===> Not Broken Link`);
            }
        } catch (error) {
            console.log(`${link} ===> Broken Link`);
            brokenLinks++;
        }
    }

    console.log("Total number of broken links:", brokenLinks);

    await page.close(); // Use browser.close() instead of page.close()
});
