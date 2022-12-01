//let inputNum = prompt("Too oruulna uu");
let inputNum = "10";
let sum = 0;
let i = 0;
while (i <= Number(inputNum) && Number.isInteger(Number(inputNum))) {
  sum = sum + i;
  i++;
}
console.log(sum);
