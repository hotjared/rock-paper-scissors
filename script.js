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

console.log(getComputerChoice())
