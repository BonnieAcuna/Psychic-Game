//Array of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedNumber = 5;
var winsNumber = 0;
var lossNumber = 0;
var lettersGuessed = [];
var guessLetter = null;
var winningLetter = letters[Math.floor(Math.random() * letters.length)];

//Start the Game
document.onkeyup = function (event) {
    var guessLetter = event.key.toLowerCase();
    
//Resets the Game
    var restartGame = function () {
        guessedNumber = 5;
        lettersGuessed = [];
        winningLetter = letters[Math.floor(Math.random() * letters.length)];
    }

//Picks the letters and makes sure it doesn't repeat or use non letters.
    if (letters.indexOf(guessLetter) > -1 && lettersGuessed.indexOf(guessLetter) ===-1) {

//If the winning letter is picked       
        if (winningLetter === guessLetter) {
            winsNumber++;
            alert("You Won!");
            var winsEl = document.getElementById('wins');
            winsEl.textContent = "Wins: " + winsNumber;
            lettersGuessed = [];
            restartGame();

//If the user loses            
        } else if (guessedNumber === 0) {
            lossNumber++;
            alert("You Lose");
            var lossEl = document.getElementById('loss');
            lossEl.textContent = "Loss: " + lossNumber;
            lettersGuessed = [];
            restartGame();

//Shows the number of guesses           
        } else {
            guessedNumber--;
            lettersGuessed.push(guessLetter)
            var numberEl = document.getElementById('guess-number');
            numberEl.textContent = "Numbers Guessed: " + guessedNumber;
            
        }
       

//Shows the letters guessed       
        document.getElementById("guesses").textContent = ("Letter Guesses: " + lettersGuessed.join(" , "));
    }
}













































