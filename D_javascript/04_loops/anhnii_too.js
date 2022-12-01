// Anhnii too

let inputNum;
let answer;

do {
  inputNum = prompt("100-aas baga too oruulna uu");
}
while (Number.isInteger(Number(inputNum)) == false || Number(inputNum) >= 100 || Number(inputNum <= 0));

let i = 2;
while (i < Number(inputNum)) {
   if (Number(inputNum) % i == 0){
      answer = false;
      break;
   } else {
      answer = true;
   }
   i++;
}
if (answer == true) {
   console.log(`${inputNum} bol anhnii too mon bn`);

} else {
console.log(`${inputNum} bol anhnii too bish bn`);
}