// factorial

let sum = 1;
let n;

do {
  n = prompt("Duriin 1-ees deesh too oruulna uu");
} while (Number.isInteger(Number(n)) == false || Number(n) < 0);

let i = 0;
while (i < Number(n)) {
  i++;
  sum *= i;
}
console.log(`${n}! = ${sum}`);
