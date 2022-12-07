let input = "abcba";

const isPalindrome = (n) => {
  if (n == n.split("").reverse().join("")) return true;
  return false;
};

console.log(isPalindrome(input));
