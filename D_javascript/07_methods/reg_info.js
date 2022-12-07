const aimagsIndex = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "Ф",
  "Х",
  "У",
  "Ц",
];
const aimagsNames = [
  "Архангай",
  "Баян-Өлгий",
  "Баянхонгор",
  "Булган",
  "Говь-Алтай",
  "Дорноговь",
  "Дорнод",
  "Дундговь",
  "Завхан",
  "Өвөрхангай",
  "Өмнөговь",
  "Сүхбаатар",
  "Сэлэнгэ",
  "Төв",
  "Увс",
  "Ховд",
  "Хөвсгөл",
  "Хэнтий",
  "Дархан-Уул",
  "Орхон",
  "Говьсүмбэр",
  "Улаанбаатар",
  "Улаанбаатар",
];

// gender
const getGender = (number) => {
  if (number % 2 == 0) {
    return "emegtei";
  } else {
    return "eregtei";
  }
};

//birthday
const getBirhtday = (num) => {
  let on, sar, udur;
  if (num[4] == 2 || num[4] == 3) {
    on = 2000 + Number(num.slice(2, 4));
  } else if (num[4] == 0 || num[4] == 1) {
    on = 1900 + Number(num.slice(2, 4));
  } else {
    console.log("Registriin dugaar buruu bn");
  }
  sar = Number(num.slice(4, 6));
  udur = Number(num.slice(6, 8));
  console.log(`Tursun on: ${on} sar: ${sar} udur: ${udur}`);
};

//Region
const getBirthRegion = (input) => {
  for (i = 0; i < aimagsIndex.length; i++) {
    if (input[0] == aimagsIndex[i]) {
      return aimagsNames[i];
    }
  }
};

//check
const isCorrectReg = (input) => {
  if (
    input.length == 10 &&
    aimagsIndex.includes(input[0]) &&
    aimagsIndex.includes(input[1]) &&
    Number.isInteger(Number(input.slice(2)))
  ) {
    huis = getGender(input);
    console.log(`Huis: ${huis}`);

    getBirhtday(input);

    let region = getBirthRegion(input);
    console.log(`Tursun gazar: ${region}`);
  } else {
    console.log("Registriin dugaar buruu bn");
  }
};

//full info
let register = "ЦБ99120717";

const getRegisterInfo = (input) => {
  isCorrectReg(input);
};

getRegisterInfo(register);
