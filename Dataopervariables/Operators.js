// ================================================
// D. JavaScript Operators & Conditionals (71–110)
// Questions + Definition + Example
// ================================================

// Q71. Arithmetic operators kaun-kaun se hote hain?
// Definition:
// Arithmetic operators numbers par calculation ke liye use hote hain.

// Operators:
// +, -, *, /, %, **

// Example:
// 10 + 5; // 15

// ------------------------------------------------

// Q72. + operator string ke sath kya karta hai?
// Definition:
// + operator string ke sath concatenation (jodne) ka kaam karta hai.

// Example:
// "Hello" + "World"; // "HelloWorld"

// ------------------------------------------------

// Q73. 10 + "5" ka output kya hoga?
// Definition:
// Number + String = String (type coercion).

// Example:
// 10 + "5"; // "105"

// ------------------------------------------------

// Q74. "10" - 5 ka output kya hoga?
// Definition:
// - operator string ko number me convert karta hai.

// Example:
// "10" - 5; // 5

// ------------------------------------------------

// Q75. * operator string ke sath kaise behave karta hai?
// Definition:
// * operator string ko number me convert karne ki koshish karta hai.

// Example:
// "5" * 2; // 10

// ------------------------------------------------

// Q76. Unary operator kya hota hai?
// Definition:
// Jo operator sirf ek operand par kaam kare,
// use unary operator kehte hain.

// Example:
// +"10"; // 10

// ------------------------------------------------

// Q77. ++i aur i++ me difference kya hai?
// Definition:
// ++i pehle increment karta hai, phir value use hoti hai.
// i++ pehle value use hoti hai, phir increment hota hai.

// Example:
// let i = 5;
// ++i; // 6
// i++; // 6 then i = 7

// ------------------------------------------------

// Q78. Assignment operators ka use kya hai?
// Definition:
// Assignment operators value assign aur modify karte hain.

// Operators:
// =, +=, -=, *=, /=

// Example:
// let a = 10;
// a += 5; // 15

// ------------------------------------------------

// Q79. Comparison operators kaun se hote hain?
// Definition:
// Comparison operators values ko compare karte hain.

// Operators:
// ==, ===, !=, !==, >, <, >=, <=

// Example:
// 5 > 3; // true

// ------------------------------------------------

// Q80. == aur === me difference kya hai?
// Definition:
// == type conversion karta hai.
// === type aur value dono check karta hai.

// Example:
// "5" == 5;  // true
// "5" === 5; // false

// ------------------------------------------------

// Q81. != aur !== me difference kya hai?
// Definition:
// != loose comparison karta hai.
// !== strict comparison karta hai.

// Example:
// "5" != 5;   // false
// "5" !== 5;  // true

// ------------------------------------------------

// Q82. Logical operators kaun se hote hain?
// Definition:
// Logical operators condition combine karne ke kaam aate hain.

// Operators:
// &&, ||, !

// Example:
// true && false; // false

// ------------------------------------------------

// Q83. && short-circuit kaise karta hai?
// Definition:
// && pehli false value par hi ruk jata hai.

// Example:
// false && console.log("Hello"); // execute nahi hota

// ------------------------------------------------

// Q84. || ka truthy behavior kya hai?
// Definition:
// || pehli truthy value return karta hai.

// Example:
// 0 || "Hello"; // "Hello"

// ------------------------------------------------

// Q85. ! operator kya karta hai?
// Definition:
// ! operator boolean value ko reverse karta hai.

// Example:
// !true; // false

// ------------------------------------------------

// Q86. Bitwise operators kya hote hain?
// Definition:
// Bitwise operators binary (0,1) par kaam karte hain.

// Operators:
// &, |, ^, ~, <<, >>

// Example:
// 5 & 1; // 1

// ------------------------------------------------

// Q87. typeof operator ka use kya hai?
// Definition:
// typeof variable ka datatype batata hai.

// Example:
// typeof 10; // "number"

// ------------------------------------------------

// Q88. Ternary operator ka syntax kya hai?
// Definition:
// Condition ke base par short if-else likhne ke liye.

// Syntax:
// condition ? value1 : value2

// Example:
// age > 18 ? "Adult" : "Minor";

// ------------------------------------------------

// Q89. Ternary operator kab avoid karna chahiye?
// Definition:
// Jab condition complex ho,
// readability kam ho jaye tab avoid karna chahiye.

// Example:
// Nested ternary (avoid)

// ------------------------------------------------

// Q90. Spread operator kya hota hai?
// Definition:
// Spread operator (...) array/object ko expand karta hai.

// Example:
// let arr = [1, 2];
// let newArr = [...arr, 3];

// ------------------------------------------------

// Q91. Rest operator kya hota hai?
// Definition:
// Rest operator multiple values ko ek array me collect karta hai.

// Example:
// function sum(...nums) {
//   return nums;
// }

// ------------------------------------------------

// Q92. Spread aur Rest me difference kya hai?
// Definition:
// Spread values ko expand karta hai.
// Rest values ko collect karta hai.

// Example:
// Spread → [...arr]
// Rest → function(...args)

// ------------------------------------------------

// Q93. delete operator kya karta hai?
// Definition:
// delete object ki property remove karta hai.

// Example:
// let obj = { a: 10 };
// delete obj.a;

// ------------------------------------------------

// Q94. in operator ka use kya hai?
// Definition:
// in operator check karta hai property object me hai ya nahi.

// Example:
// "a" in { a: 10 }; // true

// ------------------------------------------------

// Q95. instanceof operator kya check karta hai?
// Definition:
// instanceof object aur constructor ke relation ko check karta hai.

// Example:
// [] instanceof Array; // true

// ------------------------------------------------

// Q96. Nullish coalescing operator (??) kya hai?
// Definition:
// ?? sirf null aur undefined ko check karta hai.

// Example:
// null ?? "Default"; // "Default"

// ------------------------------------------------

// Q97. || aur ?? me difference kya hai?
// Definition:
// || falsy values pe kaam karta hai.
// ?? sirf null/undefined pe.

// Example:
// 0 || 5;  // 5
// 0 ?? 5;  // 0

// ------------------------------------------------

// Q98. Optional chaining operator (?.) kya karta hai?
// Definition:
// Safe property access deta hai bina error ke.

// Example:
// user?.name;

// ------------------------------------------------

// Q99. Operator precedence kya hoti hai?
// Definition:
// Ye decide karti hai kaunsa operator pehle execute hoga.

// Example:
// 2 + 3 * 4; // 14

// ------------------------------------------------

// Q100. () precedence kaise change karta hai?
// Definition:
// Parentheses pehle execute hote hain.

// Example:
// (2 + 3) * 4; // 20

// ------------------------------------------------

// Q101. typeof NaN === "number" kyu true hai?
// Definition:
// NaN technically Number type ka hi part hai.

// Example:
// typeof NaN; // "number"

// ------------------------------------------------

// Q102. Equality comparison ka algorithm kya hai?
// Definition:
// Loose equality type conversion karta hai
// aur phir comparison karta hai.

// Example:
// "5" == 5; // true

// ------------------------------------------------

// Q103. Loose comparison kab dangerous hota hai?
// Definition:
// Jab unexpected type conversion bug create kare.

// Example:
// "" == 0; // true (confusing)

// ------------------------------------------------

// Q104. +true ka output kya hota hai?
// Definition:
// Unary + boolean ko number me convert karta hai.

// Example:
// +true; // 1

// ------------------------------------------------

// Q105. +false ka output kya hota hai?
// Definition:
// false number me convert ho jata hai.

// Example:
// +false; // 0

// ------------------------------------------------

// Q106. !!value ka use kya hai?
// Definition:
// !! kisi bhi value ko boolean me convert karta hai.

// Example:
// !!"Hello"; // true

// ------------------------------------------------

// Q107. Logical operator se default value kaise set kare?
// Definition:
// || operator default value dene ke kaam aata hai.

// Example:
// let name = input || "Guest";

// ------------------------------------------------

// Q108. Bitwise vs Logical operator me difference?
// Definition:
// Bitwise binary par kaam karta hai,
// Logical boolean par.

// Example:
// & vs &&

// ------------------------------------------------

// Q109. Operator overloading JS me hoti hai?
// Definition:
// JavaScript me traditional operator overloading nahi hoti,
// sirf + string ke sath special case hai.

// Example:
// "Hi" + "JS";

// ------------------------------------------------

// Q110. Real interview trick operator question example?
// Definition:
// Type coercion based questions common hote hain.

// Example:
// [] + []; // ""

// ------------------------------------------------

// ================================================
