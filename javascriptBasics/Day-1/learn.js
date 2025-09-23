// console.log("Hello, world");

// variables in javascript 
// variables are container which holds the data which could be replace by something else.

// var, let and const are the keywords to declare the variables in javascript.

// var is the old way of declaring the variable in javascript.

var name = "mayuri"; 

// here i reassign value of name varible.
name = 'megha'; 
console.log(name); 

// but now we use let and const to declare the varible in javascript.


// we can change the value of let varible once we declare it.
let city = "pune"; 
 console.log(city); 


// const is a type of variable once we declare it. we can not change it.
const age = 23; 

 age = 24; 
// here if i try to reassign value of age varible it will give me a error.

// TypeError: Assignment to constant variable.
console.log(age);



// let's talk about Naming Convention of variables in javascript.
// 1. we can use letters, digits, underscores and $ sign.
// 2. we can not start variable name with digits.
// 3. we can not use javascript reserved keywords as varible name.
// 4. varibale names are case sensitive.
// 5. use camelCase naming varible in javascript.
// 6. use meaning full names for variables.
// 7. do not use space and hypen in variable names.

// if i try to add before %(modulus operator) it will give me a error.




//  DATA TYPES IN JAVASCRIPT
// 1. Primitive Data Types String, Number, Boolean, Null, Undefined,BigInit Symbol


// what is String? 
//  string is basically sequence of Characters which is enclosed in single or double characters.




// another way to write a string using single quotes.

let name = 'mayuri';


// Numeric data type
let age = 23;
console.log(age);

// we can also use decimal values in javascript.
let marks = 69.9;

const profit = -200;
console.log(profit);


// we added n last of the number to make it BigInt data type.
let largeNumber = 1234567891011123467890n;
console.log(largeNumber);
console.log(typeof largeNumber);


// Boolean data type
let isWorking = true;
console.log(isWorking);

let amILate = false;


// undefined data type
let school;
console.log(school);

// null data type

let hobby = null;
console.log(hobby);

/* difference between null and undefined

null = null is assignment value. we can assign nullto a variable as a representstion of no value;
undefined = undefined means a varible has been declard but has not been assigned a value yet.*/


// symbol data type
let id = Symbol("ID");
console.log(id);
let id2 = Symbol("ID");
console.log(id2);

console.log(id === id2); //it will give me false because each symbol is unique;



// 2. Reference Data Types( we also called Non Primitive Data Types)


  /*1. Arrays
  2. objects
  3. */

  /* 1Arrays we use Arrays to store different types of data in single varibale if we see previous data types we can store single value in single array but if we want to store multiple values in single variable we use 
  Array. */

  let colors = ["red", "blue", "pink", 2, 3, 4, 5, 6, 7, 8, true, false];



  // 2. objects data type

  // in this way we can define objects in javascript. 

  
  let person = {
    name: "mayuri",
    age: 23,
    city: "pune"
  }


  // lets learn typeOf is a  function in javascript.

  console.log(typeof age); //it will give me a number

 
  console.log(typeof isWorking); // it will give me a boolean

  console.log(typeof person); // it will give me object



 