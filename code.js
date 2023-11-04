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

const choices = document.querySelectorAll('.selection');

choices.forEach((choice) => {
    choice.addEventListener('click', ()=>{
        const playerSelection = choice.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    })
})