function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
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

    

    while (playerScore !== 3 && computerScore !== 3) {
        playerChoice = prompt ("Enter you choice(Rock, Paper, Scissors): ");
        roundResult = playRound(playerChoice, getComputerChoice());
        alert(roundResult);
        if (roundResult.slice(4,8) === "Win!") {
            playerScore++;
        } else if(roundResult.slice(4,8) === "Lose"){
            computerScore++;
        }
        console.log(`Player Score: ${playerScore}  Computer Score: ${computerScore}`);
    }

    if (playerScore === 3) {
        console.log("You Won The Game")
    } else {
        console.log("You lose the game nubbbbb")
    }
    
    
}

game();