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
  return arr;
};
let primesAll = getPrimes(20);
console.log(primesAll);

const nums = (l) => {
  let numbers = [];
  for (i = 1; i <= l; i++) {
    numbers.push(i);
  }
  return numbers;
};
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
};
console.log(allDivs(20));

n = 10;
temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function divRecursive(n) {
  if (n - 1 == 3) {
    return temp;
  } else {
    for (i = n; i > 2; i--) {
      let rem = n % (i - 1);
      let ans = n / (i - 1);
      console.log(n + " " + rem);
      if (
        rem == 0 &&
        temp.includes(ans) &&
        temp.indexOf(i - 1) != temp.indexOf(ans)
      ) {
        console.log(temp);
        console.log(
          "removed " + n + " on " + temp.indexOf(n) + " includes " + n / (i - 1)
        );
        temp.splice(temp.indexOf(n), 1);
        console.log(temp);
        return divRecursive(n - 1);
      }
    }
    return divRecursive(n - 1);
    console.log(temp);
  }
}
divRecursive(n);
console.log(temp);

let multi = 1;
// let checktemp = [2, 2, 2, 3, 3, 5, 7];
let checktemp = [1, 2, 3, 4, 5, 6, 7, 11, 13, 17, 19];
for (i = 0; i < checktemp.length; i++) {
  multi *= checktemp[i];
}
console.log(multi);

//3, 4, 5, 6, 7
// 2, 2, 2, 3, 3, 5, 7
//232_792_560
