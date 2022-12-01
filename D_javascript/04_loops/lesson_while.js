// while
// let count = 1;
// while (count <= 10) {
//   console.log(count);
//   count = count + 1;
// }

// console.log("Countdown:");
// let countDown = 10;
// while (countDown >= 1) {
//   console.log(countDown);
//   countDown = countDown - 1;
// }

// do while
// let loremText =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// let i = 0;
// let countA = 0;

// do {
//   if (loremText[i] == "a" || loremText[i] == "A") {
//     countA = countA + 1;
//   }
//   i = i + 1;
// } while (i < loremText.length);
// console.log("Niit: " + countA + " a baina.");

// i = 0;
// let countB = 0;
// while (i < loremText.length) {
//   if (loremText[i] == "b" || loremText[i] == "B") {
//     countB = countB + 1;
//   }
//   i = i + 1;
// }
// console.log("Niit: " + countB + " b baina.");

// 100 hurtel toond 3-d huvaagdah heden too bga ve
let num = 100;
let count = 0;

while (num > 0) {
  if (num % 3 == 0) {
    count++; // increment count by 1
  }
  num--; // decrement num by 1
}
console.log(count);

//nested loops

count = 1;
let output = "";
let x = 10;

while (x > 0) {
  let y = 10;
  while (y > 0) {
    output += count + "\t";
    if (count % 10 == 0) output += "\n"; // output = output +"\n";
    y--;
    count++;
  }
  x--;
}
console.log(output);

//pyramid 1
count = 1;
output = "";
x = 0;

do {
  y = 0;
  do {
    output += "*" + " ";
    y++;
  } while (y < x + 1);
  output += "\n";
  x++;
} while (x < 10);
console.log(output);

//pyramid 2
count = 1;
output = "";
x = 0;

do {
  y = 0;
  z = 0;

  do {
    output += " " + " ";
    z++;
  } while (z < 10 - x);

  do {
    output += "*" + " ";

    y++;
  } while (y < x + 1);

  output += "\n";
  x++;
} while (x < 10);
console.log(output);

//pyramid 3
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
  while (y < x + 1) {
    output += "*" + " ";
    y++;
  }

  y = 0;
  while (y < x) {
    y++;
    output += "*" + " ";
  }

  output += "\n";
  x++;
} while (x < 10);
console.log(output);
