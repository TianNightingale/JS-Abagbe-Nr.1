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
