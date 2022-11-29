//comparing
// let a = 15;
// let b = 20;
// console.log(a > b);
// = assignment operator
//  == != conditional operator
// ! negation   esreg

// let answer = a >= b;
// let answer = a == b;
// console.log(answer);

// ===  strict equality hatuu tentsuu
// let answer1 = a === b;

// if
// let myAge = 25;
// if (myAge >= 21) {
//   console.log("Orohiig zovshoorii");
// } else {
//   console.log("Orohiig horiglono");
// }

// let yourAge = 20;
// if (yourAge < 11) {
//   console.log("You are a child");
// } else if (yourAge < 18) {
//   console.log("You are a teenager");
// } else if (yourAge < 40) {
//   console.log("You are an adult");
// } else if (yourAge < 70) {
//   console.log("you are a senior");
// } else {
//   console.log("you are a fossil");
// }

// let day = prompt("Input number of week day");
// if (day == 1) {
//   console.log("Today is Monday");
// } else if (day == 2) {
//   console.log("Today is Tuesday");
// } else if (day == 3) {
//   console.log("Today is Wednesday");
// } else if (day == 4) {
//   console.log("Today is Thursday");
// } else if (day == 5) {
//   console.log("Today is Friday");
// } else if (day == 6) {
//   console.log("Today is Saturday");
// } else if (day == 7) {
//   console.log("Today is Sunday");
// } else {
//   alert("Wrong number");
// }

// let dayNumber = prompt("Input number of week day");
// let dayName;
// if (dayNumber == 1) {
//   dayName = "Monday";
// } else if (dayNumber == 2) {
//   dayName = "Tuesday";
// } else if (dayNumber == 3) {
//   dayName = "Wednesday";
// } else if (dayNumber == 4) {
//   dayName = "Thursday";
// } else if (dayNumber == 5) {
//   dayName = "Friday";
// } else if (dayNumber == 6) {
//   dayName = "Saturday";
// } else if (dayNumber == 7) {
//   dayName = "Sunday";
// } else {
//   dayName = "Wrong number";
//   alert("Wrong number");
// }
// console.log("Today is " + dayName);

//  && - AND    || - OR    ! - NOT

// let weekday = 10;
// let weekname;
// if(weekday<1 || weekday>7){
//     console.log("error");
// }

// Nesting
// if (weekday >= 1 || weekday <= 7) {
//   if (weekday == 1) {
//     weekname = "Monday";
//   } else if (dweekday == 2) {
//     weekname = "Tuesday";
//   } else if (weekday == 3) {
//     weekname = "Wednesday";
//   } else if (weekday == 4) {
//     weekname = "Thursday";
//   } else if (weekday == 5) {
//     weekname = "Friday";
//   } else if (weekday == 6) {
//     weekname = "Saturday";
//   } else if (weekday == 7) {
//     weekname = "Sunday";
//   } else {
//     weekname = "Wrong number";
//     alert("Wrong number");
//   }
//   console.log("Today is " + weekname);
// } else {
//   console.log("error");
// }

// SWITCH
// let weekday = 4;
// let weekname;
// switch (weekday) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Not a day");
// }

// let weekday = 4;
// let weekname;

// if (weekday==1 || weekday==13|| weekday==3 || weekday==4 || weekday==5) {
//     console.log("Working day")
// }

// switch (weekday) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("Working day");
//     break;
//   case 6:
//   case 7:
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Not a day");
// }

// let x = 10,
//   y = 20,
//   z = 30;
// if (x > y) {
//   if (x > z) {
//     console.log(x, " n hamgiin ih");
//   } else {
//     console.log(z, " n hamgiin ih");
//   }
// } else {
//   if (y > z) {
//     console.log(y, " n hamgiin ih");
//   } else {
//     console.log(z, " n hamgiin ih");
//   }
// }

// if (x > y && x > z) {
//   console.log(x, " n hamgiin ih");
// } else if (y > z) {
//   console.log(y, " n hamgiin ih");
// } else {
//   console.log(z, " n hamgiin ih");
// }

// let number = 17;

// Ternary
let age = 15;
let answer = age < 18 ? "not allowed" : "allowed";
console.log(answer);
