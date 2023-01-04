
 //array
const weaponChoices = ['rock', 'paper', 'scissors']
const winners = [];


//play the game
//play 5 rounds
//console based
function theGame() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}    

//game instructions
function playRound(round) {
    const player = playerChoice();
    const computer = computerChoice();
    const winner = checkWinner(player, computer);
    winners.push(winner);
    logRound(player, computer, winner, round);
}

    //player selects weapon choice
function playerChoice () {
    let input = prompt('type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
       input = prompt('type Rock, Paper, or Scissors. Use correct spelling');
        while (input == null) {
            input = prompt('type Rock, Paper, or Scissors');
        }
       input = input.toLowerCase();
       check = validateInput(input);
       }
       return (input);
}

//computer selects weapon choice
function computerChoice () {
    return weaponChoices[Math.floor(Math.random() * weaponChoices.length)];
}

function validateInput(choice) {
    return weaponChoices.includes(choice);
}

// checks winner based on if/else and returns
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
    return 'tie'; 
    } else if (
    (playerChoice === 'rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') || 
    (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
    return 'Player';
    } else {
    return 'Computer';
    }
}

// records wins
function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'tie').length;
    console.log('Results:');
    console.log('Player Wins:',playerWins);
    console.log('Computer Wins:',computerWins);
    console.log('Tie:',ties);
}

//show round results
function logRound (playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player Chose', playerChoice);
    console.log('Computer Chose', computerChoice);
    console.log(winner, 'Won the round');
    console.log('------------')
}





