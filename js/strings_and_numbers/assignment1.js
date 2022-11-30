// 1 dasgal
let i = 4 > 3; //true
let ii = 4 < 3; //false
let iii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log("1 dasgal");
console.log(i);
console.log(ii);
console.log(iii);
console.log(iv);
console.log(v);
console.log(vi);
console.log(vii);
console.log(iix);
console.log(ix);
console.log(x);
console.log(xi);
console.log("");

// 2 dasgal
let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); //true

console.log("2 dasgal");
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(eight);
console.log(nine);
console.log(ten);
console.log("");

// 3 dasgal
let myAge = prompt("Input my age");
let yourAge = prompt("Input your age");

if (myAge < yourAge) {
  console.log("You are older than me");
} else {
  console.log("You are younger than me");
}

//4 dasgal
let isDay = prompt("Odriin dugaariig 1-7 songon oruulna you");
switch (isDay) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Today is working day");
    break;
  case 6:
  case 7:
    console.log("Today is Weekend day");
    break;
}

//5 dagsal
let userHours = prompt("Ajillasan tsagaa oruulna uu");
let ratePerHour = 28;
console.log("Tanii avah tsalin: " + userHours * ratePerHour + " USD");
