let playerScore = 0;
let computerScore = 0;
const computerChoice = document.getElementById("computerChoice")
const playerChoice = document.getElementById("playerChoice")
const result = document.getElementById("result")
const playerScoreCum = document.getElementById("playerScore")
const computerScoreCum = document.getElementById("computerScore")
const finalResult = document.getElementById("finalResult")
const modal_container = document.getElementById("modal_container")
const whoWon = document.getElementById("who-won")
const gameOverComputerScore = document.getElementById("gameover-computer-score")
const gameOverPlayerScore = document.getElementById("gameover-player-score")
const playAgain = document.getElementById("play-again")
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

playerScoreCum.textContent = playerScore
        computerScoreCum.textContent = computerScore

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
    if (playerScore === 5) {
        whoWon.textContent = "You win!";
        gameOverComputerScore.textContent = `Computer: ${computerScore}`;
        gameOverPlayerScore.textContent = `Player: ${playerScore}`;
        modal_container.classList.add('show')
        playerScore = 0
        computerScore = 0
        playerScoreCum.textContent = playerScore
        computerScoreCum.textContent = computerScore
        result.textContent = ""
        computerChoice.textContent = ""
        playerChoice.textContent = ""
    } else if (computerScore === 5) {
        whoWon.textContent = "You lose!";
        gameOverComputerScore.textContent = `Computer: ${computerScore}`;
        gameOverPlayerScore.textContent = `Player: ${playerScore}`;
        modal_container.classList.add('show') 
        playerScore = 0
        computerScore = 0
        playerScoreCum.textContent = playerScore
        computerScoreCum.textContent = computerScore
        result.textContent = ""
        computerChoice.textContent = ""
        playerChoice.textContent = ""
    }

}

playAgain.addEventListener('click', () => {
    modal_container.classList.remove("show")
})









