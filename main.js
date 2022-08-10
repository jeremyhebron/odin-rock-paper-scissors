const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame() {
  winners = [];
  document.querySelector(".playerscore").textContent = "Score: 0";
  document.querySelector(".computerscore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerchoice").textContent = "";
  document.querySelector(".computerchoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function startGame() {
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerSelection) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }

  const computerSelection = computerChoice();

  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  tallyWins();
  displayRound(playerSelection, computerSelection, winner);
  wins = checkWins();
  if (wins == 5) {
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;
  if (playerWins == 5) {
    document.querySelector(".winner").textContent =
      "You won, your sins have been absolved";
  } else {
    document.querySelector(".winner").textContent =
      "You lost, you will pay for your sins";
  }
  document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerSelection, computerSelection, winner) {
  document.querySelector(".playerchoice").textContent = `You Chose: ${
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
  }`;
  document.querySelector(".computerchoice").textContent = `God Chose: ${
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
  }`;
  document.querySelector(".winner").textContent = `Round Winner: ${winner}`;
}

function tallyWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".playerscore").textContent = `Score: ${playerWins}`;
  document.querySelector(
    ".computerscore"
  ).textContent = `Score: ${computerWins}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function computerChoice() {
  //want to update dom with the computer selection
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  return Math.max(playerWins, computerWins);
}
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  //console.log(winners)
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  //console.log("Results:");
  //console.log("Player Wins:", playerWins);
  //console.log("Computer Wins:", computerWins);
  //console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  //console.log("Round:", round)
  //console.log("Player Choice:", playerChoice);
  //console.log("Computer Choice:", computerChoice);
  //console.log(winner, "Won the Round");
  //console.log('****************************************')
}

//game();
startGame();
