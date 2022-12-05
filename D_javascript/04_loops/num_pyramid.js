let n = 4;
let m = 1;
str = "";
for (let i = 1; i <= n; i++) {
  for (let j = n - i; j > 0; j--) {
    str += " ";
  }
  for (let k = 1; k < i + 1; k++) {
    str += m + " ";
    m++;
  }
  str += "\n";
}
console.log(str);
