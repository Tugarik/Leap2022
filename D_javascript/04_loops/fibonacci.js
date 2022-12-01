// 1 1 2 3 5 8 13 21

//let inputNum = prompt("Too oruulna uu");
let strFibo = "";
let a = 1,
  b = 1;
let c;

while (Number.isInteger(Number(inputNum)) == true && c <= Number(inputNum)) {
  a = b;
  b = c;
  c = a + b;
  strFibo = strFibo + " " + a + " " + b + " " + c;
  //   i++;
}

console.log(strFibo);

// while (x > 0) {
//   let y = 10;
//   while (y > 0) {
//     output += count + "\t";
//     if (count % 10 == 0) output += "\n"; // output = output +"\n";
//     y--;
//     count++;
//   }
//   x--;
// }
