import {
  options, // Importing options from Word.js module
  message, // Reference to the message element
  hintRef, // Reference to the hint element
  controls, // Reference to the controls element
  startBtn, // Reference to the start button element
  letterContainer, // Reference to the letter container element
  userInputSection, // Reference to the user input section element
  resultText, // Reference to the result text element
  scoreText, // Reference to the score text element
  word, // Reference to the word element
  words, // Array of words
  secondsHand, // Reference to the seconds hand element
  instructions, // Reference to the instructions element
  startContainer, // Reference to the start container element
  playGame, // Reference to the play game element
  gameContainer, // Reference to the game container element
  instructContainer, // Reference to the instruction container element
  gameWrapper, // Reference to the game wrapper element
  restartBtn, // Reference to the restart button element
  timerDiv, // Reference to the timer div element
  overAllScore, // Reference to the overall score element
  bravoVideo,
  tryAgainVideo,
} from "./Word.js";

import { toggleContainer, generateRandomValue, generateWord,  chanceLeft, createLetterButtons, updateIntervalTime, init, startTimer, stopTimer, stopGame, updateScore, handleTotalScore, handleLetterInput} from "./Main.js";

console.log(bravoVideo);

let isInstructionVisible = false; // Keep track of instruction visibility

const instructToggle = () => {
  instructContainer.style.display = isInstructionVisible ? "none" : "block"; // Toggle display of instruction container
  startContainer.style.display = isInstructionVisible ? "block" : "none"; // Toggle display of start container
  gameContainer.style.display = isInstructionVisible ? "block" : "none"; // Toggle display of game container
  isInstructionVisible = !isInstructionVisible; // Toggle instruction visibility flag
};

startBtn.addEventListener("click", () => {
  generateWord(); // Generate a new word
  startTimer(); // Start the timer
  chanceLeft(); // Display the remaining chances
  startBtn.disabled = true; // Disable the start button
  bravoVideo.style.display = "none";
});

instructions.addEventListener("click", instructToggle); // Add click event listener to instructions element

playGame.addEventListener("click", () => {
  init(); // Initialize the game
  toggleContainer(); // Toggle visibility of containers
  updateScore(); // Update the score display
});

window.addEventListener("keydown", (event) => {
  const letter = event.key.toUpperCase(); // Get the pressed letter in uppercase
  if (letter.match(/^[A-Z]$/)) { // Check if the letter is an uppercase alphabet
    handleLetterInput(letter); // Handle the letter input
  }
}); 

window.onload = () => {
  restartBtn.style.display = "none"; // Hide restart button
  overAllScore.style.display = "none"; // Hide overall score
  bravoVideo.style.display = "none"; // Hide bravoVideo score
  tryAgainVideo.style.display = "none"; // Hide tryAgainVideo score
  bravoVideo.autoplay =true;
  bravoVideo.muted =true;
  tryAgainVideo.autoplay =true;
  tryAgainVideo.muted =true;
}










