/*
	1. Move the appending to the dom of your guess and the computer guess outside of the conditional
	2. Inside the conditional, depending on if you won or lost, increment the appropriate result variable: win, loss or tie
	3. Append that incremented number to the appropriate spot in the dom
*/

var wins = 0;
var losses = 0;
var ties = 0;

var computerGuessOptions = ["r", "p", "s"];
var randomComputerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];

document.getElementById("wins_count").innerText = wins;
document.getElementById("losses_count").innerText = losses;
document.getElementById("ties_count").innerText = ties;

document.addEventListener('keydown', function(e) {
	randomComputerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];
	
	document.getElementById("my_guess").innerText = e.key;
	document.getElementById("computer_Guess").innerText = randomComputerGuess;

	if(e.key === "r" || e.key === "p" || e.key === "s"){
		if(e.key === "r" && randomComputerGuess === "p"){
			losses++;
			document.getElementById("losses_count").innerText = losses;
		}
	} else {
		alert("The only keypress options are r, p, or s")
	}
});