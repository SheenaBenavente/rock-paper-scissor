
 //array
const weaponChoice = ['rock', 'paper', 'scissors']

//play the game
//play 5 rounds
//console based
function theGame() { 
    playRound();
}
 
//game instructions
function playRound () {
    const player = playerChoice();
    const computer = computerChoice();
}

//player selection
function playerChoice () {
    let input = prompt('type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    console.log(input);
}

//computer random choice
function computerChoice () {
    return weaponChoice[Math.floor(Math.random()*weaponChoice.length)]
}


theGame();