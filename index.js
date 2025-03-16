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


// FUNCTIONS*
function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 //This high-order function adds 2 parameters and passes the answer to the callback
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);// call the callback and pass the answer to it
 }
 
 //call add passing the callbacks to it
 add(5, 10, happyPrint);    //function (add) takes another function (happyPrint or sadPrint) as a parameter.
 add(11, 12, sadPrint);

 // TO print the current date
 function printDate(){
  console.log(new Date().toLocaleTimeString());
}
     
setInterval(printDate, 1000); // call printDate every 1000 milliseconds (1 second)

//ARRAYS
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

// for(let i=0; i< arr.length; i++){ //Traditional for loop. Used when you need an index or to modify elements in the array.
//   console.log(arr[i])
// }

// for (let item of arr){   // for of loop. Used just to read values. Cannot modify the array.
//    console.log(item);
// }

let arr = [-5, 16, 33, 42, 103, 344];
console.log(arr.includes(-5)); //true
console.log(arr.includes(100)); //false

arr.push(11); //add 11 to the end of the array
console.log(arr);

let lastItem = arr.pop(); //remove the last item from the array
console.log(lastItem);

arr.unshift(22); //add 22 to the beginning of the array
console.log(arr);

let firstItem = arr.shift(); //remove the first item from the array
console.log(firstItem);

let reversed = arr.reverse(); //reverse the array 
console.log(reversed);

console.log(arr.join('-')); //join the array elements with a hyphen in between each element
console.log (arr);

//OBJECT LITERALS
function createPerson(name, height, weight) {
  return {
    name: name,
    height: height,
    weight: weight
  };
}

function calcBMI(weight, height){
  return weight / (height * height);
}

function avgBMI(people){
  let sum=0;
  for (let person of people){
    sum += calcBMI(person.weight, person.height);
  }
}

//calculate avg BMI
return sum / people.length;

//creating a collection of people
let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7),
];

console.log(avgBMI(people));


