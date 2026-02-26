// ================================================
// A. JavaScript Datatypes (1-35)
// JavaScript Datatypes – Questions + Definition + Example
// ================================================

// Q1. JavaScript me kitne primitive datatypes hote hain?
// Definition:
// JavaScript me 7 primitive datatypes hote hain:
// String, Number, Boolean, Undefined, Null, Symbol aur BigInt.

// Example:
// let name = "Rahul";
// let age = 20;
// let isPass = true;

// ------------------------------------------------

// Q2. typeof null ka output kya hota hai aur kyun?
// Definition:
// typeof null ka output "object" hota hai.
// Ye JavaScript ka purana bug hai jo backward compatibility ki wajah se aaj tak fix nahi hua.

// Example:
// typeof null; // "object"

// ------------------------------------------------

// Q3. undefined aur null me difference batao.
// Definition:
// undefined ka matlab hai variable declare hua hai lekin value assign nahi hui.
// null ka matlab hai value jaan-bujh kar empty rakhi gayi hai.

// Example:
// let a;
// let b = null;

// ------------------------------------------------

// Q4. NaN kya hota hai?
// Definition:
// NaN (Not a Number) tab milta hai jab koi invalid mathematical operation hoti hai.

// Example:
// 10 / "abc"; // NaN

// ------------------------------------------------

// Q5. isNaN() aur Number.isNaN() me difference kya hai?
// Definition:
// isNaN() value ko pehle number me convert karta hai,
// jabki Number.isNaN() bina conversion ke direct check karta hai.

// Example:
// isNaN("abc");          // true
// Number.isNaN("abc");  // false

// ------------------------------------------------

// Q6. BigInt kab use karte hain?
// Definition:
// BigInt tab use hota hai jab number 2^53 − 1 se bada ho
// aur normal Number datatype use accurately store na kar paaye.

// Example:
// let big = 12345678901234567890n;

// ------------------------------------------------

// Q7. String immutable kyun hoti hai?
// Definition:
// JavaScript me string immutable hoti hai,
// matlab original string change nahi hoti, balki nayi string ban jati hai.

// Example:
// let str = "Hi";
// str[0] = "H"; // change nahi hoga

// ------------------------------------------------

// Q8. Symbol datatype ka real use case kya hai?
// Definition:
// Symbol ka use unique keys banane ke liye hota hai,
// taaki object me duplicate property na bane.

// Example:
// const id = Symbol("id");
// const user = { name: "Rahul", [id]: 101 };

// ------------------------------------------------

// Q9. typeof [] ka output kya hota hai?
// Definition:
// typeof [] ka output "object" hota hai,
// kyunki JavaScript me array internally object hota hai.

// Example:
// typeof []; // "object"

// ------------------------------------------------

// Q10. Array aur Object me difference kya hai?
// Definition:
// Array ordered data store karta hai aur index-based hota hai,
// jabki Object key-value pair me data store karta hai.

// Example:
// let arr = [10, 20];
// let obj = { a: 10 };

// ------------------------------------------------

// Q11. Reference datatype kya hota hai?
// Definition:
// Reference datatype me variable actual value ke bajay
// memory ka address store karta hai.

// Example:
// let obj1 = { name: "A" };
// let obj2 = obj1;

// ------------------------------------------------

// Q12. Primitive aur Non-Primitive datatype me difference batao.
// Definition:
// Primitive datatype value store karta hai aur immutable hota hai,
// jabki Non-Primitive datatype reference store karta hai aur mutable hota hai.

// Example:
// let x = 10;
// let y = x;
// y = 20; // x unchanged

// ------------------------------------------------

// Q13. typeof function kya return karta hai?
// Definition:
// typeof function ka output "function" hota hai,
// jo JavaScript me ek special case hai.

// Example:
// typeof function() {}; // "function"

// ------------------------------------------------

// Q14. JavaScript dynamically typed language kyun hai?
// Definition:
// JavaScript dynamically typed hai kyunki
// variable ka datatype runtime par change ho sakta hai.

// Example:
// let a = 10;
// a = "Hello";

// ------------------------------------------------

// Q15. Boolean("false") ka output kya hota hai?
// Definition:
// Non-empty string hamesha truthy hoti hai.

// Example:
// Boolean("false"); // true

// ------------------------------------------------

// Q16. Boolean(0) aur Boolean("0") ka output?
// Definition:
// 0 falsy hota hai, jabki non-empty string truthy hoti hai.

// Example:
// Boolean(0);   // false
// Boolean("0"); // true

// ------------------------------------------------

// Q17. Empty array truthy hoti hai ya falsy?
// Definition:
// Array ek object hota hai, isliye hamesha truthy hota hai.

// Example:
// Boolean([]); // true

// ------------------------------------------------

// Q18. Empty object truthy hota hai ya falsy?
// Definition:
// Object hamesha truthy hota hai, chahe empty ho.

// Example:
// Boolean({}); // true

// ------------------------------------------------

// Q19. Number("10a") ka output kya hota hai?
// Definition:
// Invalid string number me convert nahi hoti, isliye NaN milta hai.

// Example:
// Number("10a"); // NaN

// ------------------------------------------------

// Q20. Type coercion kya hota hai?
// Definition:
// Type coercion wo process hai jisme JavaScript
// automatically ek datatype ko dusre datatype me convert karta hai.

// Example:
// "5" + 2; // "52"

// ------------------------------------------------

// Q21. Implicit aur Explicit conversion me difference?
// Definition:
// Implicit conversion JS khud karta hai,
// Explicit conversion developer khud karta hai.

// Example:
// Number("10"); // Explicit

// ------------------------------------------------

// Q22. parseInt("10.5") kya return karta hai?
// Definition:
// parseInt integer part return karta hai.

// Example:
// parseInt("10.5"); // 10

// ------------------------------------------------

// Q23. parseFloat("10px") ka output?
// Definition:
// parseFloat decimal tak number read karta hai.

// Example:
// parseFloat("10px"); // 10

// ------------------------------------------------

// Q24. typeof NaN kya hota hai?
// Definition:
// NaN ka datatype number hota hai.

// Example:
// typeof NaN; // "number"

// ------------------------------------------------

// Q25. Infinity kya hota hai?
// Definition:
// Infinity ek special number hai jo limit se bahar value ko represent karta hai.

// Example:
// 1 / 0; // Infinity

// ------------------------------------------------

// Q26. -Infinity kab milta hai?
// Definition:
// Negative number ko zero se divide karne par -Infinity milta hai.

// Example:
// -1 / 0; // -Infinity

// ------------------------------------------------

// Q27. Object.is() ka use kya hai?
// Definition:
// Object.is() values ko accurately compare karta hai,
// khaaskar NaN aur +0 / -0 ke case me.

// Example:
// Object.is(NaN, NaN); // true

// ------------------------------------------------

// Q28. == aur === me difference?
// Definition:
// == type conversion karta hai,
// === value aur datatype dono compare karta hai.

// Example:
// "5" == 5;  // true
// "5" === 5; // false

// ------------------------------------------------

// Q29. typeof undefined kya hota hai?
// Definition:
// undefined ka datatype undefined hota hai.

// Example:
// typeof undefined; // "undefined"

// ------------------------------------------------

// Q30. Array ka datatype technically kya hota hai?
// Definition:
// Array technically ek object hota hai.

// Example:
// typeof []; // "object"

// ------------------------------------------------

// Q31. String ko number me convert karne ke tarike?
// Definition:
// String ko number me convert karne ke kai tarike hote hain.

// Example:
// Number("10");
// parseInt("10");
// parseFloat("10.5");
// +"10";

// ------------------------------------------------

// Q32. valueOf() method kya karta hai?
// Definition:
// valueOf() method object ka primitive value return karta hai.

// Example:
// let n = new Number(10);
// n.valueOf(); // 10

// ------------------------------------------------

// Q33. toString() kab fail hota hai?
// Definition:
// toString() method null aur undefined par kaam nahi karta.

// Example:
// null.toString();      // Error
// undefined.toString(); // Error

// ------------------------------------------------

// Q34. typeof Symbol() kya return karta hai?
// Definition:
// Symbol ka datatype symbol hota hai.

// Example:
// typeof Symbol(); // "symbol"

// ------------------------------------------------

// Q35. JavaScript me datatype checking best practice kya hai?
// Definition:
// Primitive ke liye typeof,
// array ke liye Array.isArray(),
// null ke liye strict check,
// aur object ke liye instanceof use karna chahiye.

// Example:
// Array.isArray([]); // true

// ================================================
