import fs from 'fs';
import fetch from 'node-fetch';
import { TestInfo } from '@playwright/test';

// Groq API Configuration
const apiKey = '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';
const model = 'llama-3.3-70b-versatile';

type ErrorContext = {
    filePath: string;
    lineNum: number;
    colNum: number;
    errorLine: string;
    codeFrame: string;
    errorMessage: string;
    testTitle: string;
};

export async function extractErrorContext(testInfo: TestInfo): Promise<ErrorContext | null> {
    if (!testInfo?.error?.stack) {
        console.log('✅ No stack trace available.');
        return null;
    }

    const stackLines = testInfo.error.stack.split('\n');
    const match = stackLines.find(line => line.includes(testInfo.file));

    if (!match) {
        console.log('❌ No matching line found in stack trace');
        return null;
    }

    console.log('📦 Stack line being matched:', match);

    const matchRegex = /at .*?\(?(.+):(\d+):(\d+)\)?/;
    const matchResult = match.match(matchRegex);

    if (!matchResult) {
        console.log('❌ Regex did not match stack trace format');
        return null;
    }

    const [, filePath, lineNumStr, colStr] = matchResult;
    const lineNum = parseInt(lineNumStr);
    const colNum = parseInt(colStr);

    const fileLines = fs.readFileSync(filePath, 'utf-8').split('\n');
    const errorLine = fileLines[lineNum - 1];

    const codeFrame = `
${lineNum - 2} | ${fileLines[lineNum - 3] || ''}
${lineNum - 1} | ${fileLines[lineNum - 2] || ''}
${lineNum} | ${errorLine}
${' '.repeat(colNum + lineNum.toString().length + 3)}^
${lineNum + 1} | ${fileLines[lineNum] || ''}
${lineNum + 2} | ${fileLines[lineNum + 1] || ''}
`.trim();

    return {
        filePath,
        lineNum,
        colNum,
        errorLine,
        codeFrame,
        errorMessage: testInfo.error.message,
        testTitle: testInfo.title
    };
}

export async function groqAnalyzer(ctx: ErrorContext) {
    const prompt = `
🔧 Error Message:
${ctx.errorMessage}

💥 Error Line:
${ctx.errorLine}

🧩 Code Frame:
${ctx.codeFrame}
`.trim();

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model,
                messages: [
                    {
                        role: "system",
                        content: `
You are an experienced Automation Tester.
You will be given a Playwright test failure including message, code line and code frame.
Give the exact reason and fix for this error.
Output your response clearly and concisely.
                        `.trim()
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.3,
                max_tokens: 3000
            })
        });

        const data: {
            choices?: { message?: { content?: string } }[];
        } = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const content = data.choices?.[0]?.message?.content;

        if (!content) {
            throw new Error("⚠️ Invalid response format from Groq API");
        }

        console.error(`❌ Test Failed: ${ctx.testTitle}`);
        console.error(`📄 File: ${ctx.filePath}`);
        console.error(`🧨 Message: ${ctx.errorMessage}`);
        console.error(`🔍 Code Frame:\n${ctx.codeFrame}`);
        console.log(`✅ AI Suggestion:\n\n${content}`);
    } catch (err: any) {
        console.error('❌ Groq AI Error:', err.message);
    }
}
