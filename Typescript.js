"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typescript check
let age = "hello world";
console.log(age);
// Primitive Datatype
// 1.number
let age1 = 30;
console.log(age1);
// 2.string 
let name = "Alice";
console.log(name);
// 3.bigint
let large_number = 121243545454n;
console.log(large_number);
// 4.boolean
let isActive = true;
console.log(isActive);
// 5.undefined
let value;
console.log(value);
// 6.null
let value1 = null;
console.log(value1);
// Type Inference
let ag = 25;
let name1 = "Alice";
console.log(ag, name1);
//  Explicit Type Annotation
let num = 654;
console.log(num);
// Limitation of Type Interfernce
let value2 = 42;
// console.log(value2.toUpperCase());
// Unknown Type
let value12 = "hello";
if (typeof value12 === "string") {
    console.log(value12.toUpperCase);
}
;
// Non -primitive DataTypes
// 1.Arrays
const arr = [1, 5, 4, 6, 1, 5];
console.log(arr);
// Mixed Array
const arr1 = [5, 4, 65, "hello", "jitendra"];
console.log(arr1);
// 2.Tuples
const arr2 = ["Mahendra", 10, 54, "Dharmendra"];
console.log(arr2);
// Objects In Typescript
let obj;
obj = {
    name: "Jitendra",
    age: 45,
    Mobile_no: 5665464
};
console.log(obj);
// Inline Object
let account = {
    name: "Rohit",
    balance: 5000
};
console.log(account);
let s1 = {
    name: "Rohit",
    age: 13
};
console.log(s1);
;
let c1 = {
    name: "Rohan",
    account_number: 465,
    balance: 5666
};
console.log(c1);
;
;
let u1 = {
    name: "Rohitt",
    address: {
        city: "Mumbai",
        Pincode: 400604
    }
};
console.log(u1);
;
const p1 = {
    name: "Firad",
    age: 44
};
let students = [
    { name: "Rohit", age: 46 },
    { name: "Rohan", age: 56 }
];
console.log(students);
// Function With TypeScript
// Function with Types
function greet(name) {
    return `Hello${name}`;
}
;
console.log(greet("Riya"));
// Optional Parameters
function meet(name) {
    console.log(`Hello${name || "Guest"}`);
}
;
meet("Riya2");
// Default Parameters
function greetUser(name = "Rohit") {
    console.log(name);
}
;
greetUser();
// Arrow Function
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(10, 5));
// Rest Parameter
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
;
console.log(sum(154, 64));
// Callback Function
function processUser(callback) {
    callback("Rohit");
}
;
processUser((name) => {
    console.log(name);
});
const fun = (a) => {
    console.log(a);
};
// Classes in Typescript
class Bank {
    constructor(name, age, account) {
        this.name = name;
        this.age = age;
        this.account = account;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const b1 = new Bank("Rohit", 30, 59);
// Access Modifiers
// public name:string;
// private balance:number
// protected salary:number
// Inheritance
class Anima {
    constructor(name) {
        this.name = name;
    }
}
class Do extends Anima {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
// super(name);
// super.greet();
// Generics
function identity(value) {
    return value;
}
;
console.log(identity(5));
console.log(identity("hello"));
console.log(identity([1, 565, 5, 5]));
let p4 = {
    name: "hikk",
    age: 20,
    id: 101
};
let obj14 = {
    id: 1,
    name: "hkjhf"
};
function printUser(user) {
    console.log(user.name);
}
printUser({
    name: "hkjhkf",
    age: 54
});
// printUser({
//     name:"lnlk",
//     age:"jkfksh"
// });
//# sourceMappingURL=Typescript.js.map