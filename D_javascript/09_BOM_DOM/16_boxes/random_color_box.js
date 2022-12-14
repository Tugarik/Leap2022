let difference = 50;

let rootElement = document.getElementById("root");

let input = document.createElement("input");
rootElement.appendChild(input);
input.id = "input";
input.value = "4";
input.type = "number";
input.style.height = "50px";
input.style.width = "80px";
input.style.fontSize = "30px";
input.style.textAlign = "right";
input.style.paddingRight = "10px";

let startBtn = document.createElement("button");
startBtn.id = "startBtn";
rootElement.appendChild(startBtn);
startBtn.innerText = "Generate";
startBtn.style.fontSize = "30px";
startBtn.style.padding = "10px 20px";
startBtn.addEventListener("click", changeSize);

let inputSize = Number(document.getElementById("input").value);
let gridSize = Number(inputSize);

let boxes = document.createElement("div");
boxes.className = "boxes";
rootElement.appendChild(boxes);

boxes.style.width = `${gridSize * 200}px`;
boxes.style.height = `${gridSize * 200}px`;
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.alignContent = "space-between";
boxes.style.justifyContent = "space-between";
boxes.style.margin = "50px auto";
boxes.style.padding = "10px";
boxes.style.border = "10px solid grey";
boxes.style.borderRadius = "10px";

let r = Math.floor(Math.random() * 255) + 1;
let g = Math.floor(Math.random() * 255) + 1;
let b = Math.floor(Math.random() * 255) + difference;
let color = `rgb( ${r}, ${g}, ${b})`;
let randNum = Math.floor(Math.random() * gridSize * gridSize);
console.log(randNum);

for (i = 0; i < gridSize * gridSize; i++) {
  let box = document.createElement("div");
  boxes.append(box);
  box.style.width = `190px`;
  box.style.height = `190px`;
  box.style.borderRadius = "5px";
  let name = document.createElement("div");
  box.appendChild(name);
  name.innerText = color;
  name.style.margin = "40% 20%";
  box.style.backgroundColor = color;
  if (i == randNum) {
    let ranColor = `rgb( ${r}, ${g}, ${b - difference})`;
    box.style.backgroundColor = ranColor;
    name.innerText = ranColor;
  }
}

function changeSize() {
  rootElement.removeChild(boxes);
  inputSize = Number(document.getElementById("input").value);
  gridSize = Number(inputSize);

  boxes = document.createElement("div");
  boxes.className = "boxes";
  rootElement.appendChild(boxes);

  boxes.style.width = `${gridSize * 200}px`;
  boxes.style.height = `${gridSize * 200}px`;
  boxes.style.display = "flex";
  boxes.style.flexWrap = "wrap";
  boxes.style.alignContent = "space-between";
  boxes.style.justifyContent = "space-between";
  boxes.style.margin = "50px auto";
  boxes.style.padding = "10px";
  boxes.style.border = "10px solid grey";
  boxes.style.borderRadius = "10px";

  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + difference;
  let color = `rgb( ${r}, ${g}, ${b})`;
  let randNum = Math.floor(Math.random() * gridSize * gridSize);
  console.log(randNum);
  for (i = 0; i < gridSize * gridSize; i++) {
    let box = document.createElement("div");
    boxes.append(box);
    box.style.width = `190px`;
    box.style.height = `190px`;
    box.style.borderRadius = "5px";
    let name = document.createElement("div");
    box.appendChild(name);
    name.innerText = color;
    name.style.margin = "40% 20%";
    box.style.backgroundColor = color;
    if (i == randNum) {
      let ranColor = `rgb( ${r}, ${g}, ${b - difference})`;
      box.style.backgroundColor = ranColor;
      name.innerText = ranColor;
    }
  }
}
