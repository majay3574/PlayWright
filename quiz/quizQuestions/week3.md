. What does Playwright's auto-wait feature do?
A. Waits for browser restart
B. Waits for the element to be visible, enabled, and stable ✅
C. Waits for a fixed time
D. Skips waiting for selectors

2. Which assertion checks if an element is visible?
A. expect(locator).toBeVisible() ✅
B. expect(locator).isVisible()
C. locator.expectVisible()
D. expect(locator).visible()

3. What happens if an element is not ready when Playwright tries to interact with it?
A. Test crashes immediately
B. Playwright retries until timeout ✅
C. Element is skipped
D. A warning is shown, but test continues

4. Which assertion checks if text is present in an element?
A. expect(locator).toMatch()
B. expect(locator).toHaveText('text') ✅
C. locator.containsText('text')
D. expect(locator).matchText('text')

5. How can you wait for a specific URL in Playwright?
A. page.waitForUrlChange()
B. expect(page.url()).toBe(...)
C. await expect(page).toHaveURL('https://example.com') ✅
D. page.expectURL(...)

6. How long does Playwright wait by default for assertions?
A. 10 sec
B. 30 sec ✅
C. 5 sec
D. 60 sec

7. Which assertion ensures that a checkbox is checked?
A. expect(locator).toBeChecked() ✅
B. expect(locator).checked()
C. locator.isChecked()
D. expect(locator).toBeEnabled()

8. What will expect(locator).toHaveAttribute('href', '/home') do?
A. Click the link
B. Check if element has /home text
C. Check if the href attribute is /home ✅
D. Wait until URL is /home

9. Which of the following is true about Playwright auto-wait?
A. Only works with click()
B. Replaces waitForTimeout() in all cases
C. Automatically waits before every action ✅
D. Must be manually enabled

10. How do you create an empty array in JavaScript?
A. var arr = empty;
B. var arr = ()
C. var arr = []; ✅
D. var arr = new Object();

11. Which method adds an element to the end of an array?
A. push() ✅
B. pop()
C. shift()
D. unshift()

12. What does the pop() method do?
A. Removes the first element
B. Adds an element
C. Removes the last element ✅
D. Sorts the array

13. What is the output of ["a", "b", "c"].length?
A. "3"
B. 3 ✅
C. undefined
D. abc

14. Which method creates a new array from a part of the original?
A. splice()
B. slice() ✅
C. split()
D. trim()

15. What does indexOf() return when the item is not in the array?
A. undefined
B. false
C. 0
D. -1 ✅

16. Which method checks if every element passes a test?
A. some()
B. map()
C. filter()
D. every() ✅

17. What does arr.includes('item') return?
A. true or false ✅
B. The index
C. Nothing
D. A new array

18. What is TypeScript?
A. A browser
B. A strict version of CSS
C. A typed superset of JavaScript ✅
D. A backend framework

19. How do you define a variable with a type in TypeScript?
A. let num: number = 5; ✅
B. let number = num 5;
C. let num = number(5);
D. int num = 5;

20. What does the any type represent in TypeScript?
A. A number only
B. Only string and number
C. Any value without type checking ✅
D. A boolean

21. Which of the following is a TypeScript file extension?
A. .ts ✅
B. .type
C. .js
D. .jsx

22. What keyword is used to define interfaces in TypeScript?
A. define
B. type
C. interface ✅
D. schema

23. How do you define a function return type in TypeScript?
A. function fn(): return string
B. function fn(): string ✅
C. function: string fn()
D. fn() returns string

24. What does readonly do in an interface?
A. Makes a value changeable
B. Removes a property
C. Allows overriding
D. Prevents the property from being changed ✅

25. How do you install TypeScript globally?
A. npm install typescript -g ✅
B. tsc --install
C. npm typescript init
D. install -g ts