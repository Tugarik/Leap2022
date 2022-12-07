let input = 45361;
const reverseNum = (n) => {
  return Number(n.toString().split("").reverse().join(""));
};

console.log(reverseNum(input));
