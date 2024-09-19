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
