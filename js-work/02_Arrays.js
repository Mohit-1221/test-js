const marvels = ["Thor", "Hulk", "Ironman"];
const dcs = ["Superman", "flash", "Batman"];

// marvels.push(dcs); // 
// console.log(marvels);
// console.log(marvels[3][1]);

// const all = marvels.concat(dcs);
// console.log(all);

// const newAll = [...marvels, ...dcs];
// console.log(newAll);

const arr1 = [1,2,3, [4,5,6], [7,8,[9,6]]];

const arr2 = arr1.flat(Infinity); // in one array
//console.log(arr2);

// console.log(Array.isArray("Mohit"));// check it is array or not
// console.log(Array.from("Mohit")); // convert in array
// console.log(Array.from({name: "Mohit"})); // ***  return empty

let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a,b,c)); // convert in array[100,200,300]
