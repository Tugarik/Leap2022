let array;
let score = 0;
//next button listens input field for change and generate array
let input = document.getElementById('input');
let screenText = document.getElementById('screen');
let genBtn = document.getElementById('generate');
let nextBtn = document.getElementById('next');
let plusBtn = document.getElementById('plusScore');
let sumScore = document.querySelector('#score');

genBtn.addEventListener('click', genArray);
function genArray() {
    num = input.value;
    array = shuffle(num);
    screenText.innerText = `let array = [${array}];`;
    genBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    plusBtn.style.display = 'block';
    sumScore.style.display = 'block'; 
};

plusBtn.addEventListener('click', getScore)
function getScore() {
    score ++;
    sumScore.value = score;
}

nextBtn.addEventListener('click', goNext);
function goNext() {
    screenText.innerText = `slide 1`;
}

// Function for generate and shuffle an array 
function shuffle(num) {

    // Create a new array with input number elements
    let arr = [];
    for (i = 0; i < num; i++) {
        arr.push(i);
    }

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