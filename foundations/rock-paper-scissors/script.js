const conditions = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  const winningCombinations = [
    ['rock', 'scissors'],
    ['paper', 'rock'],
    ['scissors', 'paper'],
  ];

  if (playerSelection === computerSelection) {
    console.log(`It's a tie! ${playerSelection} can't beat ${computerSelection}.`);
  } else if (winningCombinations.some(([player, computer]) => player === playerSelection && computer === computerSelection)) {
    console.log(`${playerSelection} beats ${computerSelection}. You win!`);
  } else {
    console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
  }
}

function getComputerChoice(max) {
  const decision = Math.floor(Math.random() * max);

  if (decision === 0) {
    return conditions.rock;
  } else if (decision === 1) {
    return conditions.paper;
  } else {
    return conditions.scissors;
  }
}

function getPlayerChoice() {
  const playerChoice = window.prompt('Choose Rock, Paper, or Scissors:', '');
  return playerChoice.toLowerCase();
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice(3);

playRound(playerSelection, computerSelection);
