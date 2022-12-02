// check pass
let realPass = "1234";
let inputPass;
do {
  inputPass = prompt("Password oruulna uu");
} while (inputPass !== realPass);

console.log("Access granted");
