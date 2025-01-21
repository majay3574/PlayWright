class Browser {
    browserName: string;
    browserVersion: string;
  
    constructor(browserName: string, browserVersion: string) {
      this.browserName = browserName;
      this.browserVersion = browserVersion;
    }
  
    openURL(url: string): void {
      console.log(`${this.browserName} is opening the URL: ${url}`);
    }
  
    closeBrowser(): void {
      console.log(`${this.browserName} is closing.`);
    }
  
    navigateBack(): void {
      console.log(`${this.browserName} is navigating back.`);
    }
  }
  

  class Chrome extends Browser {
    constructor(browserVersion: string) {
      super('Chrome', browserVersion);
    }
  
    openIncognito(): void {
      console.log('Opening Chrome in incognito mode.');
    }
  
    clearCache(): void {
      console.log('Clearing Chrome cache.');
    }
  }
  

  class Edge extends Browser {
    constructor(browserVersion: string) {
      super('Edge', browserVersion);
    }
  
    takeSnap(): void {
      console.log('Taking a screenshot in Edge.');
    }
  
    clearCookies(): void {
      console.log('Clearing cookies in Edge.');
    }
  }
  
  
  class Safari extends Browser {
    constructor(browserVersion: string) {
      super('Safari', browserVersion);
    }
  
    readerMode(): void {
      console.log('Enabling reader mode in Safari.');
    }
  
    fullScreenMode(): void {
      console.log('Enabling full-screen mode in Safari.');
    }
  }
  
  // Demonstration
  const chrome = new Chrome('118.0.5993.89');
  chrome.openURL('https://www.google.com');
  chrome.openIncognito();
  chrome.clearCache();
  chrome.navigateBack();
  chrome.closeBrowser();
  
  console.log('-------------------------');
  
  const edge = new Edge('119.0.2224.34');
  edge.openURL('https://www.microsoft.com');
  edge.takeSnap();
  edge.clearCookies();
  edge.navigateBack();
  edge.closeBrowser();
  
  console.log('-------------------------');
  
  const safari = new Safari('17.0');
  safari.openURL('https://www.apple.com');
  safari.readerMode();
  safari.fullScreenMode();
  safari.navigateBack();
  safari.closeBrowser();