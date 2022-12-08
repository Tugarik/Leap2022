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
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
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

console.log(`\t${getCount(users)} users are logged in.`);
console.log("-----------------------------");

function getAllInfo(input) {
  getSuperior(input);
  getCount(input);
  getOlder(input);
  getMern(input);
}

// function to print all information of input name
function printOne(inp) {
  for (i = 0; i < users.length; i++) {
    if (inp == users[i].name) {
      console.log(`Full information for ${inp}`);
      console.log(users[i]);
      console.log("-----------------------------");
    }
  }
}

// function to find Superman
function getSuperior(inp) {}

// function to count
function getCount(inp) {
  let logs = 0;
  for (i = 0; i < users.length; i++) {
    if (inp[i].isLoggedIn) {
      logs++;
    }
  }
  return logs;
}

// function to find Elder
function getOlder(inp) {}

// function to find Elder
function getMern(inp) {}
