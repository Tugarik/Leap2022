// Dotroo olon ugudul hadgaldag

/*

let object = {
    key: value;
}
*/

// let person1 = {
//   first: "Naranbayar",
//   last: "Dorj",
//   age: 22,
//   score: [85, 90, 92, 100],
//   isMarried: false,
//   shout: () => {
//     return "Wahahaha";
//   },
//   fullName: function () {
//     return this.first + " " + this.last;
//   },
//   address: {
//     country: "Mongolia",
//     city: "Ulaanbaatar",
//   },
// };

// let person2 = {
//   first: "Yunden",
//   last: "BAt",
//   age: 24,
//   score: [70, 80, 100, 93],
//   isMarried: false,
//   shout: () => {
//     return "Hehehehe";
//   },
// };

//let func = () => {console.log("person")};  //function expression or arrow function
// objectiin kugudul ey -g property gej nerlene
// shout - method (object dotor function orj irvel method gej nerlene)
// nested object

//objectName.propertyName
//objectName['propertyName']   2 yanzaar duudaj bolno
// console.log(person1.age);
// console.log(person1["age"]);
// console.log(person1.shout());
// console.log(person1.fullName());

// neg delguuriin 2 hayag
// let person1 = {
//   firstName: "Наранбаяр",
// };
// let person2 = person1;
// person2.firstName = "Эрдэнэ";
// // console.log(person1.firstName);
// console.log(person2.firstName);

// ...spread operator    ...arr1  dotorh buh utgiig haaltguigeer avna

let person11 = {
  firstName: "Наранбаяр",
};
let person12 = { ...person11 };
person12.firstName = "Эрдэнэ";
// console.log(person11.firstName);
// console.log(person12.firstName);

let arr1 = [10, 20, 30];
let arr2 = [...arr1];

arr2[0] = 100;
console.log(arr1);

let person1 = {
  first: "Naranbayar",
  last: "Dorj",
  age: 22,
  score: [85, 90, 92, 100],
  isMarried: false,
  shout: () => {
    return "Wahahaha";
  },
  fullName: function () {
    return this.first + " " + this.last;
  },
  address: {
    country: "Mongolia",
    city: "Ulaanbaatar",
  },
};

//function get average speed()
//function get avergae age()
let keysArr = Object.keys(person1);
console.log(keysArr);
console.log(Object.values(person1));

let Athlets = [ath1, ath2];
let ath1 = {
  name: "Gonchig",
  age: 15,
  record: [10, 20, 15], //oor oor baij bolno
};
