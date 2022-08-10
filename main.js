const choices = ["rock", "paper", "scissors"];
let winners= []

//this will play the game
//play 5 rounds
//console based
function game() {
    for(let i = 1; i <= 5; i++){
       playRound(i); 
    }
    logWins();
}

function playRound(round) {
    //get input from player
    const playerSelection = playerChoice();
    //console.log(playerSelection);
    const computerSelection = computerChoice();
    //console.log(computerSelection)
    const winner = checkWinner (playerSelection, computerSelection);
    //console.log(winner)
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round)
}

function playerChoice() {
    let input  = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
           "Type Rock, Paper, Scissors. Spelling needs to be exact, but capitalization doesn't matter"
           );
           while (input == null) {
            input = prompt("Type Rock, Paper, Scissors");
        }
            input = input.toLowerCase();
            check = validateInput(input);
        }
    return input;
        //console.log(input);
}

function computerChoice() {
    //get random input from computer
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
    return choices.includes(choice)
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "Tie";
    } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper") 
    ) {
        return "Player"
    } else {
        return "Computer"
    }
}

function logWins() { 
    //console.log(winners)
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice,computerChoice,winner,round) {
    console.log("Round:", round)
    console.log("Player Choice:", playerChoice);
    console.log("Computer Choice:", computerChoice);
    console.log(winner, "Won the Round");
    console.log('****************************************')
}

//game();