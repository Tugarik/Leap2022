// 1 dasgal
let firstName = "Munkhtulga";
let lastName = "Munkhdorj";
firstName.length > lastName.length
  ? console.log("Tanii ner ovgoosoo urt bn")
  : console.log("Tanii ovog nerneesee urt bn");

// 2 dasgal
let sampleText1 = "Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.";
console.log(sampleText1.toLowerCase());

// 3 dasgal
let sampleText2 = "Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.";
console.log(sampleText2.toUpperCase());

//4 dasgal
let str1 = "Pinecone academy- н";
let str2 = " leap хөтөлбөрт тавтай морилго уу? ";
console.log(str1.concat(str2));

//5 dasgal
let fName = "Бат";
let lName = "Дорж";
let age = 25;
let job = "developer";
let city = "Улаанбаатар";
let district = "Сүхбаатар";
let sentence = lName.concat(
  " ovogtoi ",
  fName,
  " minii bie ",
  age,
  " nastai. ",
  city,
  " hotod ",
  district,
  " duuregt ",
  job,
  " ajil hiideg."
);
console.log(sentence);

//6 duureg
console.log("\t1 2 3 4 5\n\t2 3 4 5 1\n\t3 4 5 1 2\n\t4 5 1 2 3\n\t5 1 2 3 4");
