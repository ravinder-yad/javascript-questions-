// 70 Strong Interview Questions


// JavaScript single-threaded kyu hai?
// => JavaScript ek single-threaded language hai kyunki iska execution model ek hi thread par based hai. Iska matlab hai ki JavaScript code sequentially execute hota hai, aur ek time par sirf ek task perform kar sakta hai. Iska reason ye hai ki JavaScript originally web browsers ke liye design kiya gaya tha, jahan simplicity aur ease of use ko prioritize kiya gaya tha. Single-threaded nature se JavaScript asynchronous programming ko support karta hai, jisse non-blocking operations possible hote hain, jaise ki network requests ya timers, bina main thread ko block kiye.

// Execution context kya hota hai?

// Call stack ka role?
// => Call stack ek LIFO (Last-In, First-Out) data structure hai jo JavaScript engine me functions ko track karta hai.

// Hoisting real example?
// => hoisting me var ko memory me top par le jate hain


// Scope chain kya hoti hai?
// => JavaScript mein jab hum kisi variable ko access karne ki koshish karte hain, toh engine sabse pehle use current scope (jahan wo call hua hai) mein dhundhta hai. Agar wahan nahi milta, toh wo uske outer (parent) scope mein check karta hai. Ye process tab tak chalta hai jab tak variable mil na jaye ya hum Global Scope tak na pahunch jayein. Is sequence of scopes ko hi "Scope Chain" kehte hain.
// => scope chain ek mechanism hai jo JavaScript engine ko variable ko access karne me help karta hai

// Lexical scope kya hota hai?
// => lexical scope ek mechanism hai jo JavaScript engine ko variable ko access karne me help karta hai

// Closure kya hota hai?
// =>ek aisa concept hai jisme function apne outer (parent) function ke variables ko yaad rakhta hai, chahe outer function execute ho kar khatam hi kyu na ho gaya h0

// Closure ka real use case?
// Ek function apne outer function ke variables ko yaad rakhta hai, chahe outer function execute ho chuka ho.
// Callback function kya hota hai?

// Callback hell kya hai?

// Promise kya hota hai?

// Promise states kaun si?

// then aur catch ka role?

// Async/await kya solve karta hai?

// async function kya return karta hai?

// Error handling async me kaise?

// Event loop kya hota hai?

// Microtask queue kya hoti hai?

// Macrotask queue kya hoti hai?

// setTimeout ka behavior?

// this keyword kya hai?

// Global this ka value?

// Arrow function me this?

// call, apply, bind difference?

// Prototype kya hota hai?

// Prototype chain kya hai?

// Class vs function constructor?

// Inheritance JS me kaise hoti hai?

// Shallow copy vs deep copy?

// Spread se deep copy hoti hai?

// JSON stringify limitation?

// Array methods map/filter/reduce?

// Reduce ka real use?

// forEach vs map?

// Mutable vs immutable operations?

// DOM kya hota hai?

// Event bubbling?

// Event capturing?

// addEventListener ka use?

// Debouncing kya hota hai?

// Throttling kya hota hai?

// LocalStorage vs SessionStorage?

// Cookies vs localStorage?

// Memory leak kya hota hai?

// Strict mode kya karta hai?

// ES6 features kaun-kaun se?

// Module system kya hota hai?

// import vs require?

// JS secure kaise banaye?

// Interview me JS ka toughest sawal?