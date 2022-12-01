let amount = 100000;
let tip15 = amount * 1.15;
let tip20 = amount * 1.2;

let totalAmount = amount > 30000 ? tip20 : amount > 5000 ? tip15 : amount;
console.log(totalAmount);
