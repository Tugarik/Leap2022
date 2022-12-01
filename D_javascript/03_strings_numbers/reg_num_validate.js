// let regNum = prompt("Enter your registry number");
let regNum = 'СЦ90091718';

regNum.length == 10
&& Number.isInteger(Number(regNum.substring(2, regNum.length))) == true
&& Number.isInteger(Number(regNum[0])) == false
&& Number.isInteger(Number(regNum[1])) == false

? console.log("Accepted! Valid registry number.")
: console.log("Rejected! Wrong registry number.");