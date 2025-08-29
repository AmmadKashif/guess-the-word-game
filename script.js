document.addEventListener('DOMContentLoaded', () => {
    const word = "HELLO";
    let guessedWord = "_ ".repeat(word.length).trim();
    let attempts = 6;

    const wordDisplay = document.getElementById("wordDisplay");
    const messageDisplay = document.getElementById("message");
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");

    wordDisplay.innerText = guessedWord;

    guessButton.addEventListener('click', () => {
        const guess = guessInput.value.toUpperCase();
        guessInput.value = '';

        if (guess.length === 1 && /^[A-Z]$/.test(guess)) {
            let newGuessedWord = "";
            let correctGuess = false;

            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    newGuessedWord += guess + " ";
                    correctGuess = true;
                } else {
                    newGuessedWord += guessedWord[2 * i] + " ";
                }
            }

            guessedWord = newGuessedWord.trim();
            wordDisplay.innerText = guessedWord;

            if (!correctGuess) {
                attempts--;
                messageDisplay.innerText = `Wrong guess! Attempts left: ${attempts}`;
            } else {
                messageDisplay.innerText = "";
            }

            if (guessedWord.split(" ").join('') === word) {
                messageDisplay.innerText = "Congratulations! You guessed the word!";
                guessButton.disabled = true;
            } else if (attempts === 0) {
                messageDisplay.innerText = `Game Over! The word was: ${word}`;
                guessButton.disabled = true;
            }
        } else {
            messageDisplay.innerText = "Please enter a valid letter.";
        }
    });
});
