/*
	1. Create an empty array variable named 'playersGuesses'
	2. Push Each Players Guess to that array, each event.key by the user, even if it is a wrong key
	3. Use slice to log only the last 10 guesses in the array
	   For this slice, you will using the length of the array and the length of the array - 10
	   Log it to test it
	4. Create a html element that will store these players guesses
	5. If the amount of players guesses is less than 10, append the whole array to the dom
	6. If the amount of players guesses is greater than 10, append only the last 10 guesses to the dom
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
		} else if (e.key === "r" && randomComputerGuess === "s"){
			wins++;
			document.getElementById("wins_count").innerText = wins;
		} else if (e.key === "r" && randomComputerGuess === "r"){
			ties++;
			document.getElementById("ties_count").innerText = ties;		
		} else if (e.key === "s" && randomComputerGuess === "s"){
			ties++;
			document.getElementById("ties_count").innerText = ties;				
		} else if (e.key === "s" && randomComputerGuess === "p"){
			wins++;
			document.getElementById("wins_count").innerText = wins;	
		} else if (e.key === "s" && randomComputerGuess === "r"){
			losses++;
			document.getElementById("losses_count").innerText = losses;
		} else if (e.key === "p" && randomComputerGuess === "s"){
			losses++;
			document.getElementById("losses_count").innerText = losses;
		} else if (e.key === "p" && randomComputerGuess === "r"){
			wins++;
			document.getElementById("wins_count").innerText = wins;
		} else if (e.key === "p" && randomComputerGuess === "p"){
			ties++;
			document.getElementById("ties_count").innerText = ties;	
		}
	} else {
		alert("The only keypress options are r, p, or s")
	}
});