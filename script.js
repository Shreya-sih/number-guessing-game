let min = 1;
let max = 100;
let correctNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');
const winSound = document.getElementById('winSound');

guessBtn.addEventListener('click', makeGuess);

restartBtn.addEventListener('click', restartGame);

function makeGuess() {
  let userGuess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(userGuess) || userGuess < min || userGuess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'lose');
    setMessage(`❗ Enter a number between ${min} and ${max}`, 'lose');
  } else if (userGuess === correctNumber) {
    // Play sound and display congratulations
    winSound.play();
    setMessage(`Congratulations! You guessed the correct number ${correctNumber}.`, 'win');
    setMessage(`🎉 Congratulations! You guessed it right: ${correctNumber}`, 'win');
    gameOver();
  } else if (userGuess < correctNumber) {
    setMessage('Too low! Try again.', 'lose');
  } else if (userGuess > correctNumber) {
    setMessage('Too high! Try again.', 'lose');
    setMessage('📉 Too low! Try again.', 'lose');
  } else {
    setMessage('📈 Too high! Try again.', 'lose');
  }

  attemptsDisplay.innerHTML = `Attempts: ${attempts}`;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
}

function setMessage(msg, status) {
  message.textContent = msg;
  if (status === 'win') {
    message.classList.remove('lose');
    message.classList.add('win');
  } else {
    message.classList.remove('win');
    message.classList.add('lose');
  }
  message.className = status;
}

function gameOver() {
@@ -55,16 +47,17 @@
function restartGame() {
  correctNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  attempts = 0;
  setMessage('', '');
  attemptsDisplay.innerHTML = `Attempts: ${attempts}`;
  guessInput.disabled = false;
  guessBtn.disabled = false;
  restartBtn.classList.add('hidden');
  message.textContent = '';
  message.className = '';
  guessInput.value = '';
  attemptsDisplay.textContent = 'Attempts: 0';
  restartBtn.classList.add('hidden');
}
