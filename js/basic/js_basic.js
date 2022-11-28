// 1
// Comments can make code readable

// 2
// Javascript lesson begin

// 3
/**
 * Comments
 * can
 * make
 * code
 * readable"
 */

// 4 Variables

let sampleNum = 1;
let sampleStr = "text";
let sampleBoolean = true;
let sampleUnd;
let sampleNull = null;

// 5 Datatypes
let myNum = 15;
console.log("Type of myNum is: " + typeof myNum);
console.log("=============================");

let myString = "text";
console.log("Type of myString is: " + typeof myString);
console.log("=============================");

// 6 Utga onoogoogui huvisagch
let myVar;

// 7 Utga onooson huvisagch
let myVariable = 15;

// 8 Olon morond huvisagch zarlah
let newVar1 = 1;
let newVar2 = 2;
let newVar3 = 3;

// 9 neg murund olon huvisagch zarlah
let newVar4 = 4,
  newVar5 = 5,
  newVar6 = 6;

// 10 myAge yourAge zarlah
let myAge = 16;
let yourAge = 18;

// 11 Gurvakjingiin perimetr

let side1 = 10,
  side2 = 15,
  side3 = 20;
let perimetr = side1 + side2 + side3;
console.log("Gurvaljingiin perimetr: " + perimetr);
console.log("=============================");

// 12 Toirgiin talbai

let radius = 4;
const PI = 3.14;
let circleArea = PI * radius * radius;
console.log("Area of circle is: " + circleArea);
console.log("=============================");

// 13 m = y2-y1/x2-x1 хариуг олох

let x1 = 3,
  x2 = 4,
  y1 = 5,
  y2 = 6;
let m = (y2 - y1) / (x2 - x1);
console.log("m = y2-y1/x2-x1");
console.log(
  "x1 = " +
    x1 +
    ", " +
    "x2 = " +
    x2 +
    ", " +
    "y1 = " +
    y1 +
    ", " +
    "y2 = " +
    y1 +
    " ued"
);
console.log("m = " + m);
console.log("=============================");

// 14   15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?
const GB = 1073741824;
let dataGb = 15;
let dataBit = GB * dataGb;
console.log(dataGb + " Gigabytes = " + dataBit + " bits.");
console.log("=============================");

// 15 5 МB дата 3 секундэд bol BIT Rate-ийг олно уу.

let dataSize = 15;
let dataDuration = 3;
let bitRate = dataSize / dataDuration;
console.log("Bit rate is: " + bitRate + " Mb/s");
console.log("=============================");

// 16 Gurvaljingiin talbai
let s = (side1 + side2 + side3) / 2;
let triangleArea = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log("Area of a triangle is: " + triangleArea);
console.log("=============================");

// 17 Celcius to Fahrenheit
let tempCel = 20;
let tempFahr = tempCel * 1.8 + 32;
console.log(tempCel + " C degrees = " + tempFahr + " F degrees");
console.log("=============================");

// 18 Fahrenheit to Celcius

let tempF = 68;
let tempC = (tempF - 32) / 1.8;
console.log(tempF + " F degrees = " + tempC + " C degrees");
console.log("=============================");

// 19 2 хувьсагч зарлан 5 uildel guitsetge
let num1 = 20;
let num2 = 10;

let sum = num1 + num2;
let sub = num1 - num2;
let multiply = num1 * num2;
let division = num1 / num2;
let uld = num1 % num2;

console.log("Addition of given 2 numbers is " + sum);
console.log("Subtraction of given 2 numbers is " + sub);
console.log("Multiplication of given 2 numbers is " + multiply);
console.log("Division of given 2 numbers is " + division);
console.log("Uldegdel of given 2 numbers is " + uld);
console.log("=============================");

// 20 cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх

let lenCm = 20;
let lenInch = lenCm * 0.393701;
console.log(lenCm + " centimeters = " + lenInch + " inches");
console.log("=============================");

let lenI = 20;
let lenC = lenI / 0.393701;
console.log(lenI + " inches = " + lenC + " centimeters");
console.log("=============================");

// 21 Гараас дугуйн радиус
let radiusCircle = prompt("Duguin radius oruulna uu");
let areaCircle = PI * radiusCircle * radiusCircle;
let lengthCircle = 2 * PI * radiusCircle;
console.log("Area of circle is: " + areaCircle);
console.log("length of circle is " + lengthCircle);
console.log("=============================");

// 22 find first digit
let num2d = 58;
let firstDigit = (num2d - (num2d % 10)) / 10;
console.log("First digit of " + num2d + " is: " + firstDigit);

let num3d = 685;
let num3d2 = (num3d - (num3d % 10)) / 10;
let firstDigit2 = (num3d2 - (num3d2 % 10)) / 10;
console.log("First digit of " + num3d + " is: " + firstDigit2);
console.log("=============================");
