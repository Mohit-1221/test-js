// Objects

// Objects Literals

const mySym = Symbol("Key1");
const user = {
    name: "Mohit",
    "full name": "Mohit Sahu",
    [mySym]: "myKey",
    age: 22,
    email: "mohit@gmail.com",
    location: "Prayagraj",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"] 
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

user.email = "mohit@chat.com";
//Object.freeze(user); // freeze the objects can not change value of objects
user.email = "mohit@gpt.com";
//console.log(user);

user.greeting = function(){
    console.log("Hello user");
}

user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());
