// Functions
//function myFunction(param1, param2, param3) {
//code in function
//}
// params  - arguments
//()  - parenthesis
//{} - function body

// myFunction(param1. param2. param3);   - calling a function

// utga avdaggui function
greet();

function greet() {
  console.log("HELLO THERE!");
}
greet();
greet();
greet();

// utga avdag function
let i = 11;
function greet1(name) {
  let i = 10;
  console.log("Hello " + name + ":)" + i);
}
// console.log(i);  - will not work outside function
greet1("Tuga");

// butsaadag return
function myFunction1(p1, p2) {
  return p1 * p2;
}
let n = myFunction1(2, 3);
console.log(n);

//sum of numbers
function sumOfThree(a, b, c) {
  return a + b + c;
}
let m = sumOfThree(2, 3, 4);
console.log(m);

//
// let number1 = parseFloat(prompt("Enter a number: "));
// let number2 = parseFloat(prompt("Enter a number: "));
let number1 = 3.4;
let number2 = 4;

function add(a, b) {
  return a + b;
}
let result = add(number1, number2);
console.log("The sum is " + result);

// 3 too, return max
let num1 = 57,
  num2 = 15,
  num3 = 27;
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}
let maxNum = maxOfThree(num1, num2, num3);
console.log(maxNum);

//
// if(!isNaN(parseFloat(input1)) && !isNaN(parseFloat(input2))

// let function a(name) {
//
//}

let a = function (name) {
  return "Hello " + name;
};

// a("tuga");
console.log(a("Tuga"));

// arrow function is always should be const, function-iig oorchlogdohgui bolgono. hacker + sanamsargui.
const b = (name) => {
  return "Hello " + name;
};
console.log(b("Arrow"));

//max of three
let max = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
};
console.log(max(3, 2, 3));

// if(!isNaN(parseFloat(input1)) && !isNaN(parseFloat(input2))
