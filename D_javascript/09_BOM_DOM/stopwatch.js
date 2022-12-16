let rootElement = document.getElementById("root");
let header = document.createElement("header");

let clock = document.createElement("div");
rootElement.appendChild(clock);
clock.style.paddingTop = "30px";
clock.style.paddingBottom = "30px";
clock.style.fontSize = "30px";
clock.style.border = "2px solid black";
clock.style.textAlign = "center";

let btn1 = document.createElement("button");
btn1.innerText = "Start";
btn1.className = "start";
rootElement.appendChild(btn1);
let btn2 = document.createElement("button");
rootElement.appendChild(btn2);
btn2.innerText = "Stop";
btn2.className = "stop";
let resetBtn = document.createElement("button");
rootElement.appendChild(resetBtn);
resetBtn.innerText = "Reset";
resetBtn.className = "reset";

for (i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].style.fontSize = "20px";
  document.querySelectorAll("button")[i].style.margin = "10px";
  document.querySelectorAll("button")[i].style.padding = "10px 20px";
}

let startBtn = document.querySelector(".start");
startBtn.addEventListener("click", startTimer);
let stopBtn = document.querySelector(".stop");
stopBtn.addEventListener("click", stopTimer);
let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetTimer);

clock.innerText = `00 : 00 : 00 : 00`;
let myInterval;
let hr = 0; //hour
let mn = 0; //min
let sc = 0; //sec
let ms = 0; //ms

function startTimer() {
  myInterval = setInterval(function () {
    ms++;
    clock.innerText = `${hr < 10 ? "0" : ""}${hr} : ${mn < 10 ? "0" : ""
      }${mn} : ${sc < 10 ? "0" : ""}${sc} : ${ms < 10 ? "0" : ""}${ms}`;

    if (ms == 60) {
      ms = 0;
      sc++;
    }
    if (sc == 60) {
      sc = 0;
      mn++;
    }
    if (mn == 60) {
      mn = 0;
      hr++;
    }
  }, 17);
  startBtn.disabled = true;
  resetBtn.disabled = true;
}

function stopTimer() {
  clearInterval(myInterval);
  startBtn.disabled = false;
  resetBtn.disabled = false;
}

function resetTimer() {
  clock.innerText = `00 : 00 : 00 : 00`;
  let hr = 0; //hour
  let mn = 0; //min
  let sc = 0; //sec
  let ms = 0; //ms
}
