let array = [2, 1, 6, 5, 8];
const removeEl = (arr, n) => {
  if (arr.includes(n)) {
    arr.splice(arr.indexOf(n), 1);
  } else {
    return `${n} gesen utga alga daa, sorry`;
  }
  return arr;
};
console.log(removeEl(array, 9));
