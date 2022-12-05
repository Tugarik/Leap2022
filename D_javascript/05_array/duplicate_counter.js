let inpNum = 6611299;
let inpArray = inpNum.toString().split('');
let counts = [];


for (let i = 0; i < inpArray.length; i++) { 
   if (counts[inpArray[i]]){
      counts[inpArray[i]] += 1
   } else {
      counts[inpArray[i]] = 1
   }
}

for (let j = 0; j < counts.length; j++){
   if (counts[j]) {
      console.log(j + " : " + counts[j] + " times.")
   } else {
      console.log(j + " : " + 0 + " times.")
   }
}

  