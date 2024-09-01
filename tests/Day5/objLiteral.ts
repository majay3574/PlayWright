// Define the supportedBrowser type
type supportedBrowser = 'Chrome' | 'Safari';

// Define the browserVersion type
type browserVersion = 121 | 123;


// Define the browserProfile type as an object literal
type browserProfile = {
    browser: supportedBrowser;
    version: browserVersion;
};
/*  */
// Define a function that takes a browserProfile as an argument
function launchBrowser(profile: browserProfile) {
    if (profile.browser === 'Chrome') {
        console.log(`Launching ${profile.browser} version ${profile.version}`);
        // Additional logic to launch Chrome can be added here
    } else {
        console.log(`Browser ${profile.browser} is not supported for launching.`);
    }
}

// Call the function with a valid browser profile
let chromeProfile: browserProfile = {
    browser: 'Chrome',
    version: 121
};

launchBrowser(chromeProfile); // Output: Launching Chrome version 121

let safariProfile: browserProfile = {
    browser: 'Safari',
    version: 123
};

launchBrowser(safariProfile); // Output: Browser Safari is not supported for launching.
console.log(safariProfile.browser);