function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats paper";
        }
    } else {
        return "Please enter a valid choice"
    }
}

function game() {

    playerScore = 0;
    computerScore = 0;

    const rnpButtons = document.querySelectorAll(".rnp-choice");
    const resultPara = document.querySelector('.result');
    const currentScore = document.querySelector('.score')
    const endResult = document.querySelector('.end-result');
    const restartBtn = document.querySelector('#restart-btn');

    rnpButtons.forEach(choice => {
        choice.addEventListener("click", () => {
            if (playerScore !== 3 && computerScore !== 3) {
                let roundResult = playRound(choice.textContent, getComputerChoice());
                resultPara.textContent = roundResult;
                if (roundResult.slice(4, 8) === "Win!") {
                    playerScore++;
                } else if (roundResult.slice(4, 8) === "Lose") {
                    computerScore++;
                }
                currentScore.textContent = `Player Score: ${playerScore}     Computer Score: ${computerScore}`
                if (playerScore === 3) {
                    endResult.textContent = "You won the GAme!";
                } else if(computerScore === 3) {
                    endResult.textContent = "You Lose the game nubbb";
                }   
            } else {
            }
        });
    });

    restartBtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        endResult.textContent = "";
        currentScore.textContent = "";
        resultPara.textContent = "";
    })

    




}



game();




