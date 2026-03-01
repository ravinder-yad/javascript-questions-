// ================================================
// B. JavaScript Variables (36–70)
// Questions + Definition + Example
// ================================================

// Q36. var, let, const me difference kya hai?
// Definition:
// var function scoped hota hai,
// let aur const block scoped hote hain.
// const me reassignment allowed nahi hota.

// Example:
// var a = 10;
// let b = 20;
// const c = 30;

// ------------------------------------------------

// Q37. var function scoped kyu hota hai?
// Definition:
// var sirf function ke andar hi limit hota hai,
// block ({}) ko follow nahi karta.

// Example:
// if (true) {
//   var x = 10;
// }
// console.log(x); // 10

// ------------------------------------------------

// Q38. let block scoped ka matlab kya hai?
// Definition:
// let sirf usi block ke andar accessible hota hai
// jisme wo declare hota hai.

// Example:
// if (true) {
//   let y = 20;
// }
// // y not accessible here

// ------------------------------------------------

// Q39. const ke saath value change kyun ho jati hai (object)?
// Definition:
// const variable ka reference constant hota hai,
// object ke andar ki value change ho sakti hai.

// Example:
// const obj = { a: 10 };
// obj.a = 20; // allowed

// ------------------------------------------------

// Q40. Hoisting kya hoti hai?
// Definition:
// Hoisting ek process hai jisme declarations
// code execute hone se pehle memory me chali jati hain.

// Example:
// console.log(a);
// var a = 10; // undefined

// ------------------------------------------------

// Q41. var hoist hota hai ya let?
// Definition:
// var hoist hota hai aur undefined assign hota hai,
// let hoist hota hai par TDZ me rehta hai.

// Example:
// console.log(a); // undefined
// var a = 10;

// ------------------------------------------------

// Q42. Temporal Dead Zone (TDZ) kya hota hai?
// Definition:
// TDZ wo area hai jahan let/const declared to hote hain
// par access nahi kar sakte.

// Example:
// console.log(b); // Error
// let b = 10;

// ------------------------------------------------

// Q43. const variable bina initialize kyu nahi hota?
// Definition:
// const ko declaration ke time hi value chahiye
// kyunki baad me assign nahi kar sakte.

// Example:
// const x = 10; // correct

// ------------------------------------------------

// Q44. Global scope kya hota hai?
// Definition:
// Jo variable function ya block ke bahar declare ho,
// wo global scope me hota hai.

// Example:
// let g = 10;

// ------------------------------------------------

// Q45. Local scope kya hota hai?
// Definition:
// Jo variable function ya block ke andar ho,
// wo local scope me hota hai.

// Example:
// function test() {
//   let a = 5;
// }

// ------------------------------------------------

// Q46. Shadowing kya hoti hai?
// Definition:
// Jab inner scope ka variable outer scope ke variable
// ko hide kar deta hai, use shadowing kehte hain.

// Example:
// let a = 10;
// {
//   let a = 20;
// }

// ------------------------------------------------

// Q47. Illegal shadowing kya hota hai?
// Definition:
// Jab let/const ko var se shadow kiya jata hai,
// use illegal shadowing kehte hain.

// Example:
// let x = 10;
// {
//   var x = 20; // Error
// }

// ------------------------------------------------

// Q48. Block scope ka example do.
// Definition:
// Block scope sirf {} ke andar valid hota hai.

// Example:
// {
//   let a = 10;
//   const b = 20;
// }

// ------------------------------------------------

// Q49. Function scope ka example do.
// Definition:
// Function ke andar declare variable
// sirf function ke andar hi accessible hota hai.

// Example:
// function demo() {
//   var a = 10;
// }

// ------------------------------------------------

// Q50. Memory me var aur let ka difference?
// Definition:
// var global object se attach ho jata hai,
// let alag memory space me store hota hai.

// Example:
// var a = 10;
// let b = 20;

// ------------------------------------------------

// Q51. Re-declaration kaha allowed hai?
// Definition:
// var me same scope me redeclaration allowed hai,
// let aur const me nahi.

// Example:
// var a = 10;
// var a = 20; // allowed

// ------------------------------------------------

// Q52. Re-assignment kaha allowed hai?
// Definition:
// var aur let me reassignment allowed hai,
// const me nahi.

// Example:
// let a = 10;
// a = 20;

// ------------------------------------------------

// Q53. const arr = [] me arr.push() kyu allowed hai?
// Definition:
// const reference change nahi hone deta,
// array ke andar value change ho sakti hai.

// Example:
// const arr = [];
// arr.push(10); // allowed

// ------------------------------------------------

// Q54. JS me variable naming rules kya hain?
// Definition:
// Variable letter, _, $ se start ho sakta hai,
// number se start nahi ho sakta.

// Example:
// let myName;
// let _age;
// let $price;

// ------------------------------------------------

// Q55. $ aur _ variable name me use ho sakta hai?
// Definition:
// Haan, $ aur _ valid characters hain.

// Example:
// let $name = "A";
// let _age = 20;

// ------------------------------------------------

// Q56. Undeclared variable kya hota hai?
// Definition:
// Jo variable bina declare kiye use kiya jaye,
// use undeclared variable kehte hain.

// Example:
// a = 10;

// ------------------------------------------------

// Q57. Strict mode me undeclared variable ka behavior?
// Definition:
// Strict mode me undeclared variable error deta hai.

// Example:
// "use strict";
// a = 10; // Error

// ------------------------------------------------

// Q58. Global object ke sath var ka relation?
// Definition:
// var global scope me declare ho to
// global object ka part ban jata hai.

// Example:
// var a = 10;
// window.a; // 10

// ------------------------------------------------

// Q59. window.varName kab work karta hai?
// Definition:
// Jab variable var se global scope me declare ho.

// Example:
// var x = 5;
// window.x; // 5

// ------------------------------------------------

// Q60. Best practice: var use karna chahiye ya nahi?
// Definition:
// Best practice ye hai ki var avoid karein
// aur let / const use karein.

// Example:
// const a = 10;

// ------------------------------------------------

// Q61. Multiple variables ek line me declare karna sahi hai?
// Definition:
// Possible hai, par readability ke liye avoid karna chahiye.

// Example:
// let a = 1, b = 2;

// ------------------------------------------------

// Q62. let ko redeclare karne par error kyu?
// Definition:
// let duplicate declaration allow nahi karta
// same scope me.

// Example:
// let a = 10;
// let a = 20; // Error

// ------------------------------------------------

// Q63. Variable memory leak kya hota hai?
// Definition:
// Jab unused variables memory se free nahi hote,
// use memory leak kehte hain.

// Example:
// Global variables misuse

// ------------------------------------------------

// Q64. JS me garbage collection ka role?
// Definition:
// Garbage collector unused memory ko
// automatically free karta hai.

// Example:
// Object reference remove hone par memory free hoti hai

// ------------------------------------------------

// Q65. Constant ka matlab JS me kya hai?
// Definition:
// Constant ka matlab hai reference change nahi hoga,
// value (object ke andar) change ho sakti hai.

// Example:
// const a = 10;

// ------------------------------------------------

// Q66. Variable initialization aur declaration me difference?
// Definition:
// Declaration variable banana hai,
// Initialization value dena hai.

// Example:
// let a;      // declaration
// a = 10;     // initialization

// ------------------------------------------------

// Q67. Hoisting ke time value kya hoti hai?
// Definition:
// var ke case me undefined hoti hai,
// let/const me access allowed nahi hota.

// Example:
// console.log(a); // undefined
// var a = 10;

// ------------------------------------------------

// Q68. let hoist hota hai ya nahi?
// Definition:
// let hoist hota hai par TDZ me hota hai.

// Example:
// console.log(a); // Error
// let a = 10;

// ------------------------------------------------

// Q69. const object freeze kaise kare?
// Definition:
// Object.freeze() object ko immutable bana deta hai.

// Example:
// const obj = { a: 10 };
// Object.freeze(obj);

// ------------------------------------------------

// Q70. Variable scope debugging ka best tarika?
// Definition:
// console.log, debugger keyword,
// aur block-wise checking best hoti hai.

// Example:
// debugger;

// ================================================
