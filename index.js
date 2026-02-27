// GitHub Contribution Verification: 2026-02-27-T20:00
// JavaScript Interview Questions & Examples - Last Synced: 2026-02-27
// What is an object in JavaScript?

// JavaScript me object  ek aisa data type hota hai jo  key–value pairs  ke form me related data ko store karta hai.

// How do you create an object using object literal syntax?
// =>
const student = {
  name: "Ravinder yadav",
  age: 18,
  course: "software dev",
};

// How can you access object properties using dot notation?
// =>
let person = {
  name: "ravinder",
  age: 18,
};
console.log(person.name);
console.log(person.age);

// How can you access object properties using bracket notation?
// =>
const user = {
  name: "ravinder",
  age: 30,
};
console.log(user["name"]);
console.log(user["age"]);

// How do you add a new property to an existing object?
// =>
const users = { name: "golu" };
users.name;
users.age = 18;

// How do you delete a property from an object?
// =>
const Auth = {
  email: "raj@gmail.com",
  name: "helllo",
  password: 788444444,
};
delete Auth.password;
console.log(Auth);

// What is the difference between an object and an array in JavaScript?
// =>
const classrom = {
  name: "Thushar",
  age: 22,
  isAdmin: true,
};

// How can you check if a property exists in an object?
// =>
const obj = { a: 2 };
"a" in obj;
"toString" in obj;
console.log(obj);

// What is a nested object?
// =>
const us = {
  name: "rohit",
  age: 25,
  address: {
    city: "alwar",
    zip: "10001",
    country: {
      name: "USA",
      code: "US",
    },
  },
};

// How do you loop through all properties of an object?
// =>
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

// Create an object student with properties: name, age, and course. Print all values.
const students = {
  name: "John",
  age: 20,
  course: "Software dev",
};

// Print all values
Object.values(student).forEach((value) => {
  console.log(value);
});

// Write a program to add a new property email to an existing object.
// =>
const studen = {
  name: "John",
  age: 20,
  course: "Science",
};

student.email = "ravi@example.com";

console.log(student);

// Create an object user and delete the password property from it.
// =>
const use = {
  username: "alex123",
  email: "alex@example.com",
  password: "secret123",
};

delete use.password;

console.log(use);

// Create a nested object address inside a person object and access the city name.
const personl = {
  name: "Rahul",
  age: 22,
  address: {
    city: "Alwar",
    state: "Rajasthan",
    country: "India",
  },
};

// Access the city name
console.log(personl.address.city);

// Write a program to check whether a property phone exists in an object or not.
const user1 = {
  name: "Amit",
  email: "amit@example.com",
};

if ("phone" in user1) {
  console.log("Phone property exists");
} else {
  console.log("Phone property does not exist");
}

// hasOwnProperty Example
const user2 = {
  name: "Amit",
  age: 25,
};

console.log(user2.hasOwnProperty("name"));
console.log(user2.hasOwnProperty("email"));
