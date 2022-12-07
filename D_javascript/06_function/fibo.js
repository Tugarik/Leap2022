const fibo = (n) => {
  if (n <= 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

const getFiboList = (m) => {
  for (let i = 0; i < m; i++) {
    fiboList = fibo(i);
  }
};
