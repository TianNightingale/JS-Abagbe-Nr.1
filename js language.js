//------------------JS Language--------------------------------

// Q1. Who is in charge of the JavaScript language?
// JavaScript is standardized by Ecma International, specifically by the ECMAScript Technical Committee (TC39).

// Q2. Get an overview of JavaScript versions.
// The major versions of ECMAScript include:
// - ECMAScript 3 (1999)
// - ECMAScript 5 (2009)
// - ECMAScript 6 / ES2015 (2015)
// - ECMAScript 2016 to 2024 (annual updates)
// Each version introduces new features and improvements.

// Q3. What falls under the JavaScript core language (ECMAScript)?
// ECMAScript encompasses the core language features of JavaScript including syntax, types, objects, and functions.

// Q4. Can JavaScript be executed outside the browser? If so how?
// Yes, JavaScript can be executed outside the browser, such as on the server-side (Node.js), in desktop applications (Electron), and more.

// Q5. What is the JavaScript runtime environment?
// A JavaScript runtime environment is an environment that provides the necessary functionalities for executing JavaScript code, including the core language features and APIs.

// Q6. What is the difference between window and globalThis?
// `window` is the global object in a browser environment, while `globalThis` is a unified global object that provides a consistent way to access the global object across different JavaScript environments.

// Q7. Explore some properties and methods of window in the browser console.
// The `window` object in the browser console includes many properties and methods, such as:
// - `window.alert()`
// - `window.document`
// - `window.location`
// - `window.localStorage`
// - `window.setTimeout()`
// Example:
console.log(window.location.href); // Logs the current URL
console.log(window.localStorage.getItem('key')); // Logs the value of 'key' from localStorage

// E1. Write a function `randomInt` that returns a random integer between start and end inclusive.
// Example:
function randomInt(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// E2/BONUS. Write a function `randomDate` that returns a random date between start and end inclusive.
// Example:
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// E3/BONUS. Explore the `this` keyword in JavaScript. Make an example.
// The `this` keyword refers to the object that is currently executing the function.
// Example:
const obj123 = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
obj123.greet(); // Logs 'Hello, Alice'
          
