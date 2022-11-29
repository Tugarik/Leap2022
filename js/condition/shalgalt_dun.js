let name1 = "Dambchaa", name2 = "Onts Dumd";
let points1 = 67, points2 = 59;
let score1, score2;


score1 = points1 < 60 ? "Mash muu" 
: points1 < 70 ? "Hangalttai" 
: points1 < 80 ? "Dund"
: points1 < 90 ? "Sain"
: points1 <= 100 ? "Mash sain"
: "Onoo aldaatai (Onoo 0-100 hoorond baih yostoi)";

score2 = points2 < 60 ? "Mash muu" 
: points2 < 70 ? "Hangalttai" 
: points2 < 80 ? "Dund"
: points2 < 90 ? "Sain"
: points2 <= 100 ? "Mash sain"
: "Onoo aldaatai (Onoo 0-100 hoorond baih yostoi)";

console.log("========================================================");
console.log("Ner: " + name1 + " | " + " Avsan onoo: " + points1 + " | " + "Unelgee: " + score1);
console.log("--------------------------------------------------------");
console.log("Ner: " + name2 + " | " + " Avsan onoo: " + points2 + " | " + "Unelgee: " + score2);
console.log("========================================================");

