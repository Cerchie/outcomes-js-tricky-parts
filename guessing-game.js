function guessingGame(num) {
    let isOver = false;
let targ = Math.floor(Math.random()* 100);
let guessCount = 0;
    function guess(num){
        if (isOver) return "The game is over, you already won!";
        guessCount++;
        if (num === targ){
            isOver = true;
            return `You win! You found ${targ} in ${guessCount} guesses.`
        }
        if (num < targ){
            return `${num} is too low!`
        }
        if (num > targ){
            return `${num} is too high!`
        }
    }
return guess;
}

module.exports = { guessingGame };

// Write a function called guessingGame which returns 
// a function that allows you to guess a random whole 
// number between 0 and 99. Every time you create a new game,
//  it should select a new random number, and keep it secret 
//  from the player.

// Once the game has started, you can guess the number. 
// The game should tell you whether your guess is too high,
//  too low, or correct.

// After a correct guess, the game ends.