//---------------------Arrays-----------------------------
// Q1. What are the key differences between objects and arrays? 
// Objects are unordered collections of key-value pairs, while arrays are ordered collections of elements with numeric indices.
// Arrays have methods like `push`, `pop`, and `map`, while objects do not.

// Q2. What is an iterable? 
// An iterable is any object that can be iterated over, such as arrays, strings, and sets.

// Q3. What is the type of the key in an array? 
// The keys in arrays are numeric indices (integers starting from 0).

// Q4. What are possible types of the value in an array? 
// Array values can be of any type: numbers, strings, objects, other arrays, etc.

// Q5. What is a sparse array? Does JavaScript have sparse arrays? 
// A sparse array has gaps between some indices, where some elements are undefined.
// Yes, JavaScript allows sparse arrays, such as: `const arr = [1, , 3];`

// Q6. What is an array-like object? And how to convert it to an array? 
// An array-like object has indexed elements and a `length` property but lacks array methods.
// Convert it to an array using `Array.from` or the spread operator.
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const arr = Array.from(arrayLike);
console.log(arr);  // ['a', 'b']

// Q7. How to iterate over an array? Make an example.
const array = [1, 2, 3];
array.forEach((item) => console.log(item));  // 1, 2, 3

// Q8. How to iterate over an array with the index? Make an example.
array.forEach((item, index) => console.log(index, item));  // 0 1, 1 2, 2 3

// Q9. What is the difference between map, filter, reduce? Make an example.
// `map` returns a new array with the results of applying a function to each element.
const mapped = array.map(item => item * 2);  // [2, 4, 6]

// `filter` returns a new array with elements that pass a test function.
const filtered = array.filter(item => item > 1);  // [2, 3]

// `reduce` reduces the array to a single value by applying a function cumulatively.
const sum = array.reduce((acc, item) => acc + item, 0);  // 6

// Q10. How to shallow copy an array? Make an example.
const shallowCopy11 = [...array];
console.log(shallowCopy11);  // [1, 2, 3]

// Q11. How to deep copy an array? Make an example.
const nestedArray = [[1], [2], [3]];
const deepCopy111 = JSON.parse(JSON.stringify(nestedArray));  // Deep copy of nested arrays
console.log(deepCopy111);  // [[1], [2], [3]]

// E1. Write a function `merge` that merges two arrays together.
function merge(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(merge([1, 2], [3, 4]));  // [1, 2, 3, 4]

// E2. Create an array `arr` with elements 1, 2, 3 and add a new element 4 to the start/middle/end of the array without modifying the original array.
const ar1 = [1, 2, 3];
const newArrStart = [4, ...ar1];
const newArrMiddle = [...ar1.slice(0, 1), 4, ...ar1.slice(1)];
const newArrEnd = [...ar1, 4];
console.log(newArrStart, newArrMiddle, newArrEnd);  // [4, 1, 2, 3], [1, 4, 2, 3], [1, 2, 3, 4]

// E3. Create an array `arr` with elements 1, 2, 3 and add a new element 4 to the start/middle/end of the array by modifying the original array.
ar1.unshift(4);  // Add to start
ar1.splice(2, 0, 4);  // Add to middle
ar1.push(4);  // Add to end
console.log(ar1);  // [4, 1, 4, 2, 3, 4]

// E4. Create an array `arr` with elements 1, 2, 3 and remove the element 2 from the array without modifying the original array.
const newArr = ar1.filter(item => item !== 2);
console.log(newArr);  // [1, 3]

// E5. Create an array `arr` with elements 1, 2, 3 and remove the element 2 from the array by modifying the original array.
ar1.splice(ar1.indexOf(2), 1);
console.log(ar1);  // [1, 3]

// E6. Write a function `mapDouble` that takes an array of numbers and returns a new array where each number is doubled using `map`.
function mapDouble(numbers) {
    return numbers.map(num => num * 2);
}
console.log(mapDouble([1, 2, 3]));  // [2, 4, 6]

// E7. Write a function `filterEven` that takes an array of numbers and returns a new array with only even numbers using `filter`.
function filterEven(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEven([1, 2, 3, 4]));  // [2, 4]

// E8. Write a function `sum` that takes an array of numbers and returns the sum of them using `reduce`.
function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3]));  // 6

// E9/BONUS. Write a function `find` that takes an array of numbers and a number and returns the first number that is greater than the given number.
function findGreater(numbers, target) {
    return numbers.find(num => num > target);
}
console.log(findGreater([1, 2, 3, 4], 2));  // 3

// E10/BONUS. Write a function `every` that takes an array of numbers and a function and returns true if all numbers pass the test.
function every(numbers, testFunc) {
    return numbers.every(testFunc);
}
console.log(every([2, 4, 6], num => num % 2 === 0));  // true