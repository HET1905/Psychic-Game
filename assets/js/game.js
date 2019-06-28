{
    /* <p>Win : <span id="txtWin"></span></p>
    <p>Loose : <span id="txtLoose"></span></p>
    <p>Guesses Left : <span id="txtGuess"></span></p>
    <p>Your guess so far : <span id="txtAllGuess"></span></p> */
}

var txtWin = document.getElementById("txtWin");
var txtLoose = document.getElementById("txtLoose");
var txtGuessLeft = document.getElementById("txtGuessLeft");
var txtAllGuess = document.getElementById("txtAllGuess");

var win = 0;
var loose = 0;
var guessLeft = 9;
var allGuess = [];

// a to z : 97-122
function getRandomChar() {
    min = 97;
    max = 123;
    return String.fromCharCode(Math.floor(Math.random() * (max - min)) + min); //The maximum is exclusive and the minimum is inclusive
}
var compGuess = getRandomChar();
//alert("Comp : " + compGuess);


txtGuessLeft.textContent = guessLeft;

document.onkeyup = function (event) {
    if (((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123))){

    
    if (event.key.toLowerCase() === compGuess) {
        win = win + 1;
        txtWin.textContent = win;
        guessLeft = 9;
        txtGuessLeft.textContent =guessLeft;
        allGuess=[];
        txtAllGuess.textContent="";
    } else {

        guessLeft = guessLeft - 1;
        txtGuessLeft.textContent = guessLeft;
        allGuess.push(event.key);
        txtAllGuess.textContent = allGuess.toString();
        if (guessLeft == 0) {
            guessLeft = 9;
            txtGuessLeft.textContent = guessLeft;
            loose = loose + 1;
            txtLoose.textContent = loose;
            allGuess=[];
            txtAllGuess.textContent="";
        }

    }
    }
    else{
        alert("only Charactes allowed !!!");
    }
}