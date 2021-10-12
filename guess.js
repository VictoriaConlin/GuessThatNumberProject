// GUESS THAT NUMBER

// Message to be used throughout the file/project
const enterNumText = `Please enter a number greater than zero`;

// For restarting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

// For storing the Number to be guessed
let randomNum;

// For storing the Number of attempts that the user has left
let attempts;

// For storing the users guess
let guess;

// For storing the users response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// Game restarts as long as restart game has a value of true
while (restartGame){
    // Asks user to enter a number to set the upper bound for the random number that will be created (AKA Number to be guessed).
    rangeNum = prompt(`Please enter a maximum number for the range:`);

    // Using parseInt to attempt to convert the user's response into a number value. (NOTE: If the value cannot be converted then the value returned will be NaN (Not A Number))
    rangeNum = parseInt(rangeNum)

    // Verifies the user's entry for the range number is a number and greater than zero (NaN has a default boolean value of false. Also all numbers positive and negative have a default boolean value of true except for 0 which has a boolean value of false.)
    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum)
    }

    // Creates the random number (AKA Number to be guessed) using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    break;
}

