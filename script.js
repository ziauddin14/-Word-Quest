let score = 100;
let attempts = 0;
const maxAttempts = 10;
let randomWord = getRandomWord();
console.log(randomWord);
function getRandomWord() {
  const words = [
    "Apple",
    
    "Banana",

    "Orange",

    "Mango",

    "Pineapple",
    
    "Pear",
    
    "Watermelon",
    
    "Peach",
    
    "Cherry",
    
    "Strawberry",
    
    "Blueberry",
    
    "Raspberry",
    
    "Kiwi",
    
    "Papaya",
    
    "Guava",
    
    "Grapes",
    
    "Pomegranate",
  ];
  return words[Math.floor(Math.random() * words.length)];
}

function playGame() {
  const userInput = document.getElementById("user-input").value;
  const result = document.getElementById("result");
  const attemptsDisplay = document.getElementById("attempts");
  const scoreDisplay = document.getElementById("score");
 

  if (userInput === randomWord) {
    result.textContent = "Congratulations! You guessed the correct word!";
    result.style.color = "green";
    scoreDisplay.textContent = score;
  } else {
    attempts++;
    if (attempts <= maxAttempts) {
      score -= 10;
      scoreDisplay.textContent = score;
      attemptsDisplay.textContent = attempts;
      result.textContent = "Incorrect! Try again.";
    }

    if (attempts === maxAttempts) {
      result.textContent = `Game Over! The correct word was "${randomWord}".`;
      result.style.color = "red";
      scoreDisplay.textContent = `Score: 0`;
      attemptsDisplay.textContent = maxAttempts;
    }
  }

  document.getElementById("user-input").value = ""; // Clear the input field
}
