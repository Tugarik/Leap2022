function sumSq(n) {
  let m = 1 + Math.pow(n, 2);
  let l = (n / 2 - 1) * 4;
  let sum = m;

  for (let i = n / 2; i <= 0; i--) {
    l = m - l;
    sum += l;
    // console.log(sum);
  }
  return sum;
}

function sqSum(n) {
  return Math.pow(((1 + n) * n) / 2, 2);
}

console.log(sqSum(10));
console.log(sumSq(10));

//1-10  1+100  101  16
// 2-9  4+81   85   12
//3-8   9+64   73   8
//4-7   16+49  65   4
// 5-6  25+36  61   0

//1-100  1+10000  10001  196
//2-99   4+9891   9805   192
// 3-98  9+9604  9613    188
