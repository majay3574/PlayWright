// Superclass Browser
class Browser {
    browserName: string;
    browserVersion: string;

    constructor(browserName: string, browserVersion: string) {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }

    // Method to open a URL
    openURL(url: string): void {
        console.log(`${this.browserName} is opening URL: ${url}`);
    }

    // Method to close the browser
    closeBrowser(): void {
        console.log(`${this.browserName} is now closing.`);
    }

    // Method to navigate back
    navigateBack(): void {
        console.log(`${this.browserName} is navigating back.`);
    }
}

// Subclass Chrome
class Chrome extends Browser {
    constructor(browserVersion: string) {
        super('Chrome', browserVersion);
    }

    // Chrome specific method to open Incognito mode
    openIncognito(): void {
        console.log(`${this.browserName} is opening in Incognito mode.`);
    }

    // Chrome specific method to clear cache
    clearCache(): void {
        console.log(`${this.browserName} is clearing the cache.`);
    }
}

// Subclass Edge
class Edge extends Browser {
    constructor(browserVersion: string) {
        super('Edge', browserVersion);
    }

    // Edge specific method to take a snapshot
    takeSnap(): void {
        console.log(`${this.browserName} is taking a snapshot.`);
    }

    // Edge specific method to clear cookies
    clearCookies(): void {
        console.log(`${this.browserName} is clearing cookies.`);
    }
}

// Subclass Safari
class Safari extends Browser {
    constructor(browserVersion: string) {
        super('Safari', browserVersion);
    }

    // Safari specific method to enable reader mode
    readerMode(): void {
        console.log(`${this.browserName} is switching to Reader Mode.`);
    }

    // Safari specific method to enable full screen mode
    fullScreenMode(): void {
        console.log(`${this.browserName} is switching to Full Screen mode.`);
    }
}

// Demonstration
// Creating Chrome object and calling methods
const chromeBrowser = new Chrome('116.0');
chromeBrowser.openURL('https://www.google.com');
chromeBrowser.openIncognito();
chromeBrowser.clearCache();
chromeBrowser.navigateBack();
chromeBrowser.closeBrowser();

// Creating Edge object and calling methods
const edgeBrowser = new Edge('117.0');
edgeBrowser.openURL('https://www.microsoft.com');
edgeBrowser.takeSnap();
edgeBrowser.clearCookies();
edgeBrowser.navigateBack();
edgeBrowser.closeBrowser();

// Creating Safari object and calling methods
const safariBrowser = new Safari('15.2');
safariBrowser.openURL('https://www.apple.com');
safariBrowser.readerMode();
safariBrowser.fullScreenMode();
safariBrowser.navigateBack();
safariBrowser.closeBrowser();
