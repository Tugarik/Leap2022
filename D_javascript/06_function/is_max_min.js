//1
let num1 = 120;
    num2 = 50;
const isMaxMin = (a, b) => {
  if (a > b) return a;
  return b;  
};
let max = isMaxMin(num1, num2);
console.log(max);
console.log("=========================");

//2
let inpArray = [1, 15, 3, 14, 5, 6, 5, 6];

const ifPresent = (n, arr) => {
  if (arr.includes(n)) 
    return arr.indexOf(n);
  
    return -1;
};
console.log(ifPresent(5, inpArray));
console.log("=========================");

//3
const str1 = 'Өгөгдсөн тэмдэгт мөр';
const input = 'т';

const ifStr = (a, str) => {
  
  for (i = 0; i < str.length; i++){
    if (str.includes(a)) {
      return str.indexOf(a);
    } else {
    return -1;
    }
  }
}
console.log(ifStr(input, str1));
console.log("=========================");

// 4
const rand = (a, b) => {
  return Math.floor(Math.random() * (b - a) ) + a; 
}
console.log(rand(3,10));
console.log("=========================");

// 5
const array5 = [2, 4, 6, 2, 8, 4, 8, 0, 4, 1];

const getMedian = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum / arr.length).toFixed(1);
}
console.log(getMedian(array5));
console.log("=========================");

// 6
const array6 = [2, 4, 6, 2, 8, 4, 8, 0, 4, 1];

const getSum = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum);
}
console.log(getSum(array6));
console.log("=========================");

// 7
const isPrime = (n) => {
  for (i = 2; i < n/2; i++) {
    if (n % i == 0) return false;
    return true;
  }
}
console.log(isPrime(13));
console.log("=========================");

// 8
let str8 = 'Өгөгдсөн тэмдэгт мөрийн бүх үсгийг том үсэг болгох функц бич.';
const toUpper = (str) => {
  return str.toUpperCase();
}
console.log(toUpper(str8));
console.log("=========================");

// 9
let str9 = 'ӨгөгДСӨН ТЭМдэгт мөрийн БҮХ ҮСГИйг ЖиЖИГ үсэг БОЛГОХ ФУНКЦ Бич.';
const toLower = (str) => {
  return str.toLowerCase();
}
console.log(toLower(str9));