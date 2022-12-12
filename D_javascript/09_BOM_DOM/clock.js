let rootElement = document.getElementById("root");

let clock = document.createElement("div");
rootElement.appendChild(clock);
clock.style.paddingTop = "30px";
clock.style.paddingBottom = "30px";
clock.style.fontSize = "30px";
clock.style.border = "2px solid black";
clock.style.textAlign = "center";
let h = 0;
let i = 0;
let j = 0;
let d = 0;

const myInterval = setInterval(function () {
  j++;
  clock.innerText = `${d < 10 ? "0" : ""}${d} days, ${
    h < 10 ? "0" : ""
  }${h} : ${i < 10 ? "0" : ""}${i} : ${j < 10 ? "0" : ""}${j}`;

  if (j == 60) {
    j = 0;
    i++;
  }
  if (i == 60) {
    j = 0;
    h++;
  }
  if (h == 24) {
    j = 0;
    i = 0;
    h = 0;
    d++;
  }
}, 1);
