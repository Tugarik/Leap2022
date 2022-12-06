const findEven = (a, b) => {
  let array = [];
  for (i = a; i < b; i++) {
    if (i % 2 == 0) {
      array.push(i);
    }
  }
  return array;
};
console.log(findEven(10, 15));

const findOdd = (a, b) => {
  let array = [];
  for (i = a; i < b; i++) {
    if (i % 2 != 0) {
      array.push(i);
    }
  }
  return array;
};
console.log(findOdd(10, 15));
