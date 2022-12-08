let students = [
  {
    name: "Gonchig",
    birthYear: 1999,
    hobby: "mori",
    single: true,
  },
  {
    name: "SumLai",
    birthYear: 1990,
    hobby: "iljig",
    single: false,
  },
  {
    name: "Bat",
    birthYear: 1992,
    hobby: "mashin",
    single: true,
  },
  {
    name: "Sumya",
    birthYear: 2005,
    hobby: "dugui",
    single: false,
  },
];

const get20old = (obj) => {
  let temp = [];
  for (i = 0; i < obj.length; i++) {
    if (2022 - obj[i].birthYear > 20) {
      temp.push(obj[i].name);
    }
  }
  console.log(`${temp} are over 20`);
};

const getAge = (obj) => {
  let ageListArr = [];
  for (i = 0; i < obj.length; i++) {
    let ageEach = 2022 - obj[i].birthYear;
    let ageObj = {
      name: obj[i].name,
      age: ageEach,
    };
    ageListArr.push(ageObj);
  }
  console.table(ageListArr);
};

const isSingle = (obj) => {
  let temp = [];
  for (i = 0; i < obj.length; i++) {
    if (obj[i].single == true) {
      temp.push(obj[i].name);
    }
  }
  console.log(`${temp} are single.`);
};

const getInfo = (n) => {
  getAge(n);
  get20old(n);
  isSingle(n);
};

getInfo(students);
