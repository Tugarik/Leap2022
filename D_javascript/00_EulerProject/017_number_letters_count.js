//              ten = 3
// one = 3      eleven = 6
// two = 3      twelve = 6
// three = 5     thirteen = 8
// four = 4     fourteen = 8
// five = 4     fifteen = 7
// six = 3      sixteen = 7
// seven = 5     seventeen = 9
// eight = 5    eighteen = 8
// nine = 4     nineteen = 8

let arr_1_9 = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
let arr_10_19 = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
// 1-9
// 10-19
// 20-99   * 8 times
let arr_20_99 = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
// twenty * 10 + arr_1_9
// one hunred and   + arr_1_9 + arr_10_19 + arr_20_99   * 9 times
function sumLetters(arr) {
  sum = 0;
  for (el of arr) {
    sum += el.length;
  }
  return sum;
}
let sum_1_9 = sumLetters(arr_1_9);
let sum_10_19 = sumLetters(arr_10_19);

function sumLetters20_99(input) {
  sum = 0;
  for (el of input) {
    sum += el.length * 10 + sumLetters(arr_1_9);
  }
  return sum;
} // 758

let sum_20_99 = sumLetters20_99(arr_20_99);

function sumLetters100_999() {
  sum = 0;
  for (el of arr_1_9) {
    sum +=
      el.length +
      7 +
      (el.length + 10) * 9 +
      sum_1_9 +
      (el.length + 10) * 10 +
      sum_10_19 +
      (el.length + 10) * 80 +
      sum_20_99;
  }
  return sum;
}
let onethousand = "Onethousand";
let sum_100_999 = sumLetters100_999();

let total = sum_1_9 + sum_10_19 + sum_20_99 + sum_100_999 + onethousand.length;
console.log(total);
