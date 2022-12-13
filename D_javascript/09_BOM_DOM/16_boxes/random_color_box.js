let rootElement = document.getElementById("root");
let boxes = document.createElement("div");
boxes.className = "boxes";
rootElement.appendChild(boxes);
boxes.style.width = "800px";
boxes.style.height = "800px";
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
let b = Math.floor(Math.random() * 255) + 50;
let color = `rgb( ${r}, ${g}, ${b})`;
let randNum = Math.floor(Math.random() * 16) + 1;

for (i = 0; i < 16; i++) {
  let box = document.createElement("div");
  boxes.append(box);
  box.style.width = "190px";
  box.style.height = "190px";
  box.style.borderRadius = "5px";
  let name = document.createElement("div");
  box.appendChild(name);
  name.innerText = color;
  name.style.margin = "40% 20%";
  box.style.backgroundColor = color;
  if (i == randNum) {
    let ranColor = `rgb( ${r}, ${g}, ${b - 50})`;
    box.style.backgroundColor = ranColor;
  }
}
