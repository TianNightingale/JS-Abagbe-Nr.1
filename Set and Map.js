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

