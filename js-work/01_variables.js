const accountId = 144553
let accountEmail = "mohit@gmail.com"
var accountPassword = "Mohit"
accountCity = "Delhi"

//accountId = 2 // not allowed 

accountEmail = "m@123.gmail.com"
accountPassword = "1234"
accountCity = "mumbai"
let accountStat; // undefined
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountStat])
