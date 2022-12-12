// shatar
let shatarTable = document.createElement("div");
rootElement.appendChild(shatarTable);
shatarTable.style.display = "flex";
shatarTable.style.flexWrap = "wrap";
shatarTable.style.width = "850px";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let cellDiv = document.createElement("div");
    shatarTable.appendChild(cellDiv);
    cellDiv.style.width = `100px`;
    cellDiv.style.height = `100px`;
    cellDiv.style.border = "1px solid black";
    if ((i + j) % 2 == 0) {
      cellDiv.style.backgroundColor = "grey";
    }
  }
}
