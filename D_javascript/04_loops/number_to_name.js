let inputNum;
let newStr = "";

do {
  inputNum = prompt("Too oruulna uu");
} while (Number.isInteger(Number(inputNum)) == false || Number(inputNum) < 0);
i = 0;
while (i < inputNum.length) {
  switch (Number(inputNum[i])) {
    case 0:
      newStr += " zero";
      break;
    case 1:
      newStr += " one";
      break;
    case 2:
      newStr += " two";
      break;
    case 3:
      newStr += " three";
      break;
    case 4:
      newStr += " four";
      break;
    case 5:
      newStr += " five";
      break;
    case 6:
      newStr += " six";
      break;
    case 7:
      newStr += " seven";
      break;
    case 8:
      newStr += " eight";
      break;
    case 9:
      newStr += " nine";
      break;
  }
  i++;
}
console.log(`${inputNum} = ${newStr}`);
