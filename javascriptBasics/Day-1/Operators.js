 // OPERATORS IN JAVASCRIPT



// 1.  Mathematical Operators
// 2. Comparison Operators
// 3. Logical Operators



// Mathematical Operators

let a = 10;
let b = 5;
 let sum = a + b;
 console.log("the sum of a and b is" +  sum);

//  here lets understand one important consepts a + b we call a and b as operands and + is called operator.

console.log(a + b);
console.log(a - b );
console.log(a * b );
console.log(a / b );
console.log(a % b );
console.log(a ** b);


// 2. Assignment Operators
let s = 10;
console.log(s);

s = s + 5;
console.log(s);
// we can write s = s + 5 in short hand like this
s += 5;
console.log(s);

// comparison Operators


let p = 10;
let q = 12;
console.log(p == q);  //it will check only value of p and q

console.log(p === q);  // it will also shows false. triple eqaul operators check value and type 

console.log(p != q);
console.log(p !== q);


let m = 19;
let n = 7;
console.log(m > n);
console.log(m < n);
console.log(m >= n);
console.log(m <= n);

// Logical operators

let e = true;
let f = false;

console.log(e && f);// it will give me false because in and operator both the condition should be true give me true

console.log(e || f);// it will give me true because in or operator if any one condition is true it will give me true

console.log(!e); //it will give me false because ! is a not operator it will reverse the valuse of e

console.log(!f); //it will give me true because ! is a not operator it will reverse the valuse of f



// TERNARY OPERATORS

let age = 18;
let isAdult = age >= 18 ? "Yes Adult" : "No still is Kid";
console.log(isAdult);



// BiT WISE OPERATORS


let w = 5;
let z = 3;

console.log(w & z);
console.log(w | z);
console.log(w ^ z);

// increment and decrement operator
 let u = 10;
  u = u++; //post increment here what happened usally first assign then incerement
 u = ++u;  //pre increment here first assign then increment


