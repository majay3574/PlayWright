type supportedBrowser = "Chrome" | "Safari";
type browserVersion = 121 | 123;
type browserProfile = supportedBrowser & browserVersion;

function launchBrowser(browser: browserProfile): void {
    console.log(`Launching ${browser} browser...`);
   
}

// Launching Chrome browser
launchBrowser("Chrome" as browserProfile);


let supportedBrowser: "Chrome" | "Safari";
let browserVersion: 121 | 123;
let browserProfile: supportedBrowser & browserVersion;

function launchBrowse(browser: browserProfile): void {
    console.log(`Launching ${browser} browser...`);
}

// Launching Chrome browser
launchBrowse("Chrome" as browserProfile);
