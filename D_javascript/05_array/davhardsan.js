let inpArray = [4, 2, 1, 1, 34, 4, 1, 1, 4,  1, 12, 1, 4];
let outArray = [];

inpArray.sort();

for (i = 1; i < inpArray.length; i++) {
   if (inpArray[i] == inpArray[i-1] && !(outArray.includes(inpArray[i]))) {
      outArray.push(inpArray[i]);     
   }   
}

console.log(outArray);