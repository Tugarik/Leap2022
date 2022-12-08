const isPrime = (n) => {
   let output = true;
   for (let i = 2; i <= n / i; i++) {
     if (n % i == 0) return false;
   }
   return output;
 };
 
 const getPrimes = (m) => {
   let arr = [];
   for (i = 1; i < m; i++) {
     if (isPrime(i)) {
       arr.push(i);
     }
   }
   return (arr);
 };
 let primesAll = getPrimes(20);
 console.log(primesAll);

 const nums = (l) => {
   let numbers = [];
   for (i = 1; i <= l; i++) {
      numbers.push(i);
   }
   return numbers;
}
let numbersAll = nums(20);
console.log(numbersAll);

let allDivs = (n) => {
   let temp = [];
   for (i = 1; i < n; i++) {
      if (n % i == 0) {
         temp.push(i);
      }

   }
   return temp;
}
console.log(allDivs(20));