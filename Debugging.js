

//----------------------------------------Debugging-------------------------

// Q1. How to open the developer tools in the browser?
// In most browsers, you can open developer tools by pressing F12 or right-clicking on a webpage and selecting "Inspect" or "Inspect Element".

// Q2. Where to check for errors in the browser?
// Errors can be checked in the "Console" tab of the developer tools. This tab displays JavaScript errors, warnings, and log messages.

// Q3. Demonstrate the use of the debugger in the browser.
// You can use the debugger tool to pause code execution and inspect the state of variables. Set breakpoints in the "Sources" tab or use the `debugger` statement in your code.
function exampleFunction() {
    let a = 10;
    let b = 20;
    debugger; // This will pause execution here
    console.log(a + b);
}
exampleFunction();

// Q4. Demonstrate the use of the debugger statement.
// The `debugger` statement pauses the execution of JavaScript and opens the debugging tools if they are available.
function testDebugger() {
    let x = 5;
    let y = 15;
    debugger; // Execution will pause here
    console.log(x + y);
}
testDebugger();

// Q5. What is the difference between console.log, console.warn, console.error?
// - `console.log` is used for general output or logging information.
// - `console.warn` is used to output warnings, typically indicating potential issues.
// - `console.error` is used to output errors, indicating issues that have occurred.

// Q6. How to inspect the DOM in the browser?
// In the developer tools, go to the "Elements" or "Inspector" tab to view and interact with the DOM tree of the current webpage.

// Q7. How to inspect JavaScript files in the browser?
// In the developer tools, go to the "Sources" tab to view, debug, and edit JavaScript files loaded by the webpage.

// Q8. How to inspect network requests in the browser?
// In the developer tools, go to the "Network" tab to view all network requests made by the webpage, including HTTP requests, responses, and timings.

// Q9. How to inspect the storage in the browser?
// In the developer tools, go to the "Application" tab (or "Storage" in some browsers) to view and manage data stored in cookies, local storage, session storage, and indexedDB.

// Q10. How is $0 useful in the browser's console?
// `$0` refers to the currently selected DOM element in the Elements tab. You can use it to quickly access and manipulate that element from the console.

// Q11/BONUS. How to inspect the performance of a website in the browser?
// Use the "Performance" tab in the developer tools to record and analyze the performance of your website, including page load times, scripting, rendering, and more.