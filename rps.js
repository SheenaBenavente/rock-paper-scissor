
 //array
let winner = [];
const choices = ["rock", "paper", "scissor"];
 
function resetGame ()  {
    winners = []
    document.querySelector('.playerScore').textcontent = 'score: 0';
    document.querySelector('.computerScore').textcontent = 'score: 0';
    document.querySelector('.ties').textcontent = 'ties: 0';
    document.querySelector('.winner').textcontent = '';
    document.querySelector('.playerChoice').textcontent = '';
    document.querySelector('.reset').style.display = "none";
}

function startGame() {
 let imgs = document.querySelectorAll('img');
 imgs.forEach((img) =>
    img.addEventListener("click", () => {
        if (img.id) {
            playRound(img.id);
        }
    }));
}    

function playRound(playerChoice) {
    if(wins >= 5) {
        return
    }
    const computer = computerSelect();
    const winner = checkWinner(playerChoice, computer);
    winners.push(winner);
    tallyWins();
    displayRound (playerChoice,computerChoice,winner);
    wins = checkWins()
        if(wins ==5){
            displayEnd()
            //display the button to visible
            //change the button to visible
            //change the text to display winner
        }
}

function displayEnd() {
    let playerWins = winners.filter((item) == 'player').length;
    if(playerWins == 5){
        document.querySelector('.winner').textcontent = 'you won 5 rounds. rad.'
    } else { document.querySelector('.winner').textcontent = 'you lost!'
    document.querySelector('.reset').style.display = 'flex';
}
}


function displayRoundWinner(winner) {
    document.querySelector('.playerChoice').textContent = `you choose: ${playerChoice,charAt(0).toUpperCase() + playerChoice.slice(1)}`
    document.querySelector('.computerChoice').textContent = `The computer choose: ${playerChoice,charAt(0).toUpperCase() + computerChoice.slice(1)}`
    document.querySelector('.winner').textcontent = `round winner: ${winner}`;
}


function tallyWins () {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    const ties = winners.filter((item) => item == 'tie').length;
    document.querySelectorAll('.playerScore').textcontent = `score: ${pWinCount}`;
    document.querySelectorAll('.computerScore').textcontent = `score: ${cWinCount}`;
    document.querySelectorAll('.tie').textcontent = `score: ${ties}`;

}

function computerChoice () {
    return weaponChoices[Math.floor(Math.random() * weaponChoices.length)];
}
 
function checkWins () {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    return Math.max(pWinCount, cWinCount)
}

function checkWinner(playerChoice, computerChoice) {
    if (
    (playerChoice == 'rock' && computerChoice == 'Scissors') ||
    (playerChoice == 'paper' && computerChoice == 'rock') || 
    (playerChoice == 'scissors' && computerChoice == 'paper')
    )  {
    return 'Player';
    } else if (playerChoice == computerChoice) {
    return 'Tie';
    } else {
    return 'Computer';
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'tie').length;
}
 
function DisplayRound(playerChoice,computerChoice,winner) {
    document.querySelector('.playerChoice').textcontent = `you choose` ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)};
    document.querySelector('.computerChoice').textcontent = `you choose` ${playerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)};
    document.querySelector('.ties').textcontent = `you choose` ${ties}`;
}

startGame();