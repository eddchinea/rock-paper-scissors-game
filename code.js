//Get a random computer choice between rock, paper or scissors
function getComputerChoice() {
    let choice
    //Get a random number between 1 and 3 (including both of them)
    const numChoice = Math.floor(Math.random() * 3 + 1)

    //Assign each number a choice following the name order (1: rock, 2: paper, 3: scissors)
    if (numChoice == 1) choice = 'rock'
    else if (numChoice == 2) choice = 'paper'
    else choice = 'scissors'

    //return the string value of choice (rock, paper or scissors)
    return choice
}


//Play a single round returning the winner and why
function playRound(playerSelection, computerSelection) {
    //Set a youWon variable to a boolean type
    let youWon = true
    //check if both selections are the same,
    if (playerSelection == computerSelection) {
        //And if they are the same, return a Tie result message
        return `It's a tie! Both have chosen ${playerSelection}`
    }
    //if not, then determine if the player wins
    else{
        switch (playerSelection) {
            case 'rock':
                youWon = computerSelection == 'paper' ? false : true
                break;

            case 'paper':
                youWon = computerSelection == 'scissors' ? false : true
                break;

            case 'scissors':
                youWon = computerSelection == 'rock' ? false : true
                break;
        }
    }

    //if the player wins, return a winner message
    if (youWon) return `You win! ${playerSelection} beats ${computerSelection}`
    //if not, return a looser message
    else return `You loose! ${computerSelection} beats ${playerSelection}`
}

//Play a 5 rounds game
function game() {
    //Create two counters to keep score
    let playerCounter = 0;
    let pcCounter = 0; 

    //Play 5 round game (untill one reach 5 points)
    for (let i = 0; playerCounter < 5 && pcCounter < 5; i++) {

        //Declare the result of each round
        let result = playRound(prompt('Rock, Paper or Scissors').toLowerCase(), getComputerChoice());

        //Print the result
        console.log(result)

        //Add point to the winner of the round
        if (result.includes('tie')) {
            console.log('No one get points')
        } else if (result.includes('win')) {
            playerCounter++
            console.log('You have earned 1 point')
        } else {
            pcCounter++
            console.log('PC have earned 1 point')
        }

        //Print the status of the game
        console.log(`Player's points: ${playerCounter}\nPC's points: ${pcCounter}`)
    }

    //Compare the points and return the result
    if (playerCounter === pcCounter) {
        return 'Final result: Tie'
    } else if (playerCounter > pcCounter) {
        return 'Final result: You win'
    } else {
        return 'Final result: You loose'
    }
}


console.log(game())