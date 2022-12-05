let n = 5;
strOut = "";
for (let i = 0; i < n; i++) {
  for (let j = 1; j < i+2; j++) {
    strOut += j + " ";
  }
  strOut += "\n";
}
console.log(strOut);

let m = 5;
strOut = "";
for ( i = 0; i < m; i++) {
  for (let j = m-i; j > 0; j--) {
    strOut += j + " ";
  }
  strOut += "\n";
}
console.log(strOut);