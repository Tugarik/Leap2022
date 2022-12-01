// document.getElementById("text").innerHTML = "This is JS text";
// console.log("testing if my code is working");
// function test() {
//   console.log("testing if my function is woking");
// }

let username = "tuga";

// Assignment   suulgaj uguh, zooj uguh ' = ' assignment mark
// declare      zarlah
// variable     huvisagch
// value        utga
// statement    medegdel
// expression   ilerhiilel

console.log(username);

// https://nodejs.org/en/download/ node suulgah

/*
multi
line
comment
*/

let myNumber1 = 15;
let myNumber2 = 30;
let myNumber3 = myNumber1 + myNumber2;

console.log(myNumber3);

// Data types:

// String       temdegtiin tsugluulga
// Number       too
// Boolean
// null
// underfined

// google: js reserved words

let name1;
var name2;

// const    oorchlogdohgui togtmol huvisagch
const PI = 3.14;

// Prompt garaas oruulah
// let inputNumber = prompt("Enter your age");
// let birthYear = 2022 - inputNumber;
// console.log("Your birthyear is: " + (2022 - inputNumber));
// console.log("Your BirthYear is: " + birthYear);

// convert to string by concatenating
let a = 10;
let b = 12;
console.log("" + a + b);
console.log(a + "" + b);
console.log(a + " " + b);
console.log(a + b + "");

let num1 = 20;
let num2 = 7;
console.log(num1 % num2);

console.log(num2 % 2);

// null, undefined, not defined

let c = null;
let d;
console.log(c);
console.log(d);
// console.log(e);

// typeof       turul harah
console.log(typeof a);
let myNumType = typeof a;
console.log("Type of number a is: " + myNumType);

// convert string to number
let newNum = "15.5";
console.log(typeof newNum);
let realNum = parseInt(newNum);
console.log(typeof realNum);
let realFloat = parseFloat(newNum);
console.log(typeof realFloat);

// let num11 = parseFloat(prompt("Enter first number"));
// let num12 = parseFloat(prompt("Enter second number"));
// alert("2 toonii niilber: " + (num11 + num12));
// alert("Ehnii toog hoyor dahi toond huvaahad uldegdel n: " + (num11 % num12));
