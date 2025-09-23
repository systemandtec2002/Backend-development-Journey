let age = 18;

if(age >= 18){
console.log(" i am an adult");
}


// after if reserved keyword we write a condition called as expression 

age = 15;

if(age >= 18){
  console.log("i am an adult");
} else {
  console.log("i am not an adult");
}


// for multiple condition we normally use else if conditions in javascript

let personAge  = 20;

if(personAge >= 50){
console.log("i am old");
}else if(personAge >= 20 && age < 50){
console.log("i am middle age person");
}else if(personAge >= 13 && personAge < 20){
  console.log(" i am teen");
}else{
  console.log('i am a kid');
}


// swict statement

let day = 3;

switch(day){
  case 1 :
console.log('Monday');
break;
case 2 : 
console.log('Tuesday');

case 3 :
  console.log('wedsday');
  break;

  case 4 :
    console.log('thursday');
    break;

     case 5 :
    console.log('Friday');
    break;

     case 6 :
    console.log('satrday');
    break;

     case 7 :
    console.log('sunday');
    break;

    default:
      console.log('invalid Day');
}