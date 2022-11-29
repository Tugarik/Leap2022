let a1 = 96,
  a2 = 108,
  a3 = 89;
let b1 = 88,
  b2 = 91,
  b3 = 110;

let a = (a1 + a2 + a3) / 3;
let b = (b1 + b2 + b3) / 3;
console.log(a, b);
if (a < 100 && b < 100) {
  console.log("Yalagch baihgui");
} else if ((a = b)) {
  console.log("Onoo tentssen");
} else {
  if (a > b) {
    console.log("A bag yalsan");
  } else {
    console.log("B bag yalsan");
  }
}
