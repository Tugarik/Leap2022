// case change
let inputStr = prompt("Input your text");
let newStr = "";

let i = 0;
while (i < inputStr.length) {
  if (inputStr[i] === inputStr[i].toUpperCase()) {
    newStr += inputStr[i].toLowerCase();
  } else if (inputStr[i] === inputStr[i].toLowerCase()) {
    newStr += inputStr[i].toUpperCase();
  } else {
    newStr += inputStr[i];
  }
  i++;
}
console.log(newStr);
