//Taking function as an argument

function operate(a, b, operation){
return operation(a, b)
}

function add(a, b){
  return a+b;
}

console.log(operate(5, 6, add));



function greet(name){
  return function(message){
    console.log(`${message},${name}`);
  }
}

let greetFun = greet("vishwa");

greetFun("hello");
