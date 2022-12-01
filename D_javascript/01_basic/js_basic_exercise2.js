let myNum = 58;
let firstDigit = (myNum - (myNum % 10)) / 10;
console.log("First digit of " + myNum + " is: " + firstDigit);

let num1 = 685;
let num2 = (num1 - (num1 % 10)) / 10;
let num3 = (num2 - (num2 % 10)) / 10;
console.log("First digit of " + num1 + " is: " + num3);
