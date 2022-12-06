let num = 5;
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    let result = n * factorial(n - 1);
    return result;
  }
}

console.log(factorial(num));
