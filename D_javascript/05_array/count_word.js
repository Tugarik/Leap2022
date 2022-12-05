let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];

let inputWord = prompt("Хайх үгээ оруулна уу");

count = 0;
for (i = 0; i < data.length; i++) {
   if (inputWord.toLocaleLowerCase() == data[i].toLocaleLowerCase()) {
      count ++;
   }
}
if (count > 0) {
   console.log(`"${inputWord.toLocaleLowerCase()}" гэдэг үг ${count} орсон байна.`)
} else {
   console.log(`Таны хайсан "${inputWord.toLocaleLowerCase()}" гэдэг үг олдсонгүй`)
}
