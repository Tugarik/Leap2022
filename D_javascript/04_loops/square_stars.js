let n = Number(prompt("Too orulna uu"));
// n = 5;
output = "";
x = 0;

// ehnii mur
y = 0;
while (y < n) {
   output += "*" + " ";
   y++;
}
output += "\n";

//dund heseg

do {
   y = 0;
   while (y < 1) {
      output += "*" + " ";
      y++;
   }
   
   z = 0;
   while (z < n - 2) {
      output += "-" + " ";
      z++;
   }

   y = 0;
   while (y < 1) {
      output += "*" + " ";
      y++;
   }

   output += "\n";
   x++;
} while (x < n-2);

// suuliin mur
y = 0;
while (y < n) {
   output += "*" + " ";
   y++;
}

console.log(output);