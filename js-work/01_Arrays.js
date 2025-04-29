// Array

const arr1 = [1,2,3,4,5];
// console.log(arr1[0]);
// const hero = ["Thor", "Hulk"];
// const arr2 = new Array(1,2,3,4);

// Array methods
// arr1.push(9);
// arr1.push(8);
// arr1.pop(); // remove last element

// arr1.unshift(8); // add in starting 
// arr1.shift(); // remove first element

//console.log(arr1.includes(9)); // check 9 present in the array or not 
//console.log(arr1.indexOf(9)); // return index of element

// const newArr = arr1.join(); // convert in string format 
// console.log(arr1);
// console.log(typeof newArr);

// slice, splice
// console.log("A ", arr1);

 const a1 = arr1.slice(1, 3); //  return array from index 1 to 3(not include)
// console.log(a1);
// console.log("B ", arr1);

 const a2 = arr1.splice(1, 3); // remove element from index 1 to 3(include) and return in the form of array
// console.log(a2);
// console.log("C ", arr1);