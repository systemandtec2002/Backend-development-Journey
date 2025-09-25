// for claering the consept of higher order functions  we are going to practce question set

// Q1 implement the higher order function that applies the function twice

function applyTwice(value, fn){
  // i need to apply function twice
  return fn(fn(value));
}

function addTwo(num){
  return num+2;
}

console.log(applyTwice(10, addTwo));


// Q2 implement a function that returns a function to multiply numbers.
function multiply_fun(num){
  return function(x){
return num*x
  }
}

const multiply_funElement = multiply_fun(5);
console.log(multiply_funElement(3));

// Q3 implement a function that filters an array using function.

// complete the filterArray function that takes an array and a function and returns a new array where the function returned true.


function filter_array(arr, fn){
  return arr.filter(fn);
}


console.log(filter_array([1, 2, 3, 4, 5, 6, 7, 8], (num) => num%2 === 0) );

/* implement the function that composes two function together.

write a function compose that takes two functions and returns a new function that applies them in sequence.
*/

function compose(f, g){
  return function(x){
return f(g(x))
  }
}

const double = (x) => x*2;
const increment = (x) => x+1;

const composefn = compose(increment, double);

console.log(composefn(5));

// Q5 implement a function that takes an array of functions and a value, and applies the functions in sequence to the value.

function pipe(functions, value){
  return functions.reduce((acc, fn) => fn(acc), value);
}

// Q5 create a function once that ensure a function is called once.
 
// write once(fn), a higher order function that ensure a function is executed only the first time. ignoring all future calls.`

function once(fn){
  let called = false;
   return function(...args){
if(!called){
  called = true;
  return fn(...args);
}
   }
}

const logMessage = once((msg) =>console.log(msg));


logMessage("Hello wporld");