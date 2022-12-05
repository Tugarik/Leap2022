let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
let textCompanies ='';

for (let i = 0; i < itCompanies.length; i++) {
   console.log(`${itCompanies[i]}: length is ${itCompanies[i].length} letters long`);
   textCompanies += `${itCompanies[i]}, `;
}
console.log("First in the list: ", itCompanies[0]);
console.log("Last in the list: ", itCompanies[itCompanies.length-1]);
console.log("Middle of the list: ", itCompanies[Math.floor(itCompanies.length/2)]);



console.log(textCompanies.concat(`зэрэг мэдээллийн технологийн томоохон компаниуд.`));