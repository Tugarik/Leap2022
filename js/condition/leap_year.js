let isLeapYear = 2022;
let answer1, answer2, answer3, answer4;
let answerYes = " is a Leap Year";
let answerNo = " is not a Leap Year";

// version 1: Used 13 rows
if (isLeapYear % 100 == 0) {
  if (isLeapYear % 400 == 0) {
    answer1 = answerYes;
  } else {
    answer1 = answerNo;
  }
} else {
  if (isLeapYear % 4 == 0) {
    answer1 = answerYes;
  } else {
    answer1 = answerNo;
  }
}

console.log("===== First version =====");
console.log(isLeapYear + answer1);
console.log("");

// version 2: Used 9 rows
if (isLeapYear % 400 == 0) {
  answer2 = answerYes;
} else {
  if (!(isLeapYear % 100 == 0) && isLeapYear % 4 == 0) {
    answer2 = answerYes;
  } else {
    answer2 = answerNo;
  }
}

console.log("===== Second version =====");
console.log(isLeapYear + answer2);
console.log("");

// version 3: Used 5 rows
if (
  isLeapYear % 400 == 0 ||
  (!(isLeapYear % 100 == 0) && isLeapYear % 4 == 0)
) {
  answer3 = answerYes;
} else {
  answer3 = answerNo;
}

console.log("===== Third version =====");
console.log(isLeapYear + answer3);
console.log("");

// version 4: Used 1 rows
answer4 =
  isLeapYear % 400 == 0 || (!(isLeapYear % 100 == 0) && isLeapYear % 4 == 0)
    ? answerYes
    : answerNo;

console.log("===== Fourth version =====");
console.log(isLeapYear + answer4);
console.log("");
