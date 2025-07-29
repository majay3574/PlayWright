import test, { expect } from "@playwright/test"; 
import * as fs from 'fs';
import * as path from 'path';
import pdf from 'pdf-parse';
import { expectedText } from "./verificationText";

// Utility function to normalize extracted PDF text by removing extra whitespaces
function normalizeText(text: string) {
    return text.replace(/\s+/g, ' ').trim();
}

test(`PDF verification`, async ({ page }) => {
    // Define path for saving the generated PDF
    const pdfPath = path.join(__dirname, "tests/pdf_verfication/newPDF.pdf");

    // Ensure the directory exists before writing the PDF
    fs.mkdirSync(path.dirname(pdfPath), { recursive: true });

    // Navigate to the target URL
    await page.goto("https://playwright.dev/dotnet/");

    // Generate PDF of the current page and save to specified path
    await page.pdf({ path: pdfPath, format: "A4" });

    // Read and parse the generated PDF file
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);

    // Normalize extracted and expected text for reliable comparison
    const extractedText = normalizeText(data.text);
    const expected = normalizeText(expectedText);

    // Output the extracted PDF content to the console
    console.log(extractedText);

    // Assert that the extracted text matches the expected content
    expect(extractedText).toEqual(expected);
});
