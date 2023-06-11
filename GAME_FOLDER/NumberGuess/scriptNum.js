
const hint = document.getElementById("hint");
const noOfGuessesRef = document.getElementById("no-of-guesses");
const guessedNumRef = document.getElementById("guessed-nums");
const restartButton = document.getElementById("restart");
const game = document.getElementById("game");
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check-btn");
const displaySeconds = document.querySelector(".secondsDisplay");
const controlContainer = document.querySelector(".control");
const controlBtn = document.querySelector(".playGame");
const gameContainer = document.querySelector(".container");
// const userGuess = guessInput.value;
let answer, noOfGuesses, guessedNumsArr;
let interval = null;
let seconds = 0;
let isTimerRunning = false;

const toggleContainer = () => {
  controlContainer.style.display = "none";
  gameContainer.style.display = "grid";
};

const numberTimerDisplay = () => {
  displaySeconds.textContent = seconds.toString().padStart(2, "0");
};

const startNumberTimer = () => {
  if (!isTimerRunning) {
    isTimerRunning = true;
    interval = setInterval(() => {
      seconds--;
      numberTimerDisplay();
      if (seconds <= 0 || guessInput.value === answer) {
        stopTimer();
        stopGame();
        restartButton.style.display = "block";
        game.style.display = "none";
        hint.innerHTML = `Game over <br> The number was <span>${answer}</span>`;
      }
    }, 1000);
  }
};

const stopTimer = () => {
  clearInterval(interval);
  isTimerRunning = false;
};

const stopGame = () => {
  game.style.display = "none";
  restartButton.style.display = "grid";
};

const play = () => {
  const userGuess = guessInput.value;
  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    alert("Please enter a valid number between 1 and 100");
    return;
  }
  guessedNumsArr.push(userGuess);
  noOfGuesses += 1;
  if (userGuess != answer) {
    if (userGuess < answer) {
      hint.innerHTML = "Too low. Try Again!";
    } else {
      hint.innerHTML = "Too high. Try Again";
    }
    noOfGuessesRef.innerHTML = `<span>Number of Guesses:</span> ${noOfGuesses}`;
    guessedNumRef.innerHTML = `<span>Guessed Numbers are:</span> ${guessedNumsArr.join(
      " ,"
    )}`;
    hint.classList.remove("error");
    setTimeout(() => {
      hint.classList.add("error");
    }, 10);
  } else {
    stopTimer(); // Stop the timer if the guess is correct
    stopGame(); // Stop the game
    restartButton.style.display = "block";
    game.style.display = "none";
    hint.innerHTML = `Congratulations!<br>The number was <span>${answer}</span><br>You guessed the number in <span>${noOfGuesses}</span> tries`;
  }
};

const gameStartInit = () => {
  answer = Math.floor(Math.random() * 100) + 1;
  noOfGuesses = 0;
  guessedNumsArr = [];
  noOfGuessesRef.innerHTML = "Number of guesses are: None";
  guessedNumRef.innerHTML = "Guessed numbers are: 0";
  guessInput.value = "";
  seconds = 40;
  hint.classList.remove("success", "error");
  numberTimerDisplay();
};

guessInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    play();
  }
});

const restartGame = () => {
  stopTimer(); // Stop the timer
  game.style.display = "grid";
  restartButton.style.display = "none";
  hint.innerHTML = "";
  hint.classList.remove("success");
  checkButton.disabled = false;
  checkButton.disabled = false;
  gameStartInit();
};

restartButton.addEventListener("click", restartGame);

checkButton.addEventListener("click", () => {
  stopTimer(); // Stop the timer if it's running
  startNumberTimer(); // Start the timer when the check button is clicked
  play();
});

window.addEventListener("load", () => {
  gameContainer.style.display = "none";
  controlContainer.display = "grid";
  gameStartInit();
});

controlContainer.addEventListener("click", toggleContainer);

const instructions = document.getElementById("instructions");
const instructContainer = document.querySelector(".InstructWord");

let isInstructionVisible = false; // Keep track of instruction visibility

const instructToggle = () => {
  if (!isInstructionVisible) {
    instructContainer.style.display = "block";
    controlContainer.style.display = "none";
    gameContainer.style.display = "none";
    isInstructionVisible = true;
  } else {
    instructContainer.style.display = "none";
    controlContainer.style.display = "block";
    gameContainer.style.display = "block";
    isInstructionVisible = false;
    isInstructionClickedTwice = true;
  }
};

instructions.addEventListener("click", instructToggle);
