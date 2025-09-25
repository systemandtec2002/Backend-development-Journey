const numbers = [1, 2, 3, 4, 5];


/* map goes through each element in the array. it transforms each element based you give it.Returns a new array with the transformed values. here: num * num => squares every number. */ 


const res = numbers.map(num => num*num);
console.log(res);

/* filter method 
filter goes through the array ONE LEMENT AT A TIME.
for each element it checks a condition (a true/ false)

if the element is true, it will be included in the new array.

if the element is false, it will be excluded from the new array.

👉 Important: It does not change the original array
*/

const res2 = numbers.filter(num => num%2 === 0);
console.log(res2);



/* reduce method
Why we use acc here? 

acc is like a box that carries the result forward.reduce() is used when you want to take an array of many values and combine them into a single value.

Example results: sum, product, average, maximum, object, string, etc.



.*/

const res3 = numbers.reduce((acc,num) => acc+num, 0);
console.log(res3);



