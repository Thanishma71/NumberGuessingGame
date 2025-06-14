let secretNumber;
let attemptsLeft;
let totalAttempts;

function showGame() {
  document.getElementById("tribute").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  resetGame();
}

function checkGuess() {
  const input = document.getElementById("guessInput");
  const userGuess = Number(input.value);
  const feedback = document.getElementById("feedback");
  const attempts = document.getElementById("attempts");

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  totalAttempts++;
  attemptsLeft--;
  input.value = ""; // Immediately clear input
  attempts.textContent = `Attempts left: ${attemptsLeft}`;

  if (userGuess === secretNumber) {
    feedback.innerHTML = `🎉 You won in <strong>${totalAttempts}</strong> attempts!`;
    endGame();
  } else if (attemptsLeft === 0) {
    feedback.innerHTML = `😢 Game Over! The number was ${secretNumber}.`;
    endGame();
  } else {
    feedback.textContent =
      userGuess > secretNumber ? "📉 Too high!" : "📈 Too low!";
  }
}

function endGame() {
  document.getElementById("guessInput").disabled = true;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  totalAttempts = 0;
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "Attempts left: 10";
}
