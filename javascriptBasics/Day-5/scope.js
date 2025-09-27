// When we define any variable in
/*what is global scope? 

DEFINITION : The global scope is the outermost scope in javascript. where variables and function are accessible from anywhere in the program.

*/
let name = "Mayuri";//global variable

function greet(){
  console.log("Hello " + name); // can access global variable

  console.log(name);// also accessible here
}

greet();  // Output: Hello Mayuri
  console.log(name);// also accessible here


  let name1 =  "mayuri";
  let name2 = "Mohan";
  let name3 = "megha";

  function greetPeople(){
    console.log("inside function",name1, name2, name3);
  }

greetPeople();

// i can accesses these varible inside blcok alse let's see

{
  console.log("inside block here", name1, name2, name3);
}

console.log("outside block",  name1, name2, name3);

// if you see above these three console which i have defined in global, i can call it inside the function as well. i can call it inside blaock of code as well and if i want friend i can it outside as well.


// WHEN WE DEFINE ANY VARIBLE IN GLOBAL , NOMATTER WE ARE USING let, CONST, VAR YOU ARE USING SOMEHWRE I CAN ALSO CALL IT FROM THERE, SO WE CALL IT GLOBAL SCOPE.

function func1(){
  let f1 = 11;
  let f2 = 12;
  let f3 = 13;
  console.log(name1, name2, name3);
  console.log(f1, f2, f3);
}

func1();
console.log("outside function of func1",f1, f2, f3); // here will get beacuse error because  we defined f1,2,f3 variabls inside func1 function it is called as function scope so we only can accesse it inside function not outside the function scope.


{
console.log("inside block scope",f1, f2, f3);  //function scope only exist inside the function scope not outside the global any other function scope as well where we define it's there it is only accessible.
}

console.log(" global scope",f1, f2, f3);  


// let and const are block scoped

// Lexical scope

function outerFunction(){
  let outerVar = "i am from outer function";

  function innerFunction(){
    console.log(outerVar);
  }
}

const innerFun = outerFunction();
innerFun();