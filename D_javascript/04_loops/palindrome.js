let inputNum;
let palNum = '';

do {
   inputNum = prompt("Duriin 2-oos deesh orontoi too oruulna uu");
   } 
   while (Number.isInteger(Number(inputNum)) == false || Number(inputNum) < 10);

i = inputNum.length -1;
while (i >= 0) {
   palNum += inputNum[i]; 
   i--;
}
console.log(inputNum);
console.log(palNum);
if (Number(palNum) == Number(inputNum)) {
   console.log("Palindrome")
} else {
   console.log("Not palindrome")
}
