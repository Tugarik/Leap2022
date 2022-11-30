// String
// ` template literal
// ' single quotation
// " double quotation
//   \ whitespase  escape character
//  \n  new line
//  \t tabbing
// \b backspace
//  \r carriage return

let myString = "single quote' double quote \"";
console.log(myString);
console.log(
  'Hello I am "Tuga"\n' +
    "I am '42' years old.\n" +
    "\tThis is the new line with tab and some\\backslashes\\."
);

//  Urt oloh   .length    property

console.log(myString.length);

// .charAt() & str[index]      method  zaaval ardaa haalttai bn

const myStr = "Life";
console.log(myStr.length);
console.log(myStr.charAt(1));
console.log(myStr[1]);

//take last char
console.log(myStr[myStr.length - 1]);

console.log(myStr.toUpperCase());
console.log(myStr.toLowerCase());

// str1.concat(str2)  &  str1 + str2

let firstName = "John";
let fullName = firstName.concat(" ", "Smith");
console.log(fullName);

// .substring(ehlehIndex, urt)    ded temdeegt mur
let str = "JavaScript String";
console.log(str.substring(0, 10));
console.log(str.substring(10, 6));

// console.log(str1.indexOf("is")); // 2

let str1 = "This is a string";

let strFirst = str1.substring(0, str1.indexOf("is"));
let strSecond = str1.substring(str1.indexOf("is") + "is".length, str1.length);

str1 = strFirst.concat(strSecond);

strFirst = str1.substring(0, str1.indexOf("is"));
strSecond = str1.substring(str1.indexOf("is") + "is".length, str1.length);

console.log(strFirst.concat(strSecond));

// .trim()  hooson zai ustgah

let rawString = " Hi ";
let strippedString = rawString.trim();
console.log(strippedString);

// prompt
const str = window.prompt("Type a number", "");
const aNumber = Number(str);
