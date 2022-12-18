let array;

//next button listens input field for change and generate array
let input = document.getElementById('input');
let screenText = document.getElementById('screen');
let nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', func);
function func() {
    num = input.value;
    array = shuffle(num);
    screenText.innerText = `let array = [${array}];`;
};

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