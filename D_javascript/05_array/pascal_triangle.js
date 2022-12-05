let n = 6;
let b = [];
let d = [];

for (let i = 0; i < n; i++) {
   b.push(1);
   for (let j = 1; j < i+1; j++) {
      for (let k = 2; k < j+1; k++) {
         b[k-1] = d[i-1][k-2] + d[i-1][k-1];   
      }
      b.push(1);
   }
   d.push(b);
   b = [];
}
console.log(d);

