// custom-html-reporter.ts
import fs from 'fs';
import path from 'path';
import { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';

class CustomHTMLReporter implements Reporter {
  private results: any[] = [];
  private startTime: number = 0;

  onBegin(config: any, suite: any) {
    this.startTime = Date.now();
  }

  async onTestEnd(test: TestCase, result: TestResult) {
    const screenshotAttachment = result.attachments.find(att => att.name === 'screenshot' && att.contentType === 'image/png');
    let screenshotBase64 = '';

    if (screenshotAttachment && screenshotAttachment.path) {
      try {
        const imageBuffer = fs.readFileSync(screenshotAttachment.path);
        screenshotBase64 = imageBuffer.toString('base64');
      } catch (e) {
        console.error('Error reading screenshot:', e);
      }
    }

    this.results.push({
      title: test.title,
      file: test.location.file,
      status: result.status,
      duration: result.duration,
      error: result.error?.message,
      stack: result.error?.stack,
      screenshotBase64
    });
  }

  async onEnd(result: FullResult) {
    const totalDuration = ((Date.now() - this.startTime) / 1000).toFixed(2);
    const passed = this.results.filter(r => r.status === 'passed').length;
    const failed = this.results.filter(r => r.status === 'failed').length;
    const skipped = this.results.filter(r => r.status === 'skipped').length;

    const html = `
    <html>
    <head>
      <title>Playwright Custom HTML Report</title>
      <style>
        body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f5f5f5; color: #333; }
        h1 { color: #222; }
        .summary { margin-bottom: 20px; }
        .summary span { margin-right: 15px; font-weight: bold; }
        .test-card {
          background: white;
          padding: 15px;
          margin-bottom: 15px;
          border-left: 6px solid gray;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          border-radius: 8px;
        }
        .passed { border-color: #4caf50; }
        .failed { border-color: #f44336; }
        .skipped { border-color: #ff9800; }
        .error { color: #e53935; white-space: pre-wrap; background: #fff3f3; padding: 10px; border-radius: 6px; margin-top: 10px; }
        img { margin-top: 10px; max-width: 100%; border-radius: 4px; border: 1px solid #ccc; }
      </style>
    </head>
    <body>
      <h1>Playwright Custom HTML Report</h1>
      <div class="summary">
        <span>Total Duration: ${totalDuration}s</span>
        <span style="color: green;">Passed: ${passed}</span>
        <span style="color: red;">Failed: ${failed}</span>
        <span style="color: orange;">Skipped: ${skipped}</span>
      </div>
      ${this.results.map(r => `
        <div class="test-card ${r.status}">
          <strong>${r.title}</strong> <small>(${r.file})</small><br>
          <span>Status: ${r.status.toUpperCase()}</span> | Duration: ${(r.duration / 1000).toFixed(2)}s
          ${r.error ? `<div class="error">${r.error}<br><pre>${r.stack || ''}</pre></div>` : ''}
          ${r.screenshotBase64 ? `<img src="data:image/png;base64,${r.screenshotBase64}" alt="Screenshot"/>` : ''}
        </div>
      `).join('')}
    </body>
    </html>
    `;

    const reportPath = path.join(process.cwd(), 'reports', `report-${Date.now()}.html`);
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, html);
    console.log(`\n📊 HTML report generated at: ${reportPath}\n`);
  }
}

export default CustomHTMLReporter;