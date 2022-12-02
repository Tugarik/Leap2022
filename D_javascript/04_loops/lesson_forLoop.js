// for loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i, " ", j);
//   }
// }

// 9x9 box
let newStr = "";
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    newStr += j + " ";
    // debugger;
  }
  newStr += "\n";
}
console.log(newStr);

// 9x9 with stars
newStr = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j < i; j++) {
    newStr += j + " ";
  }

  for (let k = 1; k < 2; k++) {
    newStr += "-" + " ";
  }

  for (let l = i; l < 10; l++) {
    newStr += l + " ";
  }
  newStr += "\n";
}
console.log(newStr);

// hund dasgal 1
let n = 7;
newStr = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    newStr += "* ";
  }
  newStr += "\n";
}
console.log(newStr);

// hund dasgal 2
n = 7;
newStr = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    newStr += "* ";
  }
  newStr += "\n";
}
console.log(newStr);

// hund dasgal 3
n = 7;
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

// hund dasgal 4
n = 7;
newStr = "";
for (let i = 1; i <= n; i++) {
  if (i == 1 || i == n) {
    for (let j = 1; j <= n; j++) {
      newStr += j + " ";
    }
  } else {
    for (let j = 1; j <= 1; j++) {
      newStr += j + " ";
    }

    for (let j = 1; j <= n - 2; j++) {
      newStr += "  ";
    }
    for (let j = 1; j <= 1; j++) {
      newStr += n + " ";
    }
  }

  newStr += "\n";
}
console.log(newStr);

// hund dasgal 5
n = 7;
newStr = "";
for (let i = 1; i <= n; i++) {
  if (i == 1 || i == n) {
    for (let j = 1; j <= n; j++) {
      newStr += i + " ";
    }
  } else {
    for (let j = 1; j <= 1; j++) {
      newStr += i + " ";
    }

    for (let j = 1; j <= n - 2; j++) {
      newStr += "  ";
    }
    for (let j = 1; j <= 1; j++) {
      newStr += i + " ";
    }
  }

  newStr += "\n";
}
console.log(newStr);
//process.stdout.write("* ");

countA = 0;
let text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
for (let i = 0; i < text.length; i++) {
  if (text[i] == "a" || text[i] == "A") {
    countA++;
  }
}
console.log(countA);

//1_234_567_891
let number = "1234567891";
console.log(number.charAt(number.length - 3));
console.log(number.substring(1, 3));

number =
  number.substring(0, number.length - 3) +
  "_" +
  number.substring(number.length - 3, number.length);
s;
console.log(number);

//continue
let i = 0;
while (i < 10) {
  i++;
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
