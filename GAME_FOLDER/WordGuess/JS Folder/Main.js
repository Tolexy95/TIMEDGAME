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
  overAllScore,
  bravoVideo,
  tryAgainVideo, // Reference to the overall score element
} from "./Word.js";
let interval = null; // Timer interval
let secondsCount = 0; // Count of seconds
let randomWord = ""; // Randomly selected word
let randomHint = ""; // Hint corresponding to the random word
let winCount = 0; // Count of correctly guessed letters
let lossCount = 0; // Count of remaining chances
let score = 0; // Current score
let totalScore = 0; // Overall score
let motivationalURL = "https://api.adviceslip.com/advice"; // URL for motivational advice API

const generateMotivationalWords = async () => {
  try {
    const response = await fetch(motivationalURL); // Fetch advice from the API
    let responseJSON = await response.json(); // Parse the response as JSON
    adviceTextRandom.innerText = `"${responseJSON.slip.advice}"`; // Display the advice in the UI
  } catch (error) {
    console.log(error);
  }
};
export const toggleContainer = () => {
  startContainer.style.display = "none"; // Hide start container
  gameContainer.style.display = "grid"; // Show game container
  restartBtn.style.display = "none"; // Hide restart button
  overAllScore.style.display = "none"; // Hide overall score
  bravoVideo.style.display = "none"; // Hide bravoVideo score
  tryAgainVideo.style.display = "none"; // Hide tryAgainVideo score
};

export const generateRandomValue = (array) => Math.floor(Math.random() * array.length); // Generate a random value within the range of the array length

export const generateWord = () => {
  userInputSection.innerText = ""; // Clear the user input section
  randomWord = words[generateRandomValue(words)]; // Select a random word from the words array
  randomHint = options[randomWord]; // Get the hint for the random word from the options object
  hintRef.innerHTML = `<div id="wordHint"><span>Hint:</span> ${randomHint}</div>`; // Display the hint in the UI
  let displayItem = "";
  randomWord.split("").forEach((value) => {
    displayItem += `<span class = "inputSpace">_</span>`; // Display each letter of the word as a placeholder in the UI
  });
  userInputSection.innerHTML = displayItem; // Update the user input section with the placeholders
};

export const chanceLeft = () => {
  userInputSection.innerHTML += `<div id = "chanceCount">Chances Left: ${lossCount}</div>`; // Display the remaining chances in the UI
};

export const createLetterButtons = () => {
  for (let i = 65; i < 91; i++) {
    let buttonKeys = document.createElement("button"); // Create a button element

    buttonKeys.classList.add("letters"); // Add the "letters" class to the button

    buttonKeys.innerText = String.fromCharCode(i); // Set the button text to the corresponding letter

    buttonKeys.addEventListener("click", () => {
      handleLetterInput(buttonKeys.innerText.toUpperCase()); // Add a click event listener to the button and call handleLetterInput function with the uppercase letter as an argument
    });
    letterContainer.appendChild(buttonKeys); // Append the button to the letterContainer element
  }
};

export const updateIntervalTime = () => {
  secondsHand.textContent = secondsCount.toString().padStart(2, "0"); // Update the seconds display in the UI
};

export const init = () => {
  winCount = 0; // Reset the count of correctly guessed letters
  lossCount = 5; // Reset the count of remaining chances
  word.innerText = ""; // Clear the word display
  letterContainer.innerHTML = ""; // Clear the letter container
  message.innerText = ""; // Clear the message
  secondsCount = 40; // Set the seconds count to initial value
  createLetterButtons(); // Create the letter buttons in the UI
  updateIntervalTime(); // Update the interval time display
};

export const startTimer = () => {
  interval = setInterval(() => {
    secondsCount--; // Decrease the seconds count
    updateIntervalTime(); // Update the interval time display

    if (secondsCount === 0 || lossCount === 0) {
      stopTimer(); // Stop the timer
      stopGame(); // Stop the game

      if (secondsCount === 0) {
        resultText.innerHTML = "Game Over"; // Display game over message
        word.innerHTML = `The word was: <span>${randomWord}</span>`; // Display the correct word
      } else if (lossCount === 0) {
        word.innerHTML = `The word was: <span>${randomWord}</span>`; // Display the correct word
        resultText.innerHTML = "Game Over"; // Display game over message
      } else {
        message.innerHTML = "You Won"; // Display you won message
        score += 10; // Increase the score
        updateScore(); // Update the score display
        startBtn.innerText = "Continue"; // Change the start button text
        hintRef.innerHTML = ""; // Clear the hint display
        init(); // Reset the game
      }
      loseVideo();
      restartBtn.innerText = "Restart"; // Change the restart button text
      handleTotalScore(); // Update the total score
      generateMotivationalWords(); // Generate motivational words
    } else if (winCount === randomWord.length) {
      stopTimer(); // Stop the timer
      
      message.innerHTML = "You Won"; // Display you won message
      score += 10; // Increase the score
      updateScore(); // Update the score display
      startBtn.innerText = "Continue"; // Change the start button text
      hintRef.innerHTML = ""; // Clear the hint display
      startBtn.disabled = false; // Enable the start button
      winVideo();
      init(); // Reset the game
    }
  }, 1000); // Update the timer every 1 second
};
 export const winVideo = () => {
  bravoVideo.style.display ="grid";
  bravoVideo.autoplay =true;
      bravoVideo.pause();
      bravoVideo.currentTime = 0;
      bravoVideo.play();
      bravoVideo.muted =false;
}

export const loseVideo = () => {
 tryAgainVideo.style.display ="grid";
 tryAgainVideo.autoplay =true;
     tryAgainVideo.pause();
     tryAgainVideo.currentTime = 0;
     tryAgainVideo.play();
     tryAgainVideo.muted =false;
}

export const stopTimer = () => {
  clearInterval(interval); // Clear the timer interval
  interval = null; // Set the interval to null
};

export const stopGame = () => {
  gameWrapper.style.display = "none"; // Hide the game wrapper
  controls.style.display = "grid"; // Show the controls
  restartBtn.style.display = "grid"; // Show the restart button
  overAllScore.style.display = "grid"; // Show the overall score
  overAllScore.innerHTML = ""; // Clear the overall score display
};

export const updateScore = () => {
  scoreText.innerHTML = `Score: ${score}`; // Update the score display
};

export const handleTotalScore = () => {
  totalScore = score; // Update the total score based on the current score
  overAllScore.innerHTML = `Total Score: ${totalScore}`; // Display the total score
};

export const handleLetterInput = (char) => {
  if (interval && lossCount > 0 && winCount < randomWord.length) {
    message.innerText = `Correct letter`; // Display correct letter message
    message.style.color = "#008000"; // Set message color to green
    let charArray = randomWord.toUpperCase().split(""); // Convert the random word to uppercase and split into an array
    let inputSpace = document.getElementsByClassName("inputSpace"); // Get all the input spaces in the UI

    if (charArray.includes(char)) {
      const alreadyGuessed = Array.from(inputSpace).some(
        (space) => space.innerText === char
      ); // Check if the letter was already guessed

      if (alreadyGuessed) {
        message.innerText = `Letter already guessed`; // Display letter already guessed message
        message.style.color = "#000000"; // Set message color to black
      } else {
        charArray.forEach((letter, index) => {
          if (letter === char) {
            inputSpace[index].innerText = letter; // Display the correctly guessed letter in the UI
            winCount += 1; // Increase the count of correctly guessed letters
          }
        });
      }
    } else {
      lossCount -= 1; // Decrease the count of remaining chances
      document.getElementById(
        "chanceCount"
      ).innerText = `Chances Left: ${lossCount}`; // Update the remaining chances display
      message.innerText = `Incorrect Letter`; // Display incorrect letter message
      message.style.color = "#ff0000"; // Set message color to red
    }
  }
};

restartBtn.addEventListener("click", () => {
  controls.style.display = "none"; // Hide the controls
  gameWrapper.style.display = "grid"; // Show the game wrapper
  startBtn.innerText = "Play"; // Change the start button text
  startBtn.disabled = false; // Enable the start button
  hintRef.innerHTML = ""; // Clear the hint display
  userInputSection.innerHTML = ""; // Clear the user input section
  tryAgainVideo.style.display ="none";
  score = 0; // Reset the score
  init(); // Reset the game
  chanceLeft(); // Display the remaining chances
  updateScore(); // Update the score display
  stopTimer(); // Stop the timer
});
