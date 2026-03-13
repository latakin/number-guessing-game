"use strict";
const randomNumber = document.querySelector(".secret-number");

const playGame = document.querySelector(".play-button");
//document.querySelector(".game-message");
//document.querySelector(".current-score");
//document.querySelector(".Highscore");

let score = 20;
let highScore = 0;
let gamePlay = true;

//console.log(randomNumber);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

playGame.addEventListener("click", function () {
  const guess = Number(document.querySelector("#myvalue").value);
  console.log(guess);
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
  }
});
