//  A Datatypes (1–35)

// 1 JavaScript me kitne primitive datatypes hote hain?
// => JavaScript me 7 primitive data types hote hain: String, Number, Boolean, Undefined, Null, Symbol aur BigInt

//2  typeof null ka output kya hota hai aur kyun?
// =>typeof null ka output`"object"` hota hai —
// ye JavaScript ka purana bug hai, jo backward compatibility ki wajah se aaj tak fix nahi kiya gaya.

//3  undefined aur null me difference batao.
// => Undefined ka matlab hai value assign nahi hui, jabki Null ka matlab hai value jaan-bujh kar empty rakhi gayi hai.

//4 NaN kya hota hai? Example do.
// => NaN (Not a Number) tab aata hai jab koi invalid mathematical operation hota hai.
let x = 10 / "abc";

//5 isNaN() aur Number.isNaN() me difference?
// =>isNaN() pehle value ko number me convert karta hai, jabki Number.isNaN() conversion nahi karta — isliye Number.isNaN() zyada accurate hota hai.
isNaN("abc"); // true
Number.isNaN("abc"); // false

// 6 BigInt kab use karte hain?
// =>BigInt tab use karte hain jab number 2^53 - 1 se bada ho aur normal Number usse accurately store na kar paaye.
let big = 123456789012345678901234567890n;

// 7 String immutable kyu hoti hai?
// => JavaScript me String immutable hoti hai kyunki uska original value change nahi hota, balki har modification par nayi string create hoti hai (memory safety aur performance optimization ke liye).

//8 Symbol datatype ka real use case kya hai?
// => Symbol ka real use case hai unique keys banana, taaki object me name conflict na ho.
const id = Symbol("id");

const user = {
  name: "Rahul",
  [id]: 101,
};

//9 typeof [] ka output kya hoga?
// => kyunki JavaScript me arrays internally objects hi hote hain; array check ke liye Array.isArray([]) use karte hain

//10 Array aur Object me main difference?
// =>
//     | Feature      | Array                                | Object
// | ------------ | ------------------------------------  ----------------------------- |
// | Data Storage | Ordered collection (index-based)  Unordered key-value pairs |
// | Indexing     | Numeric index (0, 1, 2…)              Key (string or symbol)        |
// | Iteration    | for / for…of / forEach                for…in / Object.keys()        |
// | Use Case     | List, sequence                        Properties, structured data   |
// Example
let arr = [10, 20, 30]; // Array
let obj = { a: 10, b: 20 }; // Object

//11 Reference datatype kya hota hai?
// => Reference datatype wo hota hai jisme variable value ka address (reference) store karta hai, na ki actual value.
// Examples:
// Object
// Array
// Function

//12 Primitive aur non-primitive datatype me difference?
// =>
//     | Feature       | Primitive                                                | Non-Primitive (Reference)
// | ------------- | -------------------------------------------------------- | -------------------------------------- |
// | Value Storage | Actual value store hota hai                              | Reference (address) store hota hai     |
// | Mutability    | Immutable                                                | Mutable                                |
// | Examples      | String, Number, Boolean, Null, Undefined, Symbol, BigInt | Object, Array, Function                |
// | Comparison    | Value se compare hota hai                                | Reference se compare hota hai          |
// | Memory        | Stack me store hota hai                                  | Heap me store hota hai                 |
// Primitive
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

// Non-Primitive
let obj1 = { name: "Rahul" };
let obj2 = obj1;
obj2.name = "Amit";
console.log(obj1.name); // "Amit" (changed)

//13 typeof function kya return karta hai?
// =>   functions bhi objects hi hote hain, lekin typeof ke liye special case hai "function".
function greet() {
  console.log("Hello");
}

console.log(typeof greet); // "function"

//14 JavaScript dynamically typed language kyun hai?
// =>JavaScript dynamically typed language isliye hai kyunki variables declare karte waqt type fix nahi hota, aur runtime me type change ho sakta hai.
// Example
let c = 10; // Number
x = "Hello"; // Ab String
console.log(typeof c); // "string"

//15 Boolean("false") ka output kya hoga?
// => Boolean("false") ka output true hoga

// 16 Boolean(0) aur Boolean("0") ka output?
Boolean(0); // false  → number 0 falsy hai
Boolean("0"); // true   → non-empty string truthy hai

// 17 Empty array truthy hoti hai ya falsy?
//=>  JavaScript me sirf false, 0, "", null, undefined, aur NaN falsy hote hain. Array chahe empty ho ya nahi, object type hai, isliye truthy.

// 18 Empty object truthy hota hai ya falsy?
// => JavaScript me objects (chahe empty ho ya na ho) hamesha truthy hota hai

// 19 Number("10a") ka output?
// =>
 Number("10a")        // NaN
typeof Number("10a") // "number"


//20 Type coercion kya hota hai?
// => javaScript khud decide karta hai kaunsa datatype chahiye, aur bina bole convert kar deta hai.

// Implicit aur explicit type conversion me difference?
// => JavaScript me Implicit aur Explicit Type Conversion ka main difference kaun conversion karta hai is par hota hai.

// parseInt("10.5") kya return karega? 

// parseFloat("10px") ka output?

// typeof NaN kya hoga?

// Infinity kya hota hai?

// -Infinity kab milta hai?

// Object.is() ka use?

// == aur === datatype ke context me difference?

// typeof undefined kya hoga?

// Array ka datatype technically kya hota hai?

// String ko number me convert karne ke tarike?

// valueOf() kya karta hai?

// toString() kab fail hota hai?

// typeof Symbol() kya return karega?

// JS me datatype checking best practice kya hai?
