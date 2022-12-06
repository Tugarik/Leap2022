let input = " This IS test STRINg";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxy";

function converter(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (upper.includes(str[i])) {
      result += str[i].toLowerCase();
    } else if (lower.includes(str[i])) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(converter(input));
