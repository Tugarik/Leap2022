let a = 120, b = 33, c = 10, d = 12;

if (a < b && a < c && a < d) {
 console.log("min value is " + a);
} else {
   if (b < c && b < d) {
      console.log("min value is " + b);
   } else {
      if (c < d) {
         console.log("min value is " + c);
      } else {
         console.log("min value is " + d);
      }
   }
}