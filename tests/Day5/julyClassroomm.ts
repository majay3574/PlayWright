/**
 * Define the type supportedBrowser = Chrome|Edge
 * Define the browserVersion - 127|126
 * Define the type browserProfile - supportedBrowser & browserVersion
 * (object literal)
 * Define the function and pass the argument (browser)
 * Launch the Chrome browser
 * Call the function
 */

type SupportedBrowser = 'Chrome' | 'Edge';
type BrowserVersion = 127 | 126;
type BrowserProfile = {
    browser: SupportedBrowser;
    version: BrowserVersion;
};

function launchBrowser(browserProfile: BrowserProfile): void {
    if (browserProfile.browser === 'Chrome') {
        console.log(`Launching Chrome version ${browserProfile.version}`);
        // Code to launch Chrome would go here
    } else if (browserProfile.browser === 'Edge') {
        console.log(`Launching Edge version ${browserProfile.version}`);
        // Code to launch Edge would go here
    } else {
        console.log('Unsupported browser');
    }
}

// Create a browser profile for Chrome version 127
const chromeProfile: BrowserProfile = {
    browser: 'Chrome',
    version: 127
};

// Call the function to launch the Chrome browser
launchBrowser(chromeProfile);
