let activities = [
  ["ajil", 10],
  ["ideh", 1],
  ["yariltsah", 2],
  ["togloh", 3],
  ["untah", 8],
];
console.table(activities);
let actPercent = activities;

for (let i = 0; i < activities.length; i++) {
  actPercent[i][0] = activities[i][0];
  actPercent[i][1] = Number(((activities[i][1] / 24) * 100).toFixed(2));
}

console.table(actPercent);
