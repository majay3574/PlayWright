
function logTestResult(testName: string, result?: string, statusIndicator: string = "PASS"): void {
    console.log(`${testName}: ${result ? result : "Test result"} - ${statusIndicator}`);
}
 
logTestResult("Login Functionality Test")