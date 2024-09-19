//--------------Functions-----------------
//Q1. What the difference between functional and object-oriented programming?
//Functional programming : focuses on the use of functions, is stateless, has no side effects, and data is immutable.
//Object-oriented programming : focuses on the definition and methods of objects, data and behaviors are encapsulated in objects, and usually have states


// Q2. What is the difference between a function declaration and a function expression? 
// Function declaration: a function is defined with the `function` keyword and is hoisted.
// Function expression: a function is defined and assigned to a variable. It is not hoisted.


// Q3. What is the difference between a regular function and an arrow function (lambda)?
// Regular functions: use `function` keyword and create their own `this` context.
// Arrow functions: use the `=>` syntax and inherit the `this` value from their surrounding context.。

// Q4. What is the arity of a function? 
// Arity refers to the number of arguments a function takes. 

// Q5. What is a variadic function? 
// A variadic function is a function that can take an indefinite number of arguments.

// Q6. What is a higher-order function? Make an example with map or filter
// A higher-order function is a function that takes another function as an argument or returns a function.
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);  // Using `map`, a higher-order function
console.log(squaredNumbers);  // [1, 4, 9, 16]

// Q7. What is a callback function? Make an example with setTimeout or addEventListener.
// A callback function is a function passed as an argument to another function, to be executed later.
setTimeout(() => {console.log('This is a callback after 1 second.');}, 1000);

// Q8. What is the concept of a closure by explaining the following code? 
function outerFunction() {
    let counter = 0;
    function innerFunction() {
        counter++;
        console.log(counter);
    }
    return innerFunction;
}
const increment1 = outerFunction();
const increment2 = outerFunction();
increment1();  // Output: 1 (because `counter` is local to the outerFunction)
increment1();  // Output: 2 (same closure, so `counter` is incremented)
increment2();  // Output: 1 (new closure, with a new `counter`)

// A closure is a function that remembers the variables from the scope in which it was created, even after that scope has finished executing.


// E1. Create a function add that adds 2 numbers in three ways: 
function addDeclaration(a, b) {
    return a + b;
}

const addExpression = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

// E2. Create a higher-order function `repeat` that takes a function and a number `n`, and calls that function `n` times.
function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}
repeat(() => console.log('Repeated!'), 3);  // Calls the function 3 times

// E3/BONUS. Create a function `once` that takes a function `fn` and ensures that it can only be called once.。
function once(fn) {
    let called = false;
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        } else {
            console.log('Function can only be called once.');
        }
    };
}

const saySusiOnce = once((name) => console.log(`Hello ${name}!`));
saySusiOnce('Susi');  // Output: "Hello Susi!"
saySusiOnce('Susi');  // No output, function can only be called once