function guessingGame() {
    const ANSWER = Math.floor(Math.random() * 100);
    let gameOver = false;
    let numOfGuesses = 0;

    return function guess(num) {
        if (gameOver) return "The game is over, you already won!";
        numOfGuesses++;
        if (num === ANSWER) {
            gameOver = true;
            const guess = numOfGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${numOfGuesses} ${guess}.`;
        };
        if (num < ANSWER) return `${num} is too low!`;
        if (num > ANSWER) return `${num} is too high!`;
    };
};

module.exports = { guessingGame };
