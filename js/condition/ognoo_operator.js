// 1 Ognoo
/**
 * let inputYear = prompt("On oruulna uu")
 * let inputMonth = prompt("Sar oruulna uu")
 * let inputDay = prompt("Udur oruulna uu")
 */
let inputYear = 2022;
let inputMonth = 5;
let inputDay = 6;
let strYear, strMonth, strDay;

strYear = inputYear.toString();

inputMonth < 10
  ? (strMonth = "0" + inputMonth)
  : (strMonth = inputMonth.toString());

inputDay < 10 ? (strDay = "0" + inputDay) : (strDay = inputDay.toString());

console.log(strYear.concat("-", strMonth, "-", strDay));

// 2 Operator

// let inputNum = prompt("Utasnii dugaar oruulna uu")
let inputNum = 99001234;
telNumber = inputNum.toString();
switch (telNumber.substring(0, 2)) {
  case "99":
    console.log("Mobicom");
    break;
  case "88":
    console.log("Unitel");
    break;
  case "81":
    console.log("G-Mobile");
    break;
    break;
  case "91":
    console.log("Skytel");
    break;
  default:
    console.log("Dugaar buruu bn");
}
