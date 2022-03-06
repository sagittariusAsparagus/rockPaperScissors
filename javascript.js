let playerScore = 0;
let computerScore = 0;
const computerChoice = document.getElementById("computerChoice")
const playerChoice = document.getElementById("playerChoice")
const result = document.getElementById("result")
const playerScoreCum = document.getElementById("playerScore")
const computerScoreCum = document.getElementById("computerScore")
let playerSelection
let computerSelection
let results
const possibleChoices = document.querySelectorAll('button.btn[data-selection]')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.getAttribute('data-selection')
    playerChoice.textContent = playerSelection
    computerPlay()
    gamePlay()
}))

function computerPlay () {
    let computerOptions = ["rock", "paper", "scissors"];
    computerSelection = computerOptions [Math.floor(Math.random() * computerOptions.length)];
    computerChoice.textContent = computerSelection
}

function gamePlay () {

    if (playerSelection == "rock" && computerSelection == "scissors")
        {playerScore += 1
        results =  "You won!";
        }
    else if (playerSelection == "rock" && computerSelection == "paper")
        { computerScore += 1
        results =  "You lost!";
        }
    else if (playerSelection == "paper" && computerSelection == "scissors")
        { computerScore += 1
        results =  "You lost!";
        }
    else if (playerSelection == "paper" && computerSelection == "rock")
        { playerScore += 1
        results =  "You won!";
        }
    else if (playerSelection == "scissors" && computerSelection == "paper")
        {  playerScore += 1
        results =  "You won!";
        }
    else if (playerSelection == "scissors" && computerSelection == "rock")
        { computerScore +=1
        results =  "You lost!";
        }
    else {results =  "It's a tie!!!"}

    result.textContent = results
    playerScoreCum.textContent = playerScore
    computerScoreCum.textContent = computerScore

    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0
        alert("Computer won the game!!!")
    }
    
}












