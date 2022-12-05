// Array init

// let studentAges = [20, 25, 30, 35, 24, 27];
// console.log(studentAges[0]);
// console.log(studentAges[studentAges.length - 1]);
// studentAges[studentAges.length - 1] = 100;
// console.log(studentAges);

// console.log(studentAges);
// for (let i = 0; i < studentAges.length; i++) {
//   studentAges[i] = studentAges[i] + 1;
// }
// console.log(studentAges);

//
// let studentNames = ["boldoo", "dorjoo", "tsetsgee", "dulmaa"];
// let i = 0;
// while (i <= studentNames.length) {
//   if (studentNames[i] && studentNames[i][0] === "d") {
//     console.log(studentNames[i]);
//   }
//   i++;
// }

// null, 0, undefined, Nan  false utga avna

// let names = [
//   "batsukh",
//   "narandelgerekh",
//   "nomin",
//   "lkhagva-erdene",
//   "Jamiyan-purev",
//   "Uugan-Erdene",
//   "Sharavnyambuu",
//   "namnantseren",
// ];
// let longest = names[0];
// let longestNames = [];
// let count = 0;
// for (let i = 1; i < names.length; i++) {
//   if (names[i].length > longest.length) {
//     longest = names[i];
//   }
// }

// for (let i = 0; i < names.length; i++) {
//   if (names[i].length == longest.length) {
//     longestNames[count] = names[i];
//     count++;
//   } else {
//     continue;
//   }
// }
// console.log(longest);
// console.log(longestNames);
// console.log(longestNames.length);

//multidimensional array
let x = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < x.length; i++) {
  for (let j = 0; j < x[i].length; j++) {
     console.log(x[i][j]);
      x[i][j] = '*';
  }
}
console.log(x);
// Date
// let now = new Date();
// console.log(now);

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);

// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log(Dec31_1969);

// let date = new Date("2017-01-26");
// console.log(date);

// let date = new Date();
// console.log(date);
// console.log(date.getHours());

// let date1 = new Date(2016, 1, 28);
// date1.setDate(date1.getDate() + 2);
// console.log(date1);

// let today = new Date();
// today.setHours(0);
// alert(today); // өнөөдөр хэвээрээ гэхдээ цаг нь 0 болсон
// today.setHours(0, 0, 0, 0);
// alert(today); // өнөөдөр хэвээрээ гэхдээ яг 00:00:00 болж байг
