

{/* <p>Win : <span id="txtWin"></span></p>
<p>Loose : <span id="txtLoose"></span></p>
<p>Guesses Left : <span id="txtGuess"></span></p>
<p>Your guess so far : <span id="txtAllGuess"></span></p> */}

var txtWin = document.getElementById("txtWin");
var txtLoose = document.getElementById("txtLoose");
var txtGuessLeft = document.getElementById("txtGuessLeft");
var txtAllGuess = document.getElementById("txtAllGuess");

var win = 0;
var txtLoose = 0;
var guessLeft = 9;
var allGuess =[];

txtGuessLeft.textContent = guessLeft;