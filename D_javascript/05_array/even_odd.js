let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
countE = 0;
countO = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    countE++;
  } else {
    countO++;
  }
}
console.log(`Even: ${countE}, Odd: ${countO}`);
