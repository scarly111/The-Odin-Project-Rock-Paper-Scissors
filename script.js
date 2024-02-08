const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const finalResult = document.getElementById("finalResult");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;


    switch(result){
        case "YOU WIN!":
            
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    if(playerScore === 5 || computerScore === 5){

        if(playerScore === 5){
            finalResult.textContent = 'PLAYER WINS!';
        }

        if(computerScore === 5){
            finalResult.textContent = 'COMPUTER WINS!';
        }
        
        setTimeout(() => {
            finalResult.textContent = '';
        }, 1000);

        playerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
        return playGame();
    }
}



