let n = Number(prompt("Too orulna uu"));
// n = 5;
newStr = "";
for (let i = 1; i <= n; i++) {
  if (i == 1 || i == n) {
    for (let j = 1; j <= n; j++) {
      newStr += "* ";
    }
  } else {
    for (let j = 1; j <= 1; j++) {
      newStr += "* ";
    }

    for (let j = 1; j <= n - 2; j++) {
      newStr += "  ";
    }
    for (let j = 1; j <= 1; j++) {
      newStr += "* ";
    }
  }

  newStr += "\n";
}
console.log(newStr);
