

//---------------Web APIs----------------------------------

// Q1. Do Web APIs fall under the JavaScript core language (ECMAScript)?
// Web APIs are not part of the core JavaScript language (ECMAScript); they are additional features provided by the browser.

// Q2. Name some famous Web APIs.
// Some famous Web APIs include:
// - DOM API
// - Fetch API
// - Geolocation API
// - Web Storage API
// - WebSocket API

// E1. Write a function `getLocation` that returns the current location of the user.
// Example:
function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
}

// E2. Open two browser tabs (both www.orf.at), in one tab set a value with the LocalStorage API and read it in the other tab.
// Example:
localStorage.setItem('key', 'value'); // Set in one tab
console.log(localStorage.getItem('key')); // Read in the other tab

// E3/BONUS. Open two browser tabs (www.orf.at and www.google.com), repeat the experiment. What happens, try to explain it?
// LocalStorage is domain-specific, so data set in one domain (e.g., www.orf.at) will not be accessible in another domain (e.g., www.google.com).



