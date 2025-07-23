import test, { chromium } from "@playwright/test";
import fs from "fs";

const jobTitle = "Playwright";
const speficYears: string | null = null;
const Years = { 1: "1 year", 2: "2 years", 3: "3 years", 4: "4 years", 5: "5 years" };
const jobDD = (y: number) => `//span[text()='${Years[y]}']`;
const location = "Chennai";

test("Search job from Naukri and save to JSON", async () => {
    const Instance = await chromium.launch({
        channel: "chrome",
        args: ["--disable-notifications", "--disable-web-security"],
        headless: true,
    })
    const browser = await Instance.newContext();
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36'
    });

    await page.goto("https://www.naukri.com/jobs", { waitUntil: "domcontentloaded" });

    await page.locator("//span[text()='Search jobs here']//following::button[1]").click();
    await page.getByPlaceholder("Enter keyword / designation / companies").fill(jobTitle);

    if (speficYears === null) {
        await page.locator("#experienceDD").click();
        await page.click(jobDD(2));
    } else {
        await page.locator("#experienceDD").fill(speficYears);
    }

    await page.getByPlaceholder("Enter location").fill(location);
    await page.locator("//button//span[text()='Search']").click();
    await page.waitForSelector(".cust-job-tuple");

    const jobData: any[] = [];

    const pageLinks = await page.locator("[class^='styles_pages'] a").all();
    const totalPages = pageLinks.length || 1;

    for (let i = 0; i < totalPages; i++) {
        if (i > 0) {
            await page.locator("[class^='styles_pages'] a").nth(i).click();
            await page.waitForSelector(".cust-job-tuple");
        }

        const jobElements = await page.$$(".cust-job-tuple");

        for (const job of jobElements) {
            const [titleElement, companyElement, expElement, packageElement] = await Promise.all([
                job.$("h2 > a.title"),
                job.$(".comp-name"),
                job.$(".expwdth"),
                job.$("[class$='rupee sal'] span"),
            ]);

            const [title, href, company, experience, pkg] = await Promise.allSettled([
                titleElement?.getAttribute("title") || "",
                titleElement?.getAttribute("href") || "",
                companyElement?.textContent() || "",
                expElement?.textContent() || "",
                packageElement?.textContent() || "NA",
            ]);

            jobData.push({
                title: title.status === "fulfilled" ? title.value?.trim() : "",
                href: href.status === "fulfilled" ? href.value : "",
                company: company.status === "fulfilled" ? company.value?.trim() : "",
                experience: experience.status === "fulfilled" ? experience.value?.trim() : "",
                package: pkg.status === "fulfilled" ? (pkg.value?.trim() || "NA") : "NA",
            });
        }
    }

    // Save data to a JSON file
    const outputPath = "data/jobs.json";
    fs.writeFileSync(outputPath, JSON.stringify(jobData, null, 2), "utf-8");
    console.log(`✅ Job data saved to ${outputPath}`);
});

test.only("Check if JSON file exists", async () => {
    // 🔁 Dynamic inputs
    const job = "playwright";
    const location = "india";
    const experience = 2;

    // 🌐 Build dynamic search URL
    const searchUrl = `https://www.naukri.com/${job}-jobs-in-${location}?k=${job}&l=${location}&experience=${experience}`;

    const Instance = await chromium.launch({
        channel: "chrome",
        args: ["--disable-notifications", "--disable-web-security"],
        headless: true,
    })
    const browser = await Instance.newContext();
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36'
    });

    await page.goto(searchUrl, { waitUntil: "domcontentloaded" });

    const allJobData: any[] = [];

    const getJobDataFromPage = async () => {
        const jobs = await page.$$(".cust-job-tuple");

        for (const job of jobs) {
            const [titleEl, linkEl, companyEl, expEl, pkgEl] = await Promise.all([
                job.$("h2 > a.title"),
                job.$("h2 > a.title"),
                job.$(".comp-name"),
                job.$(".expwdth"),
                job.$("[class$='rupee sal'] span"),
            ]);

            const [title, href, company, experience, pkg] = await Promise.allSettled([
                titleEl?.getAttribute("title") || "",
                linkEl?.getAttribute("href") || "",
                companyEl?.textContent() || "",
                expEl?.textContent() || "",
                pkgEl?.textContent() || "NA",
            ]);

            allJobData.push({
                title: title.status === "fulfilled" ? title.value?.trim() : "",
                href: href.status === "fulfilled" ? href.value : "",
                company: company.status === "fulfilled" ? company.value?.trim() : "",
                experience: experience.status === "fulfilled" ? experience.value?.trim() : "",
                package: pkg.status === "fulfilled" ? (pkg.value?.trim() || "NA") : "NA",
            });
        }
    };

    // ⏩ Scrape first page
    await page.waitForSelector(".cust-job-tuple", { timeout: 10000 });
    await getJobDataFromPage();

    // 🔁 Handle pagination
    while (true) {
        const nextBtn = page.locator("a[aria-label='Next']");
        if (!(await nextBtn.isVisible())) break;

        const isDisabled = await nextBtn.getAttribute("class");
        if (isDisabled?.includes("disabled")) break;

        await nextBtn.click();
        await page.waitForSelector(".cust-job-tuple");
        await getJobDataFromPage();
    }

    // 💾 Save to JSON file
    const outputPath = "jobs.json";
    fs.writeFileSync(outputPath, JSON.stringify(allJobData, null, 2), "utf-8");
    console.log(`✅ ${allJobData.length} jobs saved to ${outputPath}`);
});

