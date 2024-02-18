/* Use new Javascript File Name: 02_Conditional.js
 
Objective: Learn if - else and switch - case
Create 2 functions : launchBrowser, runTests
where,
a) launchBrowser need to take input as browserName (string) and do not return any
    - use if, else (chrome or otherwise)
    - just print
b) runTests need to take input as testType (string) and do not return any
    - use switch case (smoke, sanity, regression, default (smoke))
    - just do print

Call that function from the javascript

Time: 15 Minutes */

function launchBrowser(browserName) {
    if (browserName === 'chrome') {
        console.log('Launching Chrome browser');
    } else {
        console.log('Launching browser other than Chrome');
    }
}

launchBrowser('Chrome');


function runTests(testType) {
    switch (testType) {
        case 'smoke':
            console.log('Running smoke tests');
            break;
        case 'sanity':
            console.log('Running sanity tests');
            break;
        case 'regression':
            console.log('Running regression tests');
            break;
        default:
            console.log('Running default smoke tests');
            break;
    }
}

runTests('regression');
