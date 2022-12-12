document.getElementById("root").innerText = "Hello, World!";

document.getElementsByClassName("dummy")[0].innerText = "Hello from Dummy 1!";
document.getElementsByClassName("dummy")[1].innerHTML = "Hello from Dummy 2!";

document.getElementsByClassName("header")[0].innerHTML = "Header text!";
document.querySelector(".header").innerHTML = "New header text";
// getElements creates HTML collection

document.getElementById("demo").innerHTML =
  "<h1 class = 'dummy3'> Hello World </div>";

document.getElementsByClassName("dummy3").innerText = "test";

document.getElementById("root").innerHTML =
  "<div class ='darkMode'>darkModeText</div>";

document.getElementsByTagName("img")[0].alt = "bla bla";
document.getElementsByTagName("img")[0].src = "https://picsum.photos/200/300";
document.getElementsByTagName("img")[0].width = "300";

document.getElementsByClassName("profileName")[0].style.backgroundColor =
  "blue";

let newDiv = document.createElement("h1");
newDiv = document.createElement("h2");
let newContent = document.createTextNode("Welcome to our site");

newDiv.appendChild(newContent);
const main = document.getElementsByTagName("main");
main[0].appendChild(newDiv);

let rootElement = document.getElementById("root");
let ulElement = document.createElement("ul");

rootElement.appendChild(ulElement);

for (let i = 0; i < 10; i++) {
  let liELement = document.createElement("li");
  liELement.innerText = i.toString();
  ulElement.appendChild(liELement);
}
