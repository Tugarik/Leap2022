// let phoneNum = prompt("Utasnii dugaaraa hiine uu");
let phoneNum = '+97699119911';

Number.isInteger(Number(phoneNum)) == true
&& phoneNum.substring(0, 4) === '+976' 
&& phoneNum.length == 12
? console.log("Valid!  Та монгол улсын утасны дугаарыг зөв орууллаа.")
: console.log("Not valid! \nТа монгол улсын утасны дугаарыг буруу орууллаа\nError: Toon dotor useg tsohij yavaa eseh, oron dutuu, ulsiin code zuv esehiig nyagtalna uu.");
