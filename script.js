/**
 * Get player choice
 * 
 * get computer choice
 * 
 * Conditionals to choose winner
 * 
 * loop 5 times while keeping score
 * 
 * After 5 games compare scores to choose overall winner
 * 
 * Ask to replay
 * 
 */


/**This function prompts the player and stores their choice in a variable */
function getPlayerChoice() {
    /**While loop returns player choice or reruns if choice is not appropriate */
    let keepGoing = true
    while (keepGoing) {
        let answer = prompt("Rock, Paper, or Scissors?").toLowerCase().trim()
        if (answer != "rock" && answer != "paper" && answer != "scissors") {
            console.log("Please type Rock, Paper, or Scissors!")
            
        } else {
            return answer
            keepGoing = false
        }
    }
}

/**This function returns a random choice of rock, paper, or scissors*/
function getComputerChoice() {
    /**This function defines randomness */
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**Returns choice of rocker paper or scissors */
    let options = ["rock", "paper", "scissors"]
    let index = getRandomInt(0, 3);
    let computerChoice = options[index]
    return computerChoice

}

function playRound(playerChoice, computerChoice) {
    let result
    if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You won!")
        result = "win"
        return result
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("You won!")
        result = "win"
        return result
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("You won!")
        result = "win"
        return result
    } else if (playerChoice == computerChoice) {
        console.log("It's a Tie")
        result = "tie"
        return result
    } else {
        console.log("You lost!")
        result = "lose"
        return result
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        result = playRound(getPlayerChoice(), getComputerChoice());
        if (result == "win") {
            playerScore += 1
        } else if (result == "lose") {
            computerScore += 1
        } else {}
    }

    console.log(`Your score was ${playerScore} and the computer score was ${computerScore}`)

    if (playerScore > computerScore) {
        console.log("You won best out of 5!")
    } else if (playerScore < computerScore) {
        console.log("You lost best out of 5!")
    } else {
        console.log("The end result is a tie!")
    }    
}


game()
