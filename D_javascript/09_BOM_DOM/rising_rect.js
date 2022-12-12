let rootElement = document.getElementById("root");
let newDiv = document.createElement("div");
rootElement.appendChild(newDiv);
newDiv.style.height = "200px";
newDiv.style.width = "50px";
newDiv.style.backgroundColor = "red";
newDiv.style.opacity = "0.1";

grow();

function grow() {
  let i = 10;
  const growInterval = setInterval(function () {
    i++;
    newDiv.style.width = `${i}px`;
    newDiv.style.opacity = `${i / 1000 + 0.5}`;
    if (i == 500) {
      clearInterval(growInterval);
      shrink();
    }
  }, 10);
}

function shrink() {
  let i = 500;
  const shrinkInterval = setInterval(function () {
    i--;
    newDiv.style.width = `${i}px`;
    newDiv.style.opacity = `${i / 1000 + 0.5}`;
    if (i == 10) {
      clearInterval(shrinkInterval);
      grow();
    }
  }, 10);
}
