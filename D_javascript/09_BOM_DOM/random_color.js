let rootElement = document.getElementById("root");

let newDiv = document.createElement("div");
rootElement.appendChild(newDiv);
newDiv.style.height = "100vh";
newDiv.style.width = "100vw";
document.body.style.margin = '0';

let button = document.createElement('button');
button.innerText = ('Random Color Generator');
newDiv.appendChild(button);
newDiv.style.textAlign = 'center';
button.style.marginTop = '50vh';
button.style.padding = '20px';
button.style.fontSize = '40px';
button.style.borderRadius = '20px';

let colorCode = document.createElement('div');
colorCode.innerText = '#ffffff';
colorCode.style.fontSize = '40px';
colorCode.style.marginTop = '10vh';
colorCode.style.backgroundColor = 'grey';



colorCode.style.padding = '20px';

newDiv.appendChild(colorCode);
const randColor = () => {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor = "#" + randomColor;
   colorCode.innerHTML = "#" + randomColor;
 }
 
 button.addEventListener("click", randColor);
