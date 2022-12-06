//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?

const isPrime = (n) => {
   let primeArray = [];
   for (i = 2; i <= n/2; i++) {
      console.log(i);
     if (n % i == 0) 
      primeArray.push(i);
     
   }
   return primeArray;
 }

console.log(isPrime(13195));