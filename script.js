//Query HTML
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const resultBox = document.querySelector('.result');
const theChoices = document.querySelector('.choices');
const resetButton = document.querySelector('.reset');
const playerScoreBoard = document.querySelector('.player-score');
const computerScoreBoard = document.querySelector('.computer-score');
const finalResult = document.querySelector('.final-results');



//This function returns a random choice of rock, paper, or scissors
function getComputerChoice() {
    //This function defines randomness
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    //Returns choice of rocker paper or scissors
    let options = ["rock", "paper", "scissors"];
    let index = getRandomInt(0, 3);
    let computerChoice = options[index];
    return computerChoice;

}

//This defines which choices beat other choices and returns a win or loss
function playRound(playerChoice, computerChoice) {
    let result;
    theChoices.innerText = (`You chose ${playerChoice} and the computer chose ${computerChoice}`);
    if (playerChoice == "rock" && computerChoice == "scissors") {
        resultBox.innerText = ("You won!");
        result = "win";
        return result;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        resultBox.innerText = ("You won!");
        result = "win";
        return result;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        resultBox.innerText = ("You won!");
        result = "win";
        return result;
    } else if (playerChoice == computerChoice) {
        resultBox.innerText = ("It's a Tie");
        result = "tie";
        return result;
    } else {
        resultBox.innerText = ("You lost!");
        result = "lose";
        return result;
    };
};

let playerScore = 0;
let computerScore = 0;

//This function keeps score and maintains the best out of five logic
function keepScore(result) {
    if (result === "win") {
        playerScore += 1;
        playerScoreBoard.innerText = `Your Score: ${playerScore}`;
    } else if (result === "lose") {
        computerScore += 1;
        computerScoreBoard.innerText = `Computer Score: ${computerScore}`;
    } else {};
    //This part of the function reads the score each time and decides if the game is over or not
    if (playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            finalResult.innerText = ("You won best out of 5! Press reset to play again!");
        } else if (playerScore < computerScore) {
            finalResult.innerText = ("You lost best out of 5! Press reset to play again!");
        } else {
            finalResult.innerText = ("The end result is a tie! Press reset to play again!");
        };
    };
};


//The three following listeners play a round with the associated button choice

rockButton.addEventListener('click', () => {
    if (playerScore + computerScore < 5) {
        let result = playRound("rock", getComputerChoice());
        keepScore(result);
    };
});

paperButton.addEventListener('click', () => {
    if (playerScore + computerScore < 5) {
        let result = playRound("paper", getComputerChoice());
        keepScore(result);
    };
});

scissorsButton.addEventListener('click', () => {
    if (playerScore + computerScore < 5) {
        let result = playRound("scissors", getComputerChoice());
        keepScore(result);
    };
});

//Reset button refreshes page
resetButton.addEventListener('click', () => {
    window.location.reload();
});

