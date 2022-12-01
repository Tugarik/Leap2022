//let inputNum = prompt("Too oruulna uu");
let inputNum = "100";
let sum = 0;
let i = 0;

while (Number.isInteger(Number(inputNum)) == true && i <= Number(inputNum)) {
  sum = sum + i;
  i++;
}
console.log(sum);
