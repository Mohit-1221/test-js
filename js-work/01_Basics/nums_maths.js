// const num = 400;
// console.log(typeof num);

const nums = new Number(100);
// console.log(nums);
// console.log(nums.toString().length);
// console.log(nums.toFixed(2));

const otherNum = 23.8967;
//console.log(otherNum.toPrecision(2));

const hund = 10000000;
//console.log(hund.toLocaleString('en-In'));

///////////////////// Maths ////////////////////////////////////

// console.log(Math);
// console.log(Math.round(4.5)); // 5
// console.log(Math.max(5,3,4,5,2)); // 5
// console.log(Math.min(5,3,4,5,2)); // 2
// console.log(Math.ceil(4.6)); // 5
// console.log(Math.floor(4.6)); // 4

console.log(Math.random()); // any randum decimal number between 0 to 1 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);