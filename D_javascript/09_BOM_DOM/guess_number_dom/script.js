let random = Math.floor(Math.random() * 20 + 1);
console.log(random + 'random');
let userGuess = document.querySelector('.guess');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let restartBtn = document.querySelector('.again');
restartBtn.addEventListener('click', restartGame);

let checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkNumber);
let sum = Number(score.innerText);

function checkNumber () {

   console.log(userGuess.value);
   if (userGuess.value <=0) {
      message.innerText = "1-20 хооронд \n\nТоо оруулна уу";
   } else {
      if (Number(userGuess.value) < random) {
         message.innerText = "Бага байна даа";
         sum --;
         score.innerText = sum;
      } else if (userGuess.value > random) {
         message.innerText = "Ихдээд наасан";
         sum --;
         score.innerText = sum;
      } else if (userGuess.value == random) {
         message.innerText = "Яг таалаа\n\nДахин эхэлнэ үү...";
         sum += 5;
         score.innerText = sum;
         if (sum > Number(highscore.innerHTML)) {
            highscore.innerText = sum;
         }
         checkBtn.disabled = true;
         number.innerHTML = 'CONGRATULATIONS!';
         document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347';
      }
      if (sum <= 0) {
         message.innerText = "Та хожигдлоо! \n\nДахин эхэлнэ үү...";
         number.innerHTML = 'GAME OVER!';
         checkBtn.disabled = true;
         document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
      }
   }
}

function restartGame() {
   message.innerHTML = 'Тааж эхлээрэй...';
   userGuess.value = '';
   random = Math.floor(Math.random() * 20 + 1);
   sum = 20;
   score.innerText = sum;
   console.log(random + 'random');
   checkBtn.disabled = false;
   number.innerHTML = '?';
   document.getElementsByTagName('body')[0].style.backgroundColor = '#222';
}
