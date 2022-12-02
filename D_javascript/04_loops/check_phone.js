// check phone

// let number;

// while (true) {
//   number = prompt("enter a phone number:");
//   let firstChar = number.charAt(0);
//   number = Number(number);
//   if (Number.isInteger(number) && (firstChar == "9" || firstChar == "8")) {
//     break;
//   }
// }

// console.log("Access granted");

let i = 0;
while (i < 10) {
  i++;
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
