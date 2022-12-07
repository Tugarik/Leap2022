//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?

const isPrime = (n) => {
  let output = true;
  for (let i = 2; i <= n / i; i++) {
    if (n % i == 0) return false;
  }
  return output;
};

const getMaxPrimeMultiple = (m) => {
  let arr = [];
  for (i = 2; i < m / i; i++) {
    if (m % i == 0 && isPrime(i) == true) {
      arr.push(i);
    }
  }
  return Math.max(...arr);
};
console.log(getMaxPrimeMultiple(600_851_475_143));
