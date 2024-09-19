// --------------------------------Basics-------------------------------------

//Q1. What is the difference between == and ===?
//==：zuerst umwandeln dann vergleichen
//===: direktes Vergleichen

//Q2. What is the difference between let, const and var?
//   •	var: Function-scoped or globally scoped (if declared outside a function), can be re-declared and updated.
//   •	let: Block-scoped, can be updated but not re-declared within the same block.
//   •	const: Block-scoped, cannot be re-declared or updated (although the content of objects/arrays can be mutated).

// Q3. What does hoisting mean?
// 	Hoisting refers to the JavaScript behavior where variable and function declarations are moved to the top of their scope during the compilation phase. However, only declarations are hoisted, not initializations.

//Q4. What is the difference between null and undefined?
// Null: absichtlich leer gemachte object value
// Undefined：Variabe die schon gibt aber keine werte zugewiesen

// Q5. What is the output of console.log(null == undefined) and console.log(null === undefined)?
// • console.log(null == undefined); // true (because == allows type coercion)
// • console.log(null === undefined); // false (strict comparison, different types)

// Q6. What is the output of 
// const x = undefined;
// if (x) {
//   console.log('yes');
// } else {
//   console.log('no');
// }
// • "no", because undefined is a falsy value.

// Q7. What primitive types does JavaScript have?
// • string, number, boolean, undefined, null, symbol, bigint

// Q8. What is the object type in JavaScript?
// • Non-primitive type used to store collections of data and more complex entities. 
// • Objects can have properties and methods.

// Q9. What are truthy and falsy values in JavaScript?
// • Truthy: values that evaluate to true in a Boolean context (e.g., non-zero numbers, non-empty strings).
// • Falsy: values that evaluate to false in a Boolean context (e.g., false, 0, '', null, undefined, NaN).

// Q10. What does !!x do?
// • It converts a value x to its Boolean equivalent. (e.g., !!1 => true, !!0 => false).

// Q11. What is the difference between const x = 1, const x = Number(1), const x = new Number(1)?
// • const x = 1: A primitive number.
// • const x = Number(1): A primitive number (same as the first).
// • const x = new Number(1): A Number object (object wrapper around the number 1).

// Q12. What is the difference between parseInt('5x') and Number('5x')?
// • parseInt('5x'): Returns 5, stops parsing when encountering a non-numeric character.
// • Number('5x'): Returns NaN because the entire string is not a valid number.

// Q13. const x = { a: 1 }; const y = { a: 1 }; console.log(x === y); What will be the output?
// • false, because x and y are two different objects with the same structure but are not the same reference.

// Q14. const x = { a: 1 }; const y = x; console.log(x === y); What will be the output?
// • true, because x and y point to the same object in memory.

// Q15. const arr = [1, 2, 3]; arr[0] = 4; console.log(arr); What will be the output?
// • [4, 2, 3], the first element of the array is updated to 4.

// Q16. const obj = { a: 1, b: 2 }; obj.a = 3; console.log(obj); What will be the output?
// • { a: 3, b: 2 }, the 'a' property is updated to 3.

// Q17. What is the output of console.log(1 + '2')?
// • '12', because 2 is a string, so 1 is converted to a string and concatenated.

// Q18. What is the string template "Hello, my name is ${name} and I like ${hobby}" doing?
// • It allows inserting variables inside strings easily using placeholders `${}`.
// We can just give the placeholder new value and print a new sentence
let name = 'John';
let hobby = 'coding';
console.log(`Hello, my name is ${name} and I like ${hobby}`);

// Q19. How to check if a variable is of a specific type?
// • Use the typeof operator
typeof x === 'string'; // check if x is string

// Q20. What is the difference between for, for...in, for...of?
// • for: Iterates over an iterable (array, etc.) using an index. 
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str); // Expected output: "012345678"

// • for...in: Iterates over the keys of an object.
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// • for...of: Iterates over the values of an iterable (like an array).
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// Q21. What is the typeof operator in JavaScript?
// • typeof is used to check the type of a variable, e.g., typeof 123 === 'number'.

// Q22. What is type coercion in JavaScript?
// • Type coercion is the automatic or implicit conversion of values from one type to another (e.g., '5' + 1 becomes '51').

// Q23. What is NaN? When does it occur? How to check if a value is NaN?
// • NaN stands for Not-a-Number. 
// It occurs when a value that is not a number is attempted to be converted or operated on as if it were.
// • You can check for NaN using isNaN(value).


// Q24. What is the strict mode in JavaScript, and how to enable it? Is it still relevant?
// • Strict mode enforces stricter parsing and error handling in your JavaScript code.
// • It can be enabled by adding "use strict"; at the beginning of a script or function.
// • Yes, it is still relevant as it helps catch potential bugs early.

// E1. Write a function isNumber that takes a parameter and returns true if the parameter is a number, otherwise false.
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }