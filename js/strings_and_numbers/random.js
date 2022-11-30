let n1 = window.prompt("Ehnii toog oruulna uu");
let n2 = window.prompt("Daraagiin toog oruulna uu");

console.log(n1);
console.log(n2);
let numRandom =
  Math.floor(Math.random() * (Math.abs(n1 - n2) - 1)) + Math.min(n1, n2) + 1;

console.log(numRandom);
