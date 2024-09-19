//-------Event Loop-------------------------

// Q1. What is the event loop?
// The event loop is a mechanism in the JavaScript runtime that manages asynchronous operations and the execution of callback functions.

// Q2. What does it mean to block the event loop and what are the consequences?
// Blocking the event loop means that the JavaScript thread is occupied with a long-running synchronous task and cannot process other tasks.
// The consequence is that the application becomes unresponsive and cannot handle other events or callbacks until the blocking task is complete.

// Q3. What is a task, microtask, and render step?
// - Task (macro task): Includes callbacks from `setTimeout` and `setInterval`.
// - Microtask: Includes callbacks from Promises and `MutationObserver`.
// - Render step: The browser updates the page rendering.
// Tasks are handled in the order they are added, then microtasks are processed before the next rendering step.

// Q4. How many frames per second does the browser render?
// The browser typically renders at 60 frames per second (fps).

// Q5. What does `setTimeout(() => { console.log('I am back')}, 0);` do?
// `setTimeout(() => { console.log('I am back')}, 0);` schedules the callback function to be executed at the end of the current event loop cycle, effectively running it in the next tick.

// Q6. What is the difference between `setTimeout` and `requestAnimationFrame`?
// `setTimeout` is used to execute a callback after a specified delay, while `requestAnimationFrame` is used to execute a callback before the next browser repaint.
// `requestAnimationFrame` is optimized for visual updates and ensures that animations run smoothly, while `setTimeout` is more general-purpose.

// Q7. What is the order of the output of the following code?
// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });

// console.log('script end');
// Output:
// script start
// script end
// promise1
// promise2
// setTimeout

// E2/BONUS. Write a function `render` that renders a div block from left to right using `setTimeout`.
// Example:
function render() {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '50px';
    div.style.left = '0';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = 'blue';
    document.body.appendChild(div);

    let position = 0;
    function move() {
        position += 5;
        div.style.left = position + 'px';
        if (position < window.innerWidth - 100) {
            setTimeout(move, 20);
        }
    }
    move();
}

// E3/BONUS. Write a function `render` that renders a div block from left to right using `requestAnimationFrame`.
// Example:
function render() {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '50px';
    div.style.left = '0';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = 'blue';
    document.body.appendChild(div);

    let position = 0;
    function move() {
        position += 5;
        div.style.left = position + 'px';
        if (position < window.innerWidth - 100) {
            requestAnimationFrame(move);
        }
    }
    move();
}

// E4/BONUS. Place a GIF in an HTML and in your script call a function block that blocks the event loop when pressing a button. Explain what is happening.
// Example HTML:
// <button id="blockButton">Block Event Loop</button>
// <img src="your-gif.gif" alt="Loading GIF">

// Example JavaScript:
document.getElementById('blockButton').addEventListener('click', function() {
    while (true) {} // Blocks the event loop indefinitely
});
// When the button is clicked, the while loop blocks the event loop, causing the page to become unresponsive.
