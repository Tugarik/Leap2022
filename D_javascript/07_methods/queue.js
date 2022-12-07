let queue = [
  "Бат",
  "Дорж",
  "Пунцаг",
  "Готов",
  "Баяраа",
  "Болд",
  "Навчаа",
  "Гончигсумлай",
  "Цэцгээ",
  "Нэргүй",
  "Бальбийгомбо",
  "Баатар",
  "Сүхээ",
];
const cutQueue = (arr, n, a, b) => {
  if (arr.includes(n)) {
    arr.splice(arr.indexOf(n) + 1, 2, a, b);
    arr = arr.slice(0, 10);
  } else {
    return `${n} gesen utga alga daa, sorry`;
  }
  return arr;
};
console.log(cutQueue(queue, "Гончигсумлай", "egch1", "egch2"));
