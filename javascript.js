let playerScore = 0;
let computerScore = 0;
const computerChoice = document.getElementById("computerChoice")
const playerChoice = document.getElementById("playerChoice")
const result = document.getElementById("result")
const playerScoreCum = document.getElementById("playerScore")
const computerScoreCum = document.getElementById("computerScore")
const finalResult = document.getElementById("finalResult")

let playerSelection
let computerSelection
let results
const possibleChoices = document.querySelectorAll('button.btn[data-selection]')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.getAttribute('data-selection');
    playerChoice.textContent = playerSelection;
    computerPlay();
    gamePlay();
    keepScore();
    gameEnd();
}))

function computerPlay () {
    let computerOptions = ["rock", "paper", "scissors"];
    computerSelection = computerOptions [Math.floor(Math.random() * computerOptions.length)];
    computerChoice.textContent = computerSelection
}

function gamePlay () {

    if (playerSelection == "rock" && computerSelection == "scissors")
        {
        results =  "You won!";
        ++playerScore;
        }
    else if (playerSelection == "rock" && computerSelection == "paper")
        { 
        results =  "You lost!";
        ++computerScore;
        }
    else if (playerSelection == "paper" && computerSelection == "scissors")
        { 
        results =  "You lost!";
        ++computerScore;
        }
    else if (playerSelection == "paper" && computerSelection == "rock")
        { 
        results =  "You won!";
        ++playerScore;
        }
    else if (playerSelection == "scissors" && computerSelection == "paper")
        {  
        results =  "You won!";
        ++playerScore;
        }
    else if (playerSelection == "scissors" && computerSelection == "rock")
        { 
        results =  "You lost!";
        ++computerScore;
        }
    else {results =  "It's a tie!!!"}
    
   
}

function keepScore () {
    result.textContent = results
    playerScoreCum.textContent = playerScore
    computerScoreCum.textContent = computerScore

}


function gameEnd () {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0
        finalResult.textContent = "You win!"
    }

}









