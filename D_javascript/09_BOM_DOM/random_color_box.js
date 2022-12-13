let rootElement = document.getElementById("root");
let boxes = document.createElement("div");
boxes.className = "boxes";
rootElement.appendChild(boxes);
boxes.style.width = "400px";
boxes.style.height = "400px";
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.border = "2px solid black";

for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    let box = document.createElement("div");
    boxes.append(box);
    box.style.width = "100px";
    box.style.height = "100px";
    box.border = "1px solid grey";

    box.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}
