'use strict';

let randomNum = () => {
  let num = Math.trunc(Math.random() * 20) + 1;
  return num;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const setSecretNumberValue = number => {
  document.querySelector('.number').textContent = number;
};
const setHihgScore = highscore => {
  document.querySelector('.highscore').textContent = highscore;
};
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let secretNumber = randomNum();
let score = 20;
let highScore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('Not a Number!');

    //When the user wins
  } else if (guess === secretNumber) {
    setSecretNumberValue(secretNumber);
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      setHihgScore(highScore);
    }
    //When the guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('Too high!')
        : displayMessage('Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game!');
      setScore(0);
    }
  }
});

document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    checkBtn.click();
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  setScore(20);
  setSecretNumberValue('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = randomNum();
});
