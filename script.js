const playerChoice = prompt("Rock, paper, or scissors?");
let computerChoice = "";
let playerScore = "";
let computerScore = "";

// Function generates a random number which determines the computer's choice of either rock, paper, or scissors.
function getComputerChoice(playerChoice) {
  const randomNumber = Math.random();

  if (randomNumber < 0.34) {
    computerChoice = "Rock";
  } else if (randomNumber <= 0.67) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  // Line for debugging purposes. Checks if getComputerChoice() is working properly.
  // console.log(
  //   `DEBUG: random number was ${randomNumber}. therefore, computer picks ${computerChoice}.`
  // );

  return computerChoice;
}

// console.log(`COMPUTER: ${computerChoice}`);
// console.log(`PLAYER: ${playerChoice}`);

// Function to play a round of rock paper scissors.
function playRound(playerChoice, computerChoice) {
  if (playerChoice === "Rock") {
    if (computerChoice === "Rock") {
      console.log(`Computer picked ${computerChoice}. It's a tie!`);
    } else if (computerChoice === "Paper") {
      console.log(`Computer picked ${computerChoice}. Computer wins!`);
      computerScore++;
    } else {
      console.log(`Computer picked ${computerChoice}. Player wins!`);
      playerScore++;
    }
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Paper") {
      console.log(`Computer picked ${computerChoice}. It's a tie!`);
    } else if (computerChoice === "Rock") {
      console.log(`Computer picked ${computerChoice}. Player wins!`);
      playerScore++;
    } else {
      console.log(`Computer picked ${computerChoice}. Computer wins!`);
      computerScore++;
    }
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Scissors") {
      console.log(`Computer picked ${computerChoice}. It's a tie!`);
    } else if (computerChoice === "Paper") {
      computerScore;
      console.log(`Computer picked ${computerChoice}. Player wins!`);
      playerScore++;
    } else {
      console.log(`Computer picked ${computerChoice}. Computer wins!`);
      computerScore++;
    }
  }
}

// Function to play
function playGame() {
  getComputerChoice();
  playRound(playerChoice, computerChoice);

  getComputerChoice();
  playRound(playerChoice, computerChoice);

  getComputerChoice();
  playRound(playerChoice, computerChoice);

  getComputerChoice();
  playRound(playerChoice, computerChoice);

  getComputerChoice();
  playRound(playerChoice, computerChoice);

  console.log(`Player: ${playerScore}. Computer: ${computerScore}.`);

  if (playerScore > computerScore) {
    console.log("Player wins!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie!");
  }
}

// After prompt takes user's input, verify if it is one of the three moves. If not, alert the user & prompt again.

if (
  playerChoice === "Rock" ||
  playerChoice === "Paper" ||
  playerChoice === "Scissors"
) {
  playGame();
} else {
  alert("Please enter either Rock, Paper, or Scissors ONLY! Please refresh to try again.");
}
