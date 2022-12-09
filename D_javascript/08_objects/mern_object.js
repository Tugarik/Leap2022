const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 45,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Job",
    email: "job@job.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Brook",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 39,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 18,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
];

let input = "Brook";
printOne(input);

let load = users;
getAllInfo(load);

function getAllInfo(inp) {
  getSuperior(inp);
  getCount(inp);
  getOldest(inp);
  getMern(inp);
}

// function to print all information of input name
function printOne(inp) {
  for (i = 0; i < users.length; i++) {
    if (inp == users[i].name) {
      console.log(`Full information for "${inp}"`);
      console.log(users[i]);
      console.log("-----------------------------");
    }
  }
}

// function to find Superman
function getSuperior(inp) {
  let superman;
  let temp = [];
  for (i = 0; i < inp.length - 1; i++) {
    temp.push(inp[i].skills.length);
  }
  superman = inp[temp.indexOf(Math.max(...temp))].name;
  console.log(
    `"${superman}" is a most skilled person. He has ${Math.max(
      ...temp
    )} skills.`
  );
  console.log("-----------------------------");
}

// function to count
function getCount(inp) {
  let logs = 0;
  let over50 = 0;
  for (i = 0; i < inp.length; i++) {
    if (inp[i].isLoggedIn) {
      logs++;
    }
    if (inp[i].points >= 50) {
      over50++;
    }
  }
  console.log(
    `${logs} users are logged in.\n${over50} users have over 50 points.`
  );
  console.log("-----------------------------");
}

// function to find Elder
function getOldest(inp) {
  let temp = [];
  for (i = 0; i < inp.length; i++) {
    temp.push([inp[i].name, inp[i].age]);
  }

  temp.sort(function (a, b) {
    return b[1] - a[1];
  });

  console.log(
    `"${temp[0][0]} (${temp[0][1]} years)", "${temp[1][0]} (${temp[1][1]} years)" and "${temp[2][0]} (${temp[2][1]} years)" are most old people.`
  );
  console.log("-----------------------------");
}

// function to find Elder
function getMern(inp) {
  temp = [];
  for (i = 0; i < inp.length; i++) {
    if (
      inp[i].skills.includes("MongoDB") &&
      inp[i].skills.includes("Express") &&
      inp[i].skills.includes("React") &&
      inp[i].skills.includes("Node")
    ) {
      temp.push(inp[i].name);
    }
  }
  console.log(`${temp} are MERN developers.`);
}
