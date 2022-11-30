// .isInteger()  buhel too esehiig shalgah  Boolean utga avna

Number.isInteger(2); // true

// .toFixed() butarhai ornii tsifriig hyzgaarlah

let num = 123.56789;
console.log(num.toFixed(2)); // taslalaas hoish 2 oron

// myangatiin orniig _ temdegej bolno
const budget = 1_000_000;
console.log(budget);

// Library
// MATH
const degrees = 45;
let rad = degrees * (Math.PI / 180);
console.log(rad);

// Math.abs() ugugdsun toog eyereg bolgono
let a = 10,
  b = 30;
const diff = Math.abs(a - b);
console.log(diff);

// Math.floor()    Math.ceil()    Math.round()

//Math.max   Math.min

console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(-1, 22, 23)); // -1

//Math.pow   zereg devshuuleh
console.log(Math.pow(7, 3));

//shoo
console.log(Math.floor(Math.random() * 6) + 1);

//
