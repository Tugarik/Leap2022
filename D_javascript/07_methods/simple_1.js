let companies = [
  "Amazon",
  "IBM",
  "Oracle",
  "Microsoft",
  "Google",
  "Intel",
  "Apple",
];
console.log(`${companies}\t-original`);

companies.sort();
console.log(`${companies}\t-sorted`);

companies.reverse();
console.log(`${companies}\t-reversed`);

companies.shift();
console.log(`${companies}\t-first deleted`);

companies.pop();
console.log(`${companies}\t-last deleted`);

companies.splice(companies.length / 2, 1);
console.log(`${companies}\t-middle deleted`);

for (let i = companies.length; i >= 0; i--) {
  companies.pop();
}
console.log(companies, `\t-all deleted`);
