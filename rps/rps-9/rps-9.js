/*
	1. Store e.key in variable and replace it throughout the code
	2. Store all of the calls to the dom for wins, losses & ties in variables and replace them throughout the dom
	   Should read like usersWins.innerText
*/

var wins = 0;
var losses = 0;
var ties = 0;

var playersGuesses = [];

var computerGuessOptions = ["r", "p", "s"];
var randomComputerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];

document.getElementById("wins_count").innerText = wins;
document.getElementById("losses_count").innerText = losses;
document.getElementById("ties_count").innerText = ties;

document.addEventListener('keydown', function(e) {
	randomComputerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];
	
	document.getElementById("my_guess").innerText = e.key;
	document.getElementById("computer_Guess").innerText = randomComputerGuess;

	playersGuesses.push(e.key);

	console.log(playersGuesses);

	if(playersGuesses.length > 10){
		document.getElementById("players_guesses").innerText = playersGuesses.slice(playersGuesses.length - 10, playersGuesses.length);
	} else {
		document.getElementById("players_guesses").innerText = playersGuesses;
	}

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