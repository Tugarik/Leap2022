let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];

let maxArr, minArr;
if (arr1.length > arr2.length) {
   maxArr = arr1;
   minArr = arr2;
} else {
   maxArr = arr2;
   minArr = arr1;
}

let arr3 = [];
for (i = 0; i < maxArr.length; i++) {
   if (minArr[i]) {
      arr3[i] = maxArr[i] * minArr[i];
   } else {
      arr3[i] = maxArr[i];
   }

}
console.log(arr3);