let amount1 = 5000,
  amount2 = 27500,
  amount3 = 30000;

// calculation a payment with tip inclusively
const tipCalc = (payment) => {
  if (payment >= 5000 && payment < 30000) {
    return Math.round(payment * 1.15);
  } else if (payment >= 30000) {
    return Math.round(payment * 1.2);
  } else {
    return payment;
  }
};

// Calculation tip only
const tipOnly = (payment) => {
  if (payment >= 5000 && payment < 30000) {
    return Math.round(payment * 0.15);
  } else if (payment >= 30000) {
    return Math.round(payment * 0.2);
  } else {
    return 0;
  }
};

// dubdaj paynebt oloh
const dundaj = (a, b, c) => {
  return Math.round((a + b + c) / 3);
};

let paymentWithTip1 = tipCalc(amount1);
let tip1 = tipOnly(amount1);

let paymentWithTip2 = tipCalc(amount2);
let tip2 = tipOnly(amount2);

let paymentWithTip3 = tipCalc(amount3);
let tip3 = tipOnly(amount3);

let dundajTulbur = dundaj(amount1, amount2, amount3);

console.log(`Amount of payment with tip inclusive: ${paymentWithTip1} MNT`);
console.log(`Amount of tip only is: ${tip1} MNT`);
console.log(`Amount of payment with tip inclusive: ${paymentWithTip2} MNT`);
console.log(`Amount of tip only is: ${tip2} MNT`);
console.log(`Amount of payment with tip inclusive: ${paymentWithTip3} MNT`);
console.log(`Amount of tip only is: ${paymentWithTip3} MNT`);
console.log(`Dundaj tulbur is: ${dundajTulbur} MNT`);
