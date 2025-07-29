import test, { expect, Frame, Locator, Page } from "@playwright/test"

test('frame test', async ({ page }) => {
    test.info().annotations.push({ type: 'author', description: 'Ajay Michael' });

    /**
    * Recursively searches for an element matching the selector across all frames in the page.
    *
    * @param page - The Playwright Page instance to start the search from.
    * @param selector - The CSS or XPath selector to locate the element.
    * @param timeout - Maximum time (in ms) to wait for the element to appear. Default is 10000 ms.
    * @returns A Promise that resolves to the first matching Locator, or null if not found.
    */
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
                    await element.first().waitFor({ timeout, state: 'visible'});
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
        await page.waitForTimeout(500);
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
    const DDValue = await findElementInAllFrames(page, "(//span[text()='Well, now I know :-)'])[2]");
    if (DDValue) {
        await DDValue.click();
    } else {
        throw new Error("Element not found in any frame");
    }
    const save = await findElementInAllFrames(page, "//span[text()='Next']");
    await save!.click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000)
    const shortText = await findElementInAllFrames(page, "//span[text()='Enter a short text']/following::input[1]");
    if (shortText) {
        await shortText.fill("Good Morning Ajay");
    } else {
        throw new Error("Visible input element not found");
    }
    const longAnswer = await findElementInAllFrames(page, "//span[text()='Enter a long answer']/following::textarea[1]");
    if (longAnswer) {
        await longAnswer.fill("Good Morning Ajay");
    } else {
        throw new Error("Visible input element not found");
    }

    const submitBtn = await findElementInAllFrames(page, "//span[text()='Submit']");
    await submitBtn?.click();

    await page.waitForLoadState('load')
    const form = await findElementInAllFrames(page, "//div[text()='Form Filling Demo Page']");
    let verificationText = await form?.innerText();
    console.log(verificationText);
    expect(verificationText?.toString()).toContain("Form Filling Demo Page");
})

test.skip(`test2`, async ({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.click("//a[text()='Iframe with in an Iframe']")

})