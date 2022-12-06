//1
let num1 = 120;
num2 = 50;
const isMaxMin = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
let max = isMaxMin(num1, num2);
console.log(max);
console.log("=========================");

//2
let inpArray = [1, 2, 3, 4, 5, 6, 7, 8];

const ifPresent = (n, arr) => {
  if (arr.includes(n)) {
    return arr.indexOf(n);
  } else {
    return -1;
  }
};
console.log(ifPresent(0, inpArray));
