//---------------------------Promises & Async/Await--------------------------

// Q1. What is a promise?
// A promise is an object representing the eventual completion or failure of an asynchronous operation.

// Q2. What is the problem promises are trying to solve?
// Promises address the problem of "callback hell," making asynchronous code easier to read and handle.

// Q3. What is the problem async/await is trying to solve?
// async/await makes working with promises even more readable by allowing asynchronous code to look like synchronous code.

// Q4. What are the states of a promise?
// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled: The operation completed successfully.
// - Rejected: The operation failed.

// Q5. What is the difference between Promise.resolve and Promise.reject?
// - `Promise.resolve(value)` creates a promise that is resolved with a given value.
// - `Promise.reject(reason)` creates a promise that is rejected with a given reason.

// Q6. What is the difference between then and catch?
// - `then()` handles the fulfilled state of a promise.
// - `catch()` handles the rejected state of a promise.

// Q7. What is promise chaining?
// Promise chaining is a sequence of `.then()` and `.catch()` calls, allowing asynchronous tasks to be performed in sequence.

// Q8. What is the difference between setTimeout and Promise?
// `setTimeout` schedules a callback function to be executed after a delay.
// A `Promise` represents the result of an asynchronous operation and can be used to chain further actions.

// Q9/BONUS. What is the difference between Promise.all and Promise.race?
// - `Promise.all(promises)` resolves when all promises are resolved or rejects when any promise is rejected.
// - `Promise.race(promises)` resolves or rejects as soon as the first promise resolves or rejects.

// E1. Write a function resolve that returns a promise that resolves with a value 42 after 3 seconds.
function resolve() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(42), 3000);
    });
}
resolve().then(value => console.log(value));  // Logs 42 after 3 seconds

// E2. Write a function reject that returns a promise that rejects with an Error object after 3 seconds.
function reject() {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Something went wrong')), 3000);
    });
}
reject().catch(error => console.error(error));  // Logs an Error after 3 seconds

// E3/BONUS. Write a function delay that pauses for a specified amount of time by a given parameter.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log('Paused for 2 seconds'));

// E4/BONUS. Write a function waitOnKeyPress that returns a promise that resolves when the enter key is pressed.
function waitOnKeyPress() {
    return new Promise(resolve => {
        document.addEventListener('keydown', function handler(event) {
            if (event.key === 'Enter') {
                resolve();
                document.removeEventListener('keydown', handler);
            }
        });
    });
}
waitOnKeyPress().then(() => console.log('Enter key pressed!'));