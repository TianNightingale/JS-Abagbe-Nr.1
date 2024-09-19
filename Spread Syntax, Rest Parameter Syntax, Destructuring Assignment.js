//-----------------Spread Syntax, Rest Parameter Syntax, Destructuring Assignment

// Q1. What is the spread syntax? Make an example.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]
console.log(mergedArr);

// Q2. What is the rest parameter syntax? Make an example.
function collectArgs(...args) {
    console.log(args);  // [1, 2, 3]
}
collectArgs(1, 2, 3);

// Q3. What is the destructuring assignment? Make an example.
const obj11 = { personName: 'John', age: 25 }; // 'name' changed to 'personName'
const { personName, age } = obj11;  // Destructuring
console.log(personName, age);  // 'John', 25

// Q4/BONUS. What is the named destructuring assignment? Make an example.
const { personName: firstName, age: yearsOld } = obj11;  // Renamed to 'personName' to avoid conflict
console.log(firstName, yearsOld);  // 'John', 25

// E1. Demonstrate the spread/rest syntax with the function sum receiving a variadic number of arguments and returning the sum.
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));  // 10

// E2. Call the function greet with an object.
function greet({ personName, age }) { // Changed 'name' to 'personName'
    console.log(`Hello, my name is ${personName} and I am ${age} years old.`);
}
greet({ personName: 'Alice', age: 30 });  // "Hello, my name is Alice and I am 30 years old."

// E3/BONUS. Enhance greet by providing default values.
function greetWithDefaults({ personName = 'Guest', age = 'unknown' } = {}) {
    console.log(`Hello, my name is ${personName} and I am ${age} years old.`);
}
greetWithDefaults();  // "Hello, my name is Guest and I am unknown years old."
greetWithDefaults({ personName: 'Bob' });  // "Hello, my name is Bob and I am unknown years old."

// E4/BONUS. Enhance greet by renaming the parameters.
function greetWithRename({ personName: firstName, age: yearsOld }) {
    console.log(`Hello, my name is ${firstName} and I am ${yearsOld} years old.`);
}
greetWithRename({ personName: 'Charlie', age: 40 });  // "Hello, my name is Charlie and I am 40 years old."

// E5/BONUS. Enhance greet by providing default values and renaming the parameters.
function greetEnhanced({ personName: firstName = 'Guest', age: yearsOld = 'unknown' } = {}) {
    console.log(`Hello, my name is ${firstName} and I am ${yearsOld} years old.`);
}
greetEnhanced();  // "Hello, my name is Guest and I am unknown years old."
greetEnhanced({ personName: 'David' });  // "Hello, my name is David and I am unknown years old."
