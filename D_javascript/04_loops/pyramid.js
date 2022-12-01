count = 1;
output = "";
x = 0;

do {
  z = 0;
  while (z < 10 - x) {
    output += " " + " ";
    z++;
  }

  y = 0;
  while (y < 2 * x -1) {
    output += "*" + " ";
    y++;
  }

  output += "\n";
  x++;
} while (x < 10);
console.log(output);