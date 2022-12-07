let input = 910019;

const isPalindrome = (n) => {
  if (n == n.toString().split("").reverse().join("")) return true;
  return false;
};

// console.log(isPalindrome(input));

const isMaxPal = (m) => {
  let sum = [];

  for (let i = m; i > 100; i--) {
    for (let j = m; j > 100; j--) {
      if (isPalindrome(j * i)) {
        // sum.push(i);
        // sum.push(j);
        sum.push(j * i);
      }
    }
  }

  return Number(Math.max(...sum));
};
console.log(isMaxPal(999));
