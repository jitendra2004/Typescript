// typescript check
let age:string="hello world";
console.log(age);

// Primitive Datatype
// 1.number
let age1:number=30;
console.log(age1);

// 2.string 
let name:string="Alice";
console.log(name);

// 3.bigint
let large_number:bigint=121243545454n;
console.log(large_number);

// 4.boolean
let isActive:boolean=true;
console.log(isActive);

// 5.undefined
let value:undefined;
console.log(value);

// 6.null
let value1:null=null;
console.log(value1);

// Type Inference
 let ag=25;
 let name1="Alice";
 console.log(ag,name1);

//  Explicit Type Annotation
let num:number=654;
console.log(num);

// Limitation of Type Interfernce
let value2:any=42;
// console.log(value2.toUpperCase());

// Unknown Type
let value12:unknown="hello";
if(typeof value12==="string"){
    console.log(value12.toUpperCase);
};

// Non -primitive DataTypes
// 1.Arrays
const arr:number[]=[1,5,4,6,1,5];
console.log(arr);

// Mixed Array
const arr1:(string| number)[]=[5,4,65,"hello","jitendra"];
console.log(arr1);

// 2.Tuples
const arr2:[string,number,number,string]=["Mahendra",10,54,"Dharmendra"];
console.log(arr2);

// Objects In Typescript
let obj:{
    name:string,
    age:number,
    Mobile_no:number
};
obj={
    name:"Jitendra",
    age:45,
    Mobile_no:5665464
};

console.log(obj);

// Inline Object
let account:{
    name:string,
    balance:number,
    age?:number // optional property
}={
    name:"Rohit",
    balance:5000
};
console.log(account);

// Type Alias

type student ={
    name:string,
    age:number
};
let s1:student={
    name:"Rohit",
    age:13
};
console.log(s1);

// Interface
interface Customer{
    name:string,
    account_number:number,
    balance:number
};

let c1:Customer={
    name:"Rohan",
    account_number:465,
    balance:5666
};
console.log(c1);

// Declaration Merging
interface Person{
    name:string
};
interface Person{
    age:number
};

// Final output
// {
// name:string,
// age:number
// }

// Extending Types
type Animal ={
    name:string
};
type Dog=Animal&{
    breed:string
};

// Nested Objects
type User={
    name:string,
    address:{
        city:string,
        Pincode:number
    }
};

let u1:User={
    name:"Rohitt",
    address:{
        city:"Mumbai",
        Pincode:400604
    }
};
console.log(u1);

// Utility Types
interface Person{
    name:string,
    age:number
};

type PartialPerson = Partial<Person>

// Required 
type RequiredPerson=Required<Person>;

type ReadonlyPerson = Readonly<Person>;
const p1:ReadonlyPerson={
    name:"Firad",
    age:44
};
// p1.age=545;

// Array of Objects
type Student ={
    name:string,
    age:number
};
let students:Student[]=[
    {name:"Rohit",age:46},
    {name:"Rohan",age:56}
];
console.log(students);

// Function With TypeScript
// Function with Types
function greet (name:string):string{
    return`Hello${name}`;
};
console.log(greet("Riya"));

// Optional Parameters
function meet (name?:string):void{
    console.log(`Hello${name||"Guest"}`);
};
meet("Riya2");

// Default Parameters
function greetUser(name:string="Rohit"){
    console.log(name);
};
greetUser();

// Arrow Function
const multiply =(a:number,b:number):number=>{
    return a * b;
}
console.log(multiply(10,5));


// Rest Parameter
function sum(...numbers:number[]):number{
    return numbers.reduce((a,b)=>a+b,0);
};
console.log(sum(154,64));

// Callback Function
function processUser(callback:(name:string)=>void){
    callback("Rohit");
};
processUser((name)=>{
    console.log(name);
});

// Function Type Alias
type Chill=(a:number)=>void;

const fun:Chill=(a)=>{
    console.log(a);
};

// Classes in Typescript
class Bank{
    name:string;
    age:number;
    account:number;

    constructor(name:string,age:number,account:number){
        this.name=name;
        this.age=age;
        this.account=account;
    }
    greet():void{
        console.log(`Hello ${this.name}`);
    }
}

const b1=new Bank("Rohit",30,59);

// Access Modifiers
// public name:string;
// private balance:number
// protected salary:number

// Inheritance
class Anima{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}
class Do extends Anima{
    breed:string;
    constructor(name:string,breed:string){
        super(name);
        this.breed=breed;
    }
}
// super(name);
// super.greet();

// Generics
function identity<T>(value:T):T{
    return value;
};
console.log(identity(5));
console.log(identity("hello"))
console.log(identity([1,565,5,5]));

// Generics Interface
interface erson<T>{
    name:string,
    age:number,
    id:T
}

let p4:erson<number>={
    name:"hikk",
    age:20,
    id:101
};

// Multiple Generics
interface Data<T,U>{
    id:T,
    name:U
}
let obj14:Data<number,string>={
    id:1,
    name:"hkjhf"
};

// Small Real-Life Example
type User45={
    name:string,
    age:number

};

function printUser(user:User45):void{
    console.log(user.name);
}
printUser({
    name:"hkjhkf",
    age:54
});

// printUser({
//     name:"lnlk",
//     age:"jkfksh"
// });