const playerSelection = getPlayerChoice("Rock");
const computerSelection = getComputerChoice(3);

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection + playerSelection);
  // Add the logic for the game round here
}

function getComputerChoice(max) {
  // Generate a random decision (0 for Rock, 1 for Paper, 2 for Scissors)
  let decision = Math.floor(Math.random() * max);
  // Determine the output based on the value of the 'decision' variable
  if (decision === 0) {
    return "Rock!";
  } else if (decision === 1) {
    return "Paper!";
  } else if (decision === 2) {
    return "Scissors!";
  }
}

function getPlayerChoice(input) {
  return `${input}`;
}

// Call the playRound function to log the result
playRound(playerSelection, computerSelection);
