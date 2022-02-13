function computerPlay () {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices [Math.floor(Math.random() * computerChoices.length)];
}

function gamePlay (playerSelection, computerSelection) {
if (playerSelection == "rock" && computerSelection == "scissors")
{return "You won!"}
else if (playerSelection == "rock" && computerSelection == "paper")
{ return "You lost!"}
else if (playerSelection == "paper" && computerSelection == "scissors")
{ return "You lost!"}
else if (playerSelection == "paper" && computerSelection == "rock")
{ return "You won!"}
else if (playerSelection == "scissors" && computerSelection == "paper")
{ return "You won!"}
else if (playerSelection == "scissors" && computerSelection == "rock")
{ return "You lost!"}
else {return "It's a tie!!!"}
}

const playerSelection = "rock";
const computerSelection = computerPlay()

console.log(gamePlay(playerSelection,computerSelection))