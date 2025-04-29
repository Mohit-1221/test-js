// Skeleton
//const user = new Object();
const user = {};
user.id = 101;
user.name = "Bob";
user.isLoggedIn = false;
// console.log(user);

const myUser = {
    fullName:{
        userFullName:{
            firstName: "Mohit",
            lastName: "Sahu"
        }
    }
}

//console.log(myUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

// const obj3 = {obj1, obj2};
//const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
//console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(Object.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "javascript",
    price: 99,
    Instructor: "Chai code"
}

// for getting coursename
//course.courseName;

// second method to getting coursename
const {courseName: name} = course;
console.log(name);

