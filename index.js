let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;
console.log(area);

let name = "bob";
let age = 24;

console.log (typeof(name));
console.log (typeof(age));

console.log (`Hello my name is ${name}, I am ${age} years old.`);

console.log (`I was born in ${2020-age}`);


// // Hard comparision
// console.log('1' === 1); //false
// console.log(1 === true); //false
// console.log("true" === true); //false

// IF LOOPS
let grade = 67;
if (grade < 50){
  console.log('Failed');
} else{
  console.log('Passed');
}

// WHILE LOOPS
let num = 0;
while (num < 10){
  console.log(num);
  num = num + 1; // num++
}

// FOR LOOPS
for(let k=0; k<10; k=k+1){
  console.log(k);
}

for(i=0; i<=50; i++){
  if(i%3 === 0){
    console.log("Fizz");
  } else if (i%5 === 0){
    console.log("Buzz");
  } else if (i%3 === 0 && i%5 === 0){
    console.log("Fizzbuzz");
  }else{
    console.log(i);
  }
}

let nowTimestamp = Date.now() // current timestamp in milliseconds
console.log(nowTimestamp);

// Printing a date
let date = new Date(2025, 2, 8);
// Format: new Date(year, month, day, hours, minutes, seconds, milliseconds)
// JavaScript counts months from 0 to 11: January = 0. December = 11.
console.log (date);
