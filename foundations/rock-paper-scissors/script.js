function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice(3);
console.log(computerSelection);

function getComputerChoice(max) {
  return Math.floor(Math.random() * max)
}