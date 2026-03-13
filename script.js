"use strict";
const randomNumber = document.querySelector(".secret-number");

const playGame = document.querySelector(".play-button");
const resetButton = document.querySelector(".reset-button");
//document.querySelector(".game-message");
//document.querySelector(".current-score");
//document.querySelector(".Highscore");

let score = 20;
let highScore = 0;
let gamePlay = true;
let guess;

//generates the guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//plays the game
playGame.addEventListener("click", function () {
  guess = Number(document.querySelector("#myvalue").value);
  console.log(guess);
  console.log(secretNumber);
  if (gamePlay) {
    if (guess === secretNumber) {
      console.log(guess);
      randomNumber.textContent = secretNumber;
      document.body.style.backgroundColor = "green";
      document.querySelector(".game-message").textContent = "Correct !!!🏆";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".Highscore").textContent = highScore;
      }

      gamePlay = false;
    } else if (guess < secretNumber && score > 0) {
      document.querySelector(".game-message").textContent = "Too low";
      score--;
      document.querySelector(".current-score").textContent = score;
    } else if (guess > secretNumber && score > 0) {
      document.querySelector(".game-message").textContent = "Too High";
      score--;
      document.querySelector(".current-score").textContent = score;
    }
    //guess.textContent = " ";
  }
});
//resets the game
resetButton.addEventListener("click", function () {
  gamePlay = true;
  highScore = highScore;
  document.querySelector(".game-message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".current-score").textContent = score;
  randomNumber.textContent = "?";

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.899)";
});
