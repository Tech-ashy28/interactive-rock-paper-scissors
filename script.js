let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

/*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */

scoreDisplay();

// Generating computer computer move.
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
const resultDisplay = document.querySelector(".result-display");
const choiceDisplay = document.querySelector(".choice");



function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose ❌";
    } else if (computerMove === "paper") {
      result = "You win ✅";
    } else if (computerMove === "scissors") {
      result = "Tie 🤝";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win ✅";
    } else if (computerMove === "paper") {
      result = "Tie 🤝";
    } else if (computerMove === "scissors") {
      result = "You lose ❌";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie 🤝";
    } else if (computerMove === "paper") {
      result = "You lose ❌";
    } else if (computerMove === "scissors") {
      result = "You win ✅";
    }
  }

  if (result === "You win ✅") {
    score.wins += 1;
  } else if (result === "You lose ❌") {
    score.losses += 1;
  } else if (result === "Tie 🤝") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  scoreDisplay();

  resultDisplay.innerHTML = result;

  
  choiceDisplay.innerHTML = `You picked <img src="icons/${playerMove}-emoji.png">

    Computer picked <img src="icons/${computerMove}-emoji.png">`;

  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function scoreDisplay() {
  document.querySelector(
    ".game-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Resets the score to zero (asks for confirmation first)
function resetScore() {
  // const confirmed = confirm("Are you sure you want to reset the scores?");
  // if (!confirmed) return;

  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  localStorage.setItem("score", JSON.stringify(score));
  scoreDisplay();

  resultDisplay.innerHTML = ""
  choiceDisplay.innerHTML = "";
}
