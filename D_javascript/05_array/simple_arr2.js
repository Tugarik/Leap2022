let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let firstThree = itCompanies.slice(0, 3);
console.log(firstThree);

let lastThree = itCompanies.slice(-3);
console.log(lastThree);

let middle = itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 +1);
console.log(middle);

itCompanies.shift();
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);





