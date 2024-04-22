PlayWright Installation
------------------------

*Visual Studio code
*NodeJS
*NVM -->to change version of nodejs(Not recommanded)


To install playwright in VS code

npm init playwright@latest
npm init playwright@latest --force

updating playwright

npm install -D @playwright/test@latest

allure
allure open allure-report

npm
npm install -g npm@latest
npm install -g npm

Csv installation
   npm install csv
   npm install csv-parse


C:\Users\AjayMichael\AppData\Roaming\npm
download ts execution
    npm install -g typescript
    npm install -g ts-node
	ts-node filename.ts
	npm uninstall -g typescript
	
To install typescript

npm install --save-dev typescript@3.6.0


-vv
npm list -g typescript

code Gen
    npx playwright codegen

execution policy -----> Get-ExecutionPolicy
                        Set-ExecutionPolicy
						
						RemoteSigned
						
Remove proxxy
 npm config rm proxy 
 
 
 npm config rm proxy
npm config rm https-proxy
npm config --global rm proxy
npm config --global rm https-proxy

npm config set registry "http://registry.npmjs.org"
npm config set strict-ssl false
						
Frames
  A Page can have one or more Frame objects attached to it. 
  Each page has a main frame and page-level interactions (like click) are assumed to operate in the main frame.
  
  Timeout	Default	Description
  
Test timeout	30000 ms	Timeout for each test, includes test, hooks and fixtures:
                            SET DEFAULT
                            config = { timeout: 60000 }
                            OVERRIDE
                            test.setTimeout(120000)
							
Expect timeout	5000 ms	    Timeout for each assertion:
                            SET DEFAULT
                            config = { expect: { timeout: 10000 } }
                            OVERRIDE
                            expect(locator).toBeVisible({ timeout: 10000 })
							
							
Promise
   The Promise in JavaScript may look quite complicated to understand at first sight, but in reality, it is quite simple and is not rocket science. In JavaScript, a promise is just like a promise that you make in real life to show that you are committed to doing something.

For example, 
I promise to get good marks in mathematics, and then this Promise has two outcomes, either it will be fulfilled (or resolved) or not fulfilled (or be rejected). So if I get good marks, the Promise is resolved, but if I fail to get good marks, it will not be resolved because I could not keep my Promise.

However, in JavaScript, a promise has three outcomes; Promise gets resolved, gets rejected, or pending state, which means the Promise is not completed yet but may get completed after some time, so it is not rejected till now and is in the pending state.


Set env path
==============
-->To update the PATH on a Windows machine, you have to:
-->Open the start search and type in env and then click "Edit the system environment variables"
-->Then click "Environment Variables"
-->Edit the Path variable and add the output you got from the npm config get prefix command.
-->The path should look like C:\Users\Your_User_Name\AppData\Roaming\npm (make sure to replace the Your_User_name placeholder with your actual username).


css using nth child

table[id^="BusinessGrid_bb"]>tbody>tr:nth-child(2)>td:nth-child(3)



--->    How do you handle upload files in Playwright?
          Playwright Upload File. In Playwright, you can use the setInputFiles() method to upload files,
          if the element type is input. For non-input element types or when the input type is hidden,
          you can use the filechooser objects.
		  
		  
Step over
Executes the current line and moves to the next line in the same function. Step over can also be used to avoid going inside a function.
Step into
Moves into the next function or method call in the current line. Step into can also be used to invoke the next expression on the currently-selected line to be executed.
Step out
Executes the rest of the current function and pauses at the return point to the calling function. Step out can be used to return to the calling function when inside a function. 


A browsing context is an environment in which Document objects are presented to the user. 
A tab or window in a Web browser typically contains a browsing context, as does an iframe or frame s in a frameset .
 Each browsing context has a corresponding WindowProxy object.
 
 
 
 replace(/ /g, ''); 
 In regular expressions, / /g is a pattern used to match all occurrences of a single space character (" ") within a string. Let me break down the components:

/ /: This is the pattern itself, enclosed between two forward slashes (/). In this case, it's a single space character, indicating what we want to match.
g: This is a flag that stands for "global." When used with a regular expression, it means that the pattern should be applied globally, matching all occurrences within the string rather than just the first one.



Install browser by Powershell  --> $Env:PLAYWRIGHT_DOWNLOAD_HOST="http://192.0.2.1"
npx playwright install

specified Path ---> $Env:PLAYWRIGHT_BROWSERS_PATH="$Env:USERPROFILE\pw-browsers"
npx playwright install


install Cucumber in playwright
---> npm i @cucumber/cucumber