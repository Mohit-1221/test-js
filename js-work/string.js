const name = "Mohit";
const age = 22;
//console.log(name + age + " value");
//console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String('Mohit-Sahu');

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length); // 9
//console.log(gameName.charAt(2)); // h
//console.log(gameName.indexOf('h'));
//console.log(gameName.substring(0,4));

//console.log(gameName.slice(-9, 4));

const stringName = "    Mohit   ";
console.log(stringName);
console.log(stringName.trim()); // trim method in mdn read

const url = "https://google.com/google%20com";
console.log(url.replace("%20", "-"));
console.log(url.includes("google"));  // true
console.log(gameName.split("-"));