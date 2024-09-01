// Define a function that takes a browserProfile as an argument
function launchBrowser(profile) {
    if (profile.browser === 'Chrome') {
        console.log("Launching ".concat(profile.browser, " version ").concat(profile.version));
        // Additional logic to launch Chrome can be added here
    }
    else {
        console.log("Browser ".concat(profile.browser, " is not supported for launching."));
    }
}
// Call the function with a valid browser profile
var chromeProfile = {
    browser: 'Chrome',
    version: 121
};
launchBrowser(chromeProfile); // Output: Launching Chrome version 121
var safariProfile = {
    browser: 'Safari',
    version: 123
};
launchBrowser(safariProfile); // Output: Browser Safari is not supported for launching.
console.log(safariProfile.browser);
