const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice(3);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`It's a tie! ${playerSelection} can't beat ${computerSelection}.`);
  } else if (playerSelection === "Rock" && computerSelection === "Scissors!") {
    console.log(`${playerSelection} beats ${computerSelection}. You win!`);
  } else if (playerSelection === "Paper!" && computerSelection === "Rock!") {
    console.log(`${playerSelection} beats ${computerSelection}. You win!`);
  } else if (playerSelection === "Scissors!" && computerSelection === "Paper!") {
    console.log(`${playerSelection} beats ${computerSelection}. You win!`);
  } else {
    console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
  }
}

function getComputerChoice(max) {
  let decision = Math.floor(Math.random() * max);
  if (decision === 0) {
    return "Rock!";
  } else if (decision === 1) {
    return "Paper!";
  } else if (decision === 2) {
    return "Scissors!";
  }
}

function getPlayerChoice() {
  let playerChoice = window.prompt("Choose Rock, Paper, or Scissors:", "");
  return playerChoice;
}

playRound(playerSelection, computerSelection);
