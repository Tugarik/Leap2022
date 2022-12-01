// Guess number

let inputNum;
let randNum = Math.floor(Math.random() * 100 + 1);
console.log(randNum);

do {
   inputNum = prompt("Minii sanasan 1-ees 100 hurtelh toog taana uu (1 bolon 100 orno)");
   
   while(Number(inputNum) != randNum) {

      if(Number(inputNum) < randNum) {
        alert("Arai baga bn, dahin oroldono uu");
        do {
         inputNum = prompt("Minii sanasan 1-ees 100 hurtelh toog taana uu (1 bolon 100 orno)");
        } while (Number.isInteger(Number(inputNum)) == false || Number(inputNum) > 100 || Number(inputNum <= 0));
        
      } else {
         alert("Ih bn oo, dahiad oroldood uz");
         do {
            inputNum = prompt("Minii sanasan 1-ees 100 hurtelh toog taana uu (1 bolon 100 orno)");
           } while (Number.isInteger(Number(inputNum)) == false || Number(inputNum) > 100 || Number(inputNum <= 0));
         
      }
   }
} while (Number.isInteger(Number(inputNum)) == false || Number(inputNum) > 100 || Number(inputNum <= 0));
console.log("Good job!");