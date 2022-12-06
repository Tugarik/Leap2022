let num = 5;
const factorial =(n) => {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(`${num}! = ${factorial(num)}`);
