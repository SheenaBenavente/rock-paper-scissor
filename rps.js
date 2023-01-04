let userChoice;
let computerChoice;
let result;
let roundsPlayed = 0;
const maxRounds = 3;

const resetGameBtn = document.querySelector('#reset-game');
const computerChoiceDisplay = document.getElementById('computer_choice');
const userChoiceDisplay = document.getElementById('user_choice');
const resultDisplay = document.getElementById('result');
const allChoices = document.querySelectorAll('button');
const winnerLog = document.getElementById('score_log');

//Plays game and manipulates DOM
allChoices.forEach(choice => choice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

//reset game pulls DOM
resetGameBtn.addEventListener('click', function() {
  resetGame();
});

//Generates the computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * allChoices.length);
  if (randomNumber === 0) {
    computerChoice = 'rock';
  } else if (randomNumber === 1) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

//Calculates results
function getResult() {
    roundsPlayed++;
    if (roundsPlayed > maxRounds) {
      resultDisplay.innerHTML = 'Game over!';
      return;
    }
    if (computerChoice === userChoice) {
      result = 'It is a tie!';
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
      result = 'You win';
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
      result = 'You lose';
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
      result = 'You win';
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
      result = 'You lose';
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
      result = 'You win';
    } else {
      result = 'You lose';
    }
    resultDisplay.innerHTML = result;
    winnerLog.innerHTML += 'Round ' + roundsPlayed + ': ' + result + '<br>';
  }

  //Resets game by clearing winner log, and clear result display
  function resetGame() {
  winnerLog.innerHTML = '';
  resultDisplay.innerHTML = '';
  roundsPlayed = 0;
}