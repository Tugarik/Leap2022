let a = 3, b = 6, c = 4;

if (a > b && a > c) {
 console.log("max value is " + a);
} else {
   if (b > c) {
      console.log("max value is " + b);
   } else {
      console.log("max value is " + c);
   }
}

if (a < b && a < c) {
 console.log("min value is " + a);
} else {
   if (b < c) {
      console.log("min value is " + b);
   } else {
      console.log("min value is " + c);
   }
}