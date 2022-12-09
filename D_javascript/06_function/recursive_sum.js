function sum(n) {
  if (n - 1 <= 0) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}
n = 100;
console.log(sum(n));
