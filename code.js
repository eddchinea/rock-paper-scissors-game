//Get a random computer choice between rock, paper or scissors
function getComputerChoice() {
    let choice
    //Get a random number between 1 and 3 (including both of them)
    const numChoice = Math.floor(Math.random() * 3 + 1)

    //Assign each number a choice following the name order (1: rock, 2: paper, 3: scissors)
    if (numChoice == 1) choice = "rock"
    else if (numChoice == 2) choice = "paper"
    else choice = "scissors"

    //return the string value of choice (rock, paper or scissors)
    return choice
}
