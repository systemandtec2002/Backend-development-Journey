// what is function?
// function is basically block of code which could be reused or it could be called multiple time.

/*function helloStudents(){
  console.log("hello my dear students");
}

helloStudents() */


/* 

functions with parameter
parameters vs arguments
*/

function add(a, b){
return a+b
}

let sum = add(3, 4);
console.log(sum);

function greeting()
{
console.log("hello sir! good morning");
}

console.log(greeting()); //this function will return undefined beacuse we did not use here return keyword .




// thi is called as function expression
const multiply = function(a, b){
  return a * b;
}

console.log(multiply(6, 6));


function greet(name="viswa"){
  console.log("good morning" + " " + name);
}
greet();
greet("vishwmohanKumar")



// Rest parameters in functions
// function sumAll( ...nums){
//   console.log(a);
//   console.log(nums);
//   console.log(...nums);
// }
// sumAll(1, 2, 3,4, 5, 6);


function sumAll(...nums){

  console.log(nums);
  console.log(...nums);



let sum = 0;
for(let i = 0; i < nums.length; i++){
  // sum = sum + nums;
  sum += nums[i];
}
return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));


function test(){
  console.log("Inside test");
  console.log(arguments);
   console.log(arguments[1]); // "hello dear mayuri print hoga"
}

test(2, "hello dear mayuri");


let greetFather = function(guest){
  console.log("Hello" + guest);
}


greetFather('vishwa');

// ARROW FUNCTION 

let greet1 = (guest) =>   console.log("Hello" + guest);
greet1('vishwa');


// NO PARAMETERS

const greet2 = () => console.log("Hllo student");
const add2 = (num1, num2) => num1 + num2
console.log(add2(11, 11));

// multi line arrow functions

// const area = (length, width) => {
//   console.log(arguments);
//   let a = length * width;
//   return a ;
// }

// console.log(area(12, 24));

function area1 (length, breadth){
  console.log(arguments);
return length * breadth;
}

console.log(area1(12, 25));


// convenstional function and arrow function