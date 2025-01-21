const BrowserVersion = "Chrome"; 

function gerBrowserVersion() {
  let version;  // Declare a new variable to hold the value

  if (BrowserVersion.startsWith("Chrome")) {
    /* var BrowserVersion = 'edge'; 
    console.log(BrowserVersion); */
    /* let BrowserVersion = 'edge'; 
    console.log(BrowserVersion); */
    let version ='Chrome'
    console.log(version);
  } else {
    version = "edge";
    console.log(version);
  }
}

gerBrowserVersion();