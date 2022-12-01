// 1 1 2 3 5 8 13 21

let inputNum;
let a = 1,
    b = 1;
let c = a + b;
let strFibo = a + " " + b;
do {
  inputNum = prompt("Too oruulna uu");
}
while (Number.isInteger(Number(inputNum)) == false);

while (c <= Number(inputNum)) {
  strFibo += " " + c;
  a = b;
  b = c;
  c = a + b;
}
console.log(strFibo);