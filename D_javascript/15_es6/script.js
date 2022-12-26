let human1 = {
    name: 'John',
    age: 36,
    grade1: 15,
    grade2: 15,
    grade3: 15,
    grade4: 15,
    grade5: 15,
    grade6: 15,
}

//destructuring in ES6


console.log(human1);

let { name, age, grade1, grade2, grade3, grade4, grade5, grade6 } = human1;

console.log(age);

// for ... of loop

// for(let user in users) {to do something}

// array findindex() method    (boolean)

let ranks = [1, 3, 7, 3, 4, 10, 7];
let index1 = ranks.findIndex((rank) => rank === 7);
let index2 = ranks.findIndex((rank, index) => rank === 7 && index > 2);
console.log(index1);
console.log(index2);

// rest parameter

function show(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}
show('1', '2', '3', '4', '5', '6');

//spread operator
let arr1 = ['1', '2'];
let arr2 = [...arr1, '3', '4', '5'];
console.log(arr2);

//promise and callback  ES6

