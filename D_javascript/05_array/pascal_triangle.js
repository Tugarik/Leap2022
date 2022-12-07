let n = 6;
let b = [];
let d = [];

for (let i = 0; i < n; i++) {
  for (let j = 2; j < i + 1; j++) {
    b[j - 1] = d[i - 1][j - 2] + d[i - 1][j - 1];
  }
  b.push(1);
  d.push(b);
  b = [1];
}
console.log(d);
