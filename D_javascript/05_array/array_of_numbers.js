let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let sum = 0;
let maxNumber = arrayOfNumbers[0];
let minNumber = arrayOfNumbers[0];
for (let i =0; i < arrayOfNumbers.length; i++) {
   sum += arrayOfNumbers[i];
   if (arrayOfNumbers[i] > maxNumber) {
      maxNumber = arrayOfNumbers[i];
   } else {
      minNumber = arrayOfNumbers[i];
   }
}

console.log(`Sum: ${sum}`);
console.log(`Max number: ${maxNumber}`);
console.log(`Check max number: ${Math.max(...arrayOfNumbers)}`);
console.log(`Min number: ${minNumber}`);
console.log(`Check min number: ${Math.min(...arrayOfNumbers)}`);

arrayOfNumbers.push(Math.floor(Math.random()*1000));
arrayOfNumbers.unshift(10);
console.log(arrayOfNumbers);