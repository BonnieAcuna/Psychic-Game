//Array of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedNumber = 5;
var winsNumber = 0;
var lossNumber = 0;
var lettersGuessed = [];
var guessLetter = null;
var winningLetter = letters[Math.floor(Math.random() * letters.length)];
//We need code to update the DOM
console.log(winningLetter);

//Loop through the letters
for (var i = 0; i < letters.length; i++) {

};

// function myFunction() {
//     document.getElementById("button").innerHTML = " ";
  
document.onkeyup = function(event) {
    var guessLetter = event.key.toLowerCase(); 


    if (winningLetter === guessLetter) {
        //This means we just won, does the user want to play agin, 
        //if so we need to reset the state back to the beginning of the game
        winsNumber++;
        alert("You Won!");
        var winsEl = document.getElementById('wins');
        winsEl.textContent = "Wins: " + winsNumber;
        // var buttonContainer = document.getElementById("button");
        // buttonContainer.innerHTML = ("<button onclick='myFunction()'>Restart Game</button>");

        //Now we need to  ask the user if they want to play again>
    }
    

    else {
        //subtract a guess
        //check if the user lost
        (guessedNumber === 0) 
        lossNumber++;
        alert("You Lose");
        var lossEl = document.getElementById('loss');
        lossEl.textContent = "Loss: " + lossNumber;
        // var buttonContainer = document.getElementById("button");
        // buttonContainer.innerHTML = ("<button onclick='myFunction()'>Restart Game</button>");

  
    }


}
    ("guesses").textContent = ("Letter Guesses: " + letters.join(" , "));
    ("guess-number").textContent = ("Number of Guesses: " + guessedNumber);













































 