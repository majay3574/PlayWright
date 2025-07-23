import test, { Frame, Locator, Page } from "@playwright/test"

test('frame test', async ({ page }) => {
    test.info().annotations.push({ type: 'author', description: 'Ajay Michael' });

    async function findElementInAllFrames(
        page: Page,
        selector: string,
        timeout: number = 10000
    ): Promise<Locator | null> {
        const visited = new Set<Frame>();

        async function search(frame: Frame): Promise<Locator | null> {
            if (visited.has(frame)) return null;
            visited.add(frame);

            try {
                const element = frame.locator(selector);
                if (await element.count() > 0) {
                    await element.first().waitFor({ timeout });
                    return element.first();
                }
            } catch (e) {
                // Silent fail and continue to next frame
            }

            for (const child of frame.childFrames()) {
                const result = await search(child);
                if (result) return result;
            }

            return null;
        }

        return await search(page.mainFrame());
    }
    
    await page.goto(`https://ui.vision/demo/webtest/frames`, { waitUntil: 'load' });

    const targetElement1 = await findElementInAllFrames(page, "//input[@name='mytext1']");
    await targetElement1?.fill("Michael")
    const targetElement2 = await findElementInAllFrames(page, "//input[@name='mytext2']");
    await targetElement2?.fill("Michael")
    const targetElement3 = await findElementInAllFrames(page, "//input[@name='mytext3']");
    await targetElement3?.fill("Ajay");
    const targetElement4 = await findElementInAllFrames(page, "//input[@name='mytext4']");
    await targetElement4?.fill("Michael")
    const checkBox = await findElementInAllFrames(page, "[data-value='Hi, I am the UI.Vision IDE']");
    await checkBox?.check();
    const DD = await findElementInAllFrames(page, "//span[text()='Choose']");
    await DD?.click();
    const DDValue = await findElementInAllFrames(page, "//span[text()='Well, now I know :-)']");
    if (DDValue) {
        await DDValue.last().click(); 
    } else {
        throw new Error("Element not found in any frame");
    }

    await page.waitForTimeout(5000);




})