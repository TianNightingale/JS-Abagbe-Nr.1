
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
  

  //       Short Circuit Evaluation (&&), Ternary Operator (?:)
//Q1. What does this function do?
function render(isOpen) {
    return isOpen ? `<p>Open</p>` : `<p>Close</p>`;
}
// if ifOpen is true, return <p>Open</p>, otherwise "<p>Close</p>"


//Q2. What does this function do?
function render(isOpen) {
    return `<footer>${isOpen && `<p>Open</p>`}</footer>`;
}
// if isOpen true, return <p>Open</p>, otherwise <footer>false</footer>


//Q3. In what scenarios is the && operator useful?
// if left of && is false, break, return false     if left of && is true, then execute the right part
const showMessage = isLoggedIn && 'Welcome back!';



//Q4. In what scenarios is the ?: operator useful?                 it reduce the usage of if
const message = isLoggedIn ? 'Welcome back!' : 'Please log in';


//E1. Write a function displayCart that takes a cart object { items: Array } and returns a footer displaying the total amount if there are items in the cart, 
//otherwise "Your cart is empty."

function displayCart(cart) {
    const totalAmount = cart.items.length > 0 ? `Total items: ${cart.items.length}` : 'Your cart is empty.';
    return `<footer>${totalAmount}</footer>`;
}



//-------------------------Optional chaining (?.), Nullish coalescing operator (??)----------------------------
//Q1. How does the optional chaining operator ?. work?
//prevent to throw exception
const user1 = { name: 'Alice' };
console.log(user?.address?.city);  // 输出: undefined，不会报错

//Q2. How does the nullish coalescing operator ?? work?
const value = null ?? 'default';  // output 'default'
const value2 = 0 ?? 'default';    // output 0
//?? is Nullish coalescing operator，it returns the value of left side，if this value is null or undefined，then return the right side。different to ||，?? wont check by value like false、0、"" 

//Q3. What will be the output? Explain the lines.
const user3 = { name: 'Alice', address: { city: 'Wonderland' } };

console.log(user3.profile);              // Output: undefined 
console.log(user3.profile.age);          // ERROR: Cannot read property 'age' of undefined
console.log(user3?.profile.age);         // ERROR: Cannot read property 'age' of undefined
console.log(user3?.profile?.age);        // Output: undefined，profile not exist
console.log(user3.profile?.age);         // Output: undefined，profile not exist
console.log(user3?.profile?.age ?? 'Unknown');  // output: 'Unknown'
console.log(user3.profile?.age ?? 0);    // output: 0

console.log(user3?.address.city);        // Output: 'Wonderland'
console.log(user3?.address?.city ?? 'Unknown'); // Output: 'Wonderland'
console.log(user3.address?.city ?? 'Vienna');   // Output: 'Wonderland'


//Q4. Explain the lines.
let user;
user.greet();           // Error: Cannot read property 'greet' of undefined
user?.greet();          // no error, use ?. instead greet method
                        // No error, use optional chainning, no use greet method
user = "Lisa";
user.greet();           // Error: greet is not string function
                        

//Q5. What does this function do?
function getNumberOfProducts(shop) {
    return shop?.products?.length ?? 0;
} //returns products array lenth, if shop and product not exisit, return 0

//Q6. What does this function do?
function getProducts(shop) {
    return shop?.products ?? []; // returns product array, if it not exist then empty array
} 


//Q7. When does the error ‘Uncaught TypeError: xxx is undefined’ occur? Make an example.
let user4;
console.log(user4.name);  // Error, bcs user4 is undefined
// if undefined

//Q8. When does the error ‘Uncaught TypeError: xxx.yyy is not a function’ occur? Make an example.
let user5 = { name: 'Alice' };
user.greet();  //  throw error bcs greet is not a function
// wenn ich eine variable zugreife, die nicht function ist, dann diese fehler


//E1. Write a function getCity that takes a user object { address: { city: String } } and returns the city if it exists, otherwise "Unknown".
function getCity(user) {
    return user?.address?.city ?? 'Unknown';
}


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



//--------------------Object-----------------------
// Q1. What are the key differences between objects and arrays? 
// Objects are unordered collections of key-value pairs, while arrays are ordered collections of elements. 
// Arrays use indices to access elements, while objects use keys (typically strings).

// Q2. What is the type of the key in an object? 
// Keys in objects are always strings (or symbols).

// Q3. What are possible types of the value in an object? 
// Values in objects can be of any type: strings, numbers, arrays, objects, functions, etc.

// Q4. What are the dot notation and bracket notation? 
// Dot notation (`object.key`) is used to access properties when the key is a valid identifier.
// Bracket notation (`object['key']`) is used when the key contains special characters or spaces, or is dynamic.

// Q5. How to iterate over an object? Make an example.
const obj = { name: 'Alice', age: 25, city: 'Paris' };
for (let key in obj) {
    console.log(key, obj[key]);
}

// Q6. How can you check if a property exists in an object? Make an example.
console.log('name' in obj);  
console.log(obj.hasOwnProperty('age'));  

// Q7. What are getters and setters in an object? Make an example.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};
console.log(person.fullName);  // "John Doe"
person.fullName = 'Jane Smith';
console.log(person.firstName);  // "Jane"

// Q8. How do you add a new property to an object? Make an example.
person.age = 30;
console.log(person.age);  // 30

// Q9. How do you remove a property from an object? Make an example.
delete person.age;
console.log(person.age);  // undefined

// Q10. How do you merge two objects together? Make an example.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);  // { a: 1, b: 3, c: 4 }

// Q11. What does serialization mean? 
// Serialization is the process of converting an object into a format that can be easily stored or transmitted (e.g., JSON).

// Q12. What is the difference between an object and JSON? 
// JSON is a string representation of an object that follows a strict syntax. Objects are actual data structures.

// Q13. How to serialize an object to a JSON? Make an example.
const jsonString = JSON.stringify({ x: 10, y: 20 });
console.log(jsonString);  // '{"x":10,"y":20}'

// Q14. What is the difference between a shallow and deep copy? 
// A shallow copy copies the object's top-level properties, while a deep copy copies all levels, including nested objects.

// Q15. How to shallow copy an object? Make an example.
const shallowCopy = { ...obj1 };
console.log(shallowCopy);  // { a: 1, b: 2 }

// Q16. How to deep copy an object? Make an example.
const deepCopy = JSON.parse(JSON.stringify(obj1));  // One simple method
console.log(deepCopy);  // { a: 1, b: 2 }

// Q17. What is the difference between Object.keys, Object.values, Object.entries? Make an example.
console.log(Object.keys(person));  // ['firstName', 'lastName']
console.log(Object.values(person));  // ['Jane', 'Smith']
console.log(Object.entries(person));  // [['firstName', 'Jane'], ['lastName', 'Smith']]

// Q18/BONUS What is the problem structuredClone is solving?
// `structuredClone` solves the problem of deep-cloning complex objects (e.g., containing circular references) that `JSON.stringify` cannot handle.

// E1. Create an object `person` with properties `name` and `age` and a method `greet` that returns a greeting message.
const personObj = {
    name: 'John',
    age: 25,
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
};
console.log(personObj.greet());  // "Hello, my name is John and I'm 25 years old."

// E2. How to iterate over an object by keys, values or both?
for (let key in personObj) {
    console.log(key);  // keys
}

Object.values(personObj).forEach(value => {
    console.log(value);  // values
});

Object.entries(personObj).forEach(([key, value]) => {
    console.log(key, value);  // key-value pairs
});

// E3. Write a function `merge` that takes two objects and returns a new object with the properties of both objects.
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(merge({ a: 1 }, { b: 2 }));  // { a: 1, b: 2 }

// E4/BONUS. Write a function `deepMerge` that takes two objects and returns a new object with the properties of both. Use recursion to merge nested objects.
function deepMerge(obj1, obj2) {
    const result = { ...obj1 };
    for (let key in obj2) {
        if (typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) {
            result[key] = deepMerge(obj1[key], obj2[key]);
        } else {
            result[key] = obj2[key];
        }
    }
    return result;
}
console.log(deepMerge({ a: 1, nested: { x: 10 } }, { nested: { y: 20 } }));  // { a: 1, nested: { x: 10, y: 20 } }

// E5/BONUS. Write a function `deleteKey` that takes an object and a key and returns a new object without the key.
function deleteKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}
console.log(deleteKey({ a: 1, b: 2 }, 'b'));  // { a: 1 }


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


//----------------------------------------Fetch API------------

// Q1. What is the Fetch API trying to solve?
// The Fetch API provides a modern, flexible, and powerful way to make network requests in JavaScript, replacing older methods like XMLHttpRequest.

// Q2. Why does the Fetch API use promises?
// The Fetch API uses promises to handle asynchronous operations, allowing more readable and maintainable code compared to callback-based approaches.

// E1. Write a function getTodos that makes an HTTP GET request to https://jsonplaceholder.typicode.com/todos and writes the result to the console. Consider error handling.
function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}
getTodos();

// E2. Write a function getTodos that makes an HTTP GET request to https://jsonplaceholder.typicode.com/todos and writes the result to a list of DOM nodes. Consider error handling.
function getTodosToList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const list = document.createElement('ul');
            data.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.textContent = `${todo.id}: ${todo.title}`;
                list.appendChild(listItem);
            });
            document.body.appendChild(list);
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}
getTodosToList();


// E3/BONUS. Write above functions using async/await with try/catch.
async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
getTodos();

async function getTodosToList() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const list = document.createElement('ul');
        data.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = `${todo.id}: ${todo.title}`;
            list.appendChild(listItem);
        });
        document.body.appendChild(list);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
getTodosToList();

async function postTodo() {
    const todo = {
        userId: 1,
        title: 'New Todo',
        completed: false
    };
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
postTodo();

// E4/BONUS. Write a function postTodo that makes an HTTP POST request to https://jsonplaceholder.typicode.com/todos with a body and writes the result to the console. Consider error handling.
function postTodo() {
    const todo = {
        userId: 1,
        title: 'New Todo',
        completed: false
    };
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
postTodo();


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



//--------------------------Set, Map---------------------------

// Q1. What is a Set?
// A Set is a data structure that stores unique values, meaning no duplicate values are allowed.

// Q2. What are common Set operations?
// Common Set operations include:
// - `add(value)`: Adds a value to the Set.
// - `delete(value)`: Removes a value from the Set.
// - `has(value)`: Checks if a value exists in the Set.
// - `clear()`: Clears all values from the Set.
// - `size`: Returns the number of values in the Set.
// Example:
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate value, will not be added
console.log(mySet.has(1)); // true
mySet.delete(1);
console.log(mySet.size); // 1
mySet.clear();
console.log(mySet.size); // 0

// Q3. What is the difference between a Set and an Array? When to use what?
// Difference between Set and Array:
// - Set stores unique values, whereas Array allows duplicate values.
// - Set operations for search and delete are faster, making it suitable for scenarios where uniqueness is required.
// - Array is better for storing ordered lists of data.
// Use Set when you need to ensure all values are unique. Use Array when you need an ordered collection of items and might have duplicates.

// Q4. What is a Map?
// A Map is a data structure that stores key-value pairs, where keys and values can be any type of value.

// Q5. What are common Map operations?
// Common Map operations include:
// - `set(key, value)`: Sets a key-value pair.
// - `get(key)`: Retrieves the value for a given key.
// - `has(key)`: Checks if a key exists in the Map.
// - `delete(key)`: Removes a key from the Map.
// - `clear()`: Clears all key-value pairs from the Map.
// - `size`: Returns the number of key-value pairs in the Map.
// Example:
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);
console.log(myMap.get('name')); // Alice
console.log(myMap.has('age')); // true
myMap.delete('age');
console.log(myMap.size); // 1
myMap.clear();
console.log(myMap.size); // 0

// Q6. What is the difference between a Map and an Object? When to use what?
// Difference between Map and Object:
// - Map allows any type of key, whereas Object keys can only be strings or symbols.
// - Map has built-in methods for key-value operations, whereas Object requires custom logic for operations.
// - Map maintains insertion order, while Object keys are unordered.
// Use Map when you need to maintain insertion order and use non-string keys. Use Object for simpler key-value storage with string keys.


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



