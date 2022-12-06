let inpArray = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
// sorting by function
const arraySorter = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

console.log(arraySorter(inpArray));

//Sorting by loop
//
// function arraySorter(arr) {
//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(arraySorter(inpArray));
