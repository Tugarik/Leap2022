const data = [
   {productName:"Bakery", unitPrice:5000, amount: 20, totalPrice: 100000,  casherId:1, date: '2022-11-01'},
   {productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54000, casherId:1, date: '2022-11-01'},
   {productName:"Bread", unitPrice:2500, amount: 2, totalPrice: 5000, casherId:1, date: '2022-11-01'},
   {productName:"Boortsog", unitPrice:7000, amount: 10, totalPrice: 70000, casherId:1, date: '2022-11-01'},
   {productName:"Zairmag", unitPrice:2000, amount: 5, totalPrice: 10000, casherId:1, date: '2022-11-01'},
   {productName:"Cola", unitPrice:3500, amount: 5, totalPrice: 17500, casherId:1, date: '2022-11-01'},

];

tailan(data);

function tailan(inp) {
   netSales(inp);
   top5cash(inp, 5);
   top5quantity(inp, 5);
   bad5cash(inp, 5);
   bad5quantity(inp, 5);
   top5cashPercent(inp, 5);
   top5quantityPercent(inp, 5);
   bad5cashPercent(inp, 5);
   bad5quantityPercent(inp, 5);
}

function netSales(inp) {
   let sum = 0;
   for (let i = 0; i < inp.length; i++) {
      sum += inp[i].totalPrice;
   }
   console.log(`Niit borluulat: ${sum} MNT`);
   console.log(`--------------------------------------------------------------------`);
}


// array.sort( (a,b) => {
//  b[i] - a[j]
// })

)
function top5cash(inp, n) {
   for (let i = 0; i < inp.length; i++) {
      inp.sort((a,b) => {
         return b.totalPrice - a.totalPrice;
      })
   }
   console.log(`Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/:`);
   for (i = 0; i < n; i++) {
      console.log(`${inp[i].productName} - ${inp[i].totalPrice} MNT`)
   }
   console.log(`--------------------------------------------------------------------`);
}

function top5quantity(inp, n) {
   for (let i = 0; i < inp.length; i++) {
      inp.sort((a,b) => {
         return b.amount - a.amount;
      })
   }
   console.log(`Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/:`);
   for (i = 0; i < n; i++) {
      console.log(`${inp[i].productName} - ${inp[i].amount} shirheg`)
   }
   console.log(`--------------------------------------------------------------------`);
}


function bad5cash(inp, n) {
   for (let i = 0; i < inp.length; i++) {
      inp.sort((a,b) => {
         return a.totalPrice - b.totalPrice;
      })
   }
   console.log(`Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/:`);
   for (i = 0; i < n; i++) {
      console.log(`${inp[i].productName} - ${inp[i].totalPrice} MNT`)
   }
   console.log(`--------------------------------------------------------------------`);
}

function bad5quantity(inp, n) {
   for (let i = 0; i < inp.length; i++) {
      inp.sort((a,b) => {
         return a.amount - b.amount;
      })
   }
   console.log(`Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/:`);
   for (i = 0; i < n; i++) {
      console.log(`${inp[i].productName} - ${inp[i].amount} shirheg`)
   }
   console.log(`--------------------------------------------------------------------`);
}

function top5cashPercent(inp, n) {
   let sum = 0;
   for (let i = 0; i < inp.length; i++) {
      sum += inp[i].totalPrice;
      inp.sort((a,b) => {
         return b.totalPrice - a.totalPrice;
      })
      
   }
   
   console.log(`Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь:`);
   for (i = 0; i < n; i++) {
      console.log(`${inp[i].productName} - ${(inp[i].totalPrice/sum*100).toFixed(2)} %`)
   }
   console.log(`--------------------------------------------------------------------`);
}


function top5quantityPercent(inp, n) {
   let sum = 0;
   for (let i = 0; i < inp.length; i++) {
      sum += inp[i].amount;
      inp.sort((a,b) => {
         return b.amount - a.amount;
      })
      
   }
   
   console.log(`Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь:`);
   for (i = 0; i < n; i++) {
      console.log(`${inp[i].productName} - ${(inp[i].amount/sum*100).toFixed(2)} %`)
   }
   console.log(`--------------------------------------------------------------------`);
}

function bad5cashPercent(inp, n) {
   let sum = 0;
   for (let i = 0; i < inp.length; i++) {
      sum += inp[i].totalPrice;
      inp.sort((a,b) => {
         return a.totalPrice - b.totalPrice;
      })
      
   }
   
   console.log(`Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь:`);
   for (i = 0; i < n; i++) {
      console.log(`${inp[i].productName} - ${(inp[i].totalPrice/sum*100).toFixed(2)} %`)
   }
   console.log(`--------------------------------------------------------------------`);
}


function bad5quantityPercent(inp, n) {
   let sum = 0;
   for (let i = 0; i < inp.length; i++) {
      sum += inp[i].amount;
      inp.sort((a,b) => {
         return a.amount - b.amount;
      })
      
   }
   
   console.log(`Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь:`);
   for (i = 0; i < n; i++) {
      console.log(`${inp[i].productName} - ${(inp[i].amount/sum*100).toFixed(2)} %`)
   }
   console.log(`--------------------------------------------------------------------`);
}
