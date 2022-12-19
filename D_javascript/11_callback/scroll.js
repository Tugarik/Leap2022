let customButton = document.getElementById('root');

customButton.addEventListener('click', clickFunc)
function clickFunc() {
    console.log('Hello');
}
customButton.innerText = "Click Me";
let body = document.querySelector('body');
let statusBar = document.getElementById('status');

console.log(body.clientHeight);
console.log(window.innerHeight);

window.addEventListener('scroll', () => {
    statusBar.innerText = `${Math.floor(window.scrollY * 100 / (body.clientHeight - window.innerHeight))}%`
});
