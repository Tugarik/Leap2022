let rootElement = document.getElementById("root");

let container = document.createElement("div");
rootElement.appendChild(container);
container.className = "container";
container.style.width = "650px";
container.style.height = "530px";
container.style.margin = "0 auto";
container.style.paddingTop = "50px";
container.style.display = "flex";
container.style.justifyContent = "space-between";

let pickers = document.createElement("div");
container.append(pickers);
pickers.className = "pickers";
pickers.style.width = "200px";
pickers.style.backgroundColor = "lightgrey";
pickers.style.display = "flex";
pickers.style.flexWrap = "wrap";
pickers.style.justifyContent = "space-around";
pickers.style.alignContent = "space-around";

let area = document.createElement("div");
container.append(area);
area.className = "area";
area.style.width = "400px";
area.style.backgroundColor = "lightgrey";

for (let i = 0; i < 3; i++) {
  let picker = document.createElement("button");
  pickers.appendChild(picker);
  picker.style.cursor = "pointer";
  picker.style.width = "120px";
  picker.style.height = "120px";

  let preview = document.createElement("div");
  area.append(preview);
  preview.style.width = "320px";
  preview.style.height = "450px";
  preview.style.margin = "40px auto";
  if (i == 0) {
    picker.style.backgroundColor = "red";
    picker.id = "red";

    preview.style.backgroundColor = "red";
    preview.id = "previewRed";
    preview.style.display = "block";
  } else if (i == 1) {
    picker.style.backgroundColor = "green";
    picker.id = "green";

    preview.style.backgroundColor = "green";
    preview.id = "previewGreen";
    preview.style.display = "none";
  } else if (i == 2) {
    picker.style.backgroundColor = "blue";
    picker.id = "blue";

    preview.style.backgroundColor = "blue";
    preview.id = "previewBlue";
    preview.style.display = "none";
  }
}

let redBtn = document.getElementById("red");
let greenBtn = document.getElementById("green");
let blueBtn = document.getElementById("blue");
let previewRed = document.getElementById("previewRed");
let previewGreen = document.getElementById("previewGreen");
let previewBlue = document.getElementById("previewBlue");

redBtn.addEventListener("click", () => {
  previewRed.style.display = "block";
  previewGreen.style.display = "none";
  previewBlue.style.display = "none";
});

greenBtn.addEventListener("click", () => {
  previewRed.style.display = "none";
  previewGreen.style.display = "block";
  previewBlue.style.display = "none";
});

blueBtn.addEventListener("click", () => {
  previewRed.style.display = "none";
  previewGreen.style.display = "none";
  previewBlue.style.display = "block";
});
