//-------------------------------Modules Import, Export-------------------------------------------

// Q1. What are JavaScript modules?
// JavaScript modules are a way to organize and encapsulate code into reusable components. They allow for importing and exporting functions, objects, or primitives between different files.

// Q2. What is the difference between a JavaScript module and a regular JavaScript script?
// - JavaScript modules use the `import` and `export` syntax to share code between files, and they are automatically in strict mode.
// - Regular scripts do not have this modular structure and do not support the `import` and `export` syntax without using tools like bundlers.

// Q3. Do JavaScript scripts/modules have their own scope? What are the consequences?
// - Yes, JavaScript modules have their own scope, which means that variables and functions declared in a module are not accessible outside of it unless explicitly exported.
// - This prevents name collisions and keeps the global namespace clean.

// Q4. Do we need to use the `use strict` directive in JavaScript modules?
// - No, JavaScript modules are always in strict mode by default, so there is no need to explicitly use the `"use strict"` directive.

// Q5. How does `import`/`export` work in JavaScript modules?
// - `export` is used to make functions, objects, or values available for import in other modules.
// - `import` is used to bring functions, objects, or values from other modules into the current module.

// Q6. Can JavaScript modules import other JavaScript scripts/modules?
// - Yes, JavaScript modules can import other JavaScript modules using the `import` statement.

// Q7. Can JavaScript modules import HTML files or CSS files?
// - JavaScript modules cannot directly import HTML or CSS files. However, tools like bundlers (e.g., Webpack) allow importing CSS and HTML into JavaScript files.

// Q8. Can HTML files import other HTML files?
// - HTML files do not support direct importing of other HTML files. To include other HTML files, you typically use server-side includes or client-side JavaScript methods (e.g., using `fetch`).

// Q9. Can HTML files import CSS files or JavaScript scripts/modules?
// - Yes, HTML files can link to CSS files using `<link>` tags and include JavaScript files using `<script>` tags. JavaScript modules can be included using `<script type="module">`.

// Q10. Can CSS files import other CSS files?
// - Yes, CSS files can import other CSS files using the `@import` rule.

// Q11. Can CSS files import HTML files or JavaScript scripts/modules?
// - No, CSS files cannot import HTML files or JavaScript scripts/modules. They are limited to importing other CSS files only.

// Q12/BONUS. Research the IIFE pattern and why is/was it used? Make an example.
// - The Immediately Invoked Function Expression (IIFE) pattern is used to create a private scope for variables and avoid polluting the global namespace.
// - Example:
(function() {
    let privateVar = 'I am private';
    console.log(privateVar); // Logs 'I am private'
})();
console.log(typeof privateVar); // Logs 'undefined'

// Q13/BONUS. Research the Revealing Module Pattern and why is/was it used? Make an example.
// - The Revealing Module Pattern is used to structure JavaScript code by encapsulating private variables and methods, while exposing a public API.
// - Example:
const RevealingModule = (function() {
    let privateVar = 'I am private';
    
    function privateMethod() {
        console.log(privateVar);
    }
    
    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

RevealingModule.publicMethod(); // Logs 'I am private'
console.log(typeof RevealingModule.privateVar); // Logs 'undefined'

// Q14/BONUS. Research what are JavaScript bundlers and what are they used for?
// - JavaScript bundlers are tools that combine multiple JavaScript files into a single file or a few files, optimizing the code for performance and managing dependencies.

// E1. Create a module math with functions add, sub, mul, div and export them. Import the module in another script and use the functions.
// - math.js
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function mul(a, b) {
    return a * b;
}

export function div(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

// - main.js
import { add, sub, mul, div } from './math.js';

console.log(add(2, 3)); // 5
console.log(sub(5, 3)); // 2
console.log(mul(2, 3)); // 6
console.log(div(6, 3)); // 2