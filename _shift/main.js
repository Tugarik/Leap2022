// Create a new array with input number elements
let arrayByNum = [];
let num = document.getElementById('input').value;
for (i = 0; i < num; i++) {
    arrayByNum.push(i);
}
console.log(arrayByNum);

// Function for shuffle an array 
function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

let array = shuffle(arrayByNum);
console.log(array);



// document.addEventListener('change', getNum);

let input = document.getElementById('input');
input.addEventListener('change', getInput);
function getInput() {
    num = document.getElementById('input').value;
    console.log(num);
    return num;
}
let content;
let screen = document.getElementById('screen');
let nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', nextPage);

function nextPage() {
    input.addEventListener('change', getInput);
    content = `let array = [${array}];`;
    screen.innerText = content;
}