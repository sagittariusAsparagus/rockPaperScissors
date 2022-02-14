let playerScore = 0;
let computerScore = 0;


function computerPlay () {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices [Math.floor(Math.random() * computerChoices.length)];
}

function gamePlay () {
    const playerInput = prompt("Rock, paper, or scissors?", );
    const playerSelection = playerInput.toLowerCase();
    const computerSelection = computerPlay().toLowerCase();
    
    if (playerSelection == "rock" && computerSelection == "scissors")
        {return "You won!";
        playerScore += 1}
    else if (playerSelection == "rock" && computerSelection == "paper")
        { return "You lost!";
        computerScore += 1}
    else if (playerSelection == "paper" && computerSelection == "scissors")
        { return "You lost!";
        computerScore += 1}
    else if (playerSelection == "paper" && computerSelection == "rock")
        { return "You won!";
        playerScore += 1}
    else if (playerSelection == "scissors" && computerSelection == "paper")
        { return "You won!";
        playerScore += 1}
    else if (playerSelection == "scissors" && computerSelection == "rock")
        { return "You lost!";
        computerScore += 1}
    else {return "It's a tie!!!"}
}

function game() {
    
        for (let i = 0; i < 5; i++){
            console.log(gamePlay());
        }
    }





game();
console.log(playerScore);
console.log(computerScore)

