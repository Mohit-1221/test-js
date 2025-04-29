let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // Fri Apr 18 2025
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let currDate = new Date(2025, 3, 23);
// console.log(currDate.toDateString());

// let currDate = new Date(2025, 3, 23, 5, 4, 1);
// console.log(currDate.toLocaleString());

// let currDate = new Date("2025-01-23");
// console.log(currDate.toLocaleString());

let currDate = new Date("01-14-2025");
// console.log(currDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(currDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // in sec

let newDate = new Date();
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getHours());

newDate.toLocaleString('default', {
    weekday: "long",
})