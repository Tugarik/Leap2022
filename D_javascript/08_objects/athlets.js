//function get average speed()
//function get avergae age()

let Athletes = [
  {
    name: "Suren",
    age: 16,
    record: [10, 20, 15, 50, 30],
    team: "Aqua",
  },
  {
    name: "Doj",
    age: 20,
    record: [25, 22, 19],
    team: "Orange",
  },
  {
    name: "Bat",
    age: 18,
    record: [22, 20, 15, 12],
    team: "Black",
  },
  {
    name: "Sumya",
    age: 22,
    record: [16, 40, 12, 32, 11, 28],
    team: "Aqua",
  },
];

// function for average speed
const getAvgSpeed = (inpObj) => {
  let total = 0;
  for (i = 0; i < inpObj.length; i++) {
    let sum = 0;
    for (j = 0; j < inpObj[i].record.length; j++) {
      sum += inpObj[i].record[j];
    }
    let dundaj = sum / inpObj[i].record.length;
    console.log(`${inpObj[i].name}: \t\t\t${dundaj.toFixed(2)} sec`);
    total += dundaj;
  }
  console.log("-----------------------------");
  console.log(`Average record: ${(total / inpObj.length).toFixed(2)} sec`);
};

// function for average age
const getAvgAge = (inpObj) => {
  let ageSum = 0;
  for (i = 0; i < inpObj.length; i++) {
    ageSum += inpObj[i].age;
  }
  console.log(`Average age: ${Math.floor(ageSum / inpObj.length)} years old`);
};

// function for collecting names in an array
function getAllNames(inpObj) {
  let arr = [];
  for (i = 0; i < inpObj.length; i++) {
    arr.push(inpObj[i].name);
  }
  return arr;
}

//function for calling all functions
function getAllInfo(input) {
  getAvgSpeed(input);
  getAvgAge(input);
  console.log(getAllNames(input));
}

// call the function
getAllInfo(Athletes);
