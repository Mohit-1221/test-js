// Primitive

// 7 type: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const value = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 73473473737347345n;

// Reference (Non Primitive)
// Array, Object, Functions 

const heros = ["Ironman", "Thor", "Hulk"];
let myInfo = {
    name: "Mohit",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}
//console.log(typeof heros);

// ----------------------------------------------------------------
// stack(primitive) , Heap(Non primitive)

let str1 = "Mohit";
let str2 = str1;
// console.log(str1);
// console.log(str2);
str2 = "Rohit";
// console.log(str1); // Mohit
// console.log(str2); // Rohit

let user1 = {
    name: "Aryan",
    age: 21,
}
let user2 = user1;
user2.name = "Mohit";
console.log(user1.name);
console.log(user2.name);