function computerSelection() {
let compRock = "rock";
let compScissors = "scissors"
let compPaper = "paper"
let randomNum = Math.floor((Math.random() * 10) + 1);

if (randomNum == 10){
    computerSelection();
}
else if (randomNum >= 7 && randomNum < 10) {
    //console.log(compRock);
    return compRock;
}
else if (randomNum >= 4 && randomNum < 7) {
    //console.log(compScissors);
    return compScissors;
}
else if (randomNum >= 1 && randomNum < 4) {
    //console.log(compPaper);
    return compPaper;
}
}

function playerSelection() {
let playerInput = window.prompt("Enter your choice")
let playerChoice = playerInput.toLowerCase();
let playerRock = "rock";
let playerScissors = "scissors"
let playerPaper = "paper"

if (playerChoice == "rock") {
    //console.log(playerRock);
    return playerRock;
}
else if (playerChoice == "scissors") {
    //console.log(playerScissors);
    return playerScissors;
}
else if (playerChoice == "paper") {
    //console.log(playerPaper);
    return playerPaper;
}
else {
    console.log("wrong input")
    playerSelection();
}
}

function game() {
    let playerWinCount = 0;
    let compWinCount = 0;
    for (let i = 0; i<5; i++) {

    
        let playerChoice = playerSelection();
        let computerChoice = computerSelection();
        

        if (playerChoice == "rock" && computerChoice == "scissors") {
            console.log("You win " + playerChoice + " beats " + computerChoice);
            playerWinCount += 1;
            console.log("Your win count is " + playerWinCount)
            console.log("The computer's win count is " + compWinCount)
            }

        else if (playerChoice == "scissors" && computerChoice == "paper") {
            console.log("You win " + playerChoice + " beats " + computerChoice);
            playerWinCount += 1;
            console.log("Your win count is " + playerWinCount)
            console.log("The computer's win count is "+ compWinCount)
        }

        else if (playerChoice == "paper" && computerChoice == "rock") {
            console.log("You win " + playerChoice + " beats " + computerChoice);
            playerWinCount += 1;
            console.log("Your win count is " + playerWinCount)
            console.log("The computer's win count is "+ compWinCount)
        }

        else if (playerChoice == "rock" && computerChoice == "paper") {
            console.log("You lose " + playerChoice + " loses to " + computerChoice);
            compWinCount += 1;
            console.log("Your win count is " + playerWinCount)
            console.log("The computer's win count is "+ compWinCount)
        }
    
        else if (playerChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose " + playerChoice + " loses to " + computerChoice);
            compWinCount += 1;
            console.log("Your win count is " + playerWinCount)
            console.log("The computer's win count is "+ compWinCount)
        }
    
        else if (playerChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose " + playerChoice + " loses to " + computerChoice);
            compWinCount += 1;
            console.log("Your win count is " + playerWinCount)
            console.log("The computer's win count is "+ compWinCount)
        }

        else if (playerChoice == computerChoice) {
            console.log("its a draw")
            console.log("Your win count is " + playerWinCount)
            console.log("The computer's win count is "+ compWinCount)
        }

    }

}