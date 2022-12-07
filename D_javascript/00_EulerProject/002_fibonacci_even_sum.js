const fibo = (n) => {
  if (n <= 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

const evenFiboSum = (m) => {
  let sum = 0;
  for (let i = 0; sum < m; i++) {
    if (fibo(i) % 2 == 0 && sum < m) {
      sum += fibo(i);
    }
  }
  return sum;
};

console.log(evenFiboSum(4_000_000));
