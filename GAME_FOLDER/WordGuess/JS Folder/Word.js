export const options = {
  // Define the word options and their corresponding hints.
  aroma: "Pleasing smell",
  halt: "put a stop to",
  jump: "Rise suddenly",
  chaos: "Total disorder",
  disturb: "Interrupt; upset",
  machine: "Device or appliance",
  ambiguous: "Able to be understood in more than one way",
  empirical: "Based on testing or experience",
  yield: "To produce or surrender",
  succumb: "Stop trying to resist",
  unique: "Connected with only one thing",
  fake: "Not real or true",
  vague: "Not clear in meaning",
  feeble: "Very weak",
  lopsided: "uneven or unequal",
  swift: "Done quickly or immediately",
  overlook: "Fail to see or notice",
  subtle: "Hard to notice or see",
  condone: "Forgive or approve",
  remedy: "solve or correct a problem",
  praise: "say something good about",
  novice: " A newbie",
  Mar: "Damage something good",
  blemish: "Not perfect or less beautiful",
  mediocre: "Not very good at something",
  benign: "Not causing harm or danger",
  imitate: "copy someone or something",
  trifling: "little value or importance",
  acrimony: "Anger and bitterness",
  virtue: "Good and moral quality",
  flip: "Cause to turn over quickly",
  nullify: "To lost value or have no effect",
  mask: "Hide from sight",
  meticulous: "careful about doing things",
  unfounded: "Not based on facts or proof",
  Symphony: "Elaborate musical composition typically performed by an orchestra",
  Eloquent: "Expressing oneself fluently and persuasively",
  Enigma: "Mysterious or puzzling person, thing, or situation",
  Serendipity: "Pleasant surprise or fortunate discovery by chance",
  Intricate: "Complex or detailed in design or structure",
  Quixotic: "Idealistic but impractical or unrealistic",
  Cascade:
    "A small waterfall or a series of stages or processes flowing downwards",
  Nebulous: "Unclear, hazy, or vague",
  Zenith: "The highest point or peak of something",
  Resilient: "Able to recover quickly from difficulties or setbacks",
};

// Initial References
export const message = document.getElementById("message");
export const hintRef = document.querySelector(".hint-ref");
export const controls = document.querySelector(".controls-container");
export const startBtn = document.getElementById("start");
export const letterContainer = document.getElementById("letter-container");
export const userInputSection = document.getElementById("user-input-section");
export const resultText = document.getElementById("result");
export const scoreText = document.getElementById("score");
export const word = document.getElementById("word");
export const words = Object.keys(options);
export const secondsHand = document.querySelector(".timer__part--second");
export const instructions = document.getElementById("instructions");
export const instructContainer = document.querySelector(".InstructWord");
export const startContainer = document.querySelector(".outerControl");
export const playGame = document.querySelector(".playGame");
export const gameContainer = document.querySelector(".game-container");
export const gameWrapper = document.querySelector(".wrapper");
export const restartBtn = document.getElementById("restart");
export const timerDiv = document.querySelector(".timer");
export const overAllScore = document.getElementById("totalScore");
export const bravoVideo = document.getElementById("bravoVideo");
export const tryAgainVideo = document.getElementById("trialVideo");
