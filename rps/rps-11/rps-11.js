document.getElementById("game-div").style.display = "none";

var wins = 0;
var losses = 0;
var ties = 0;

var playersGuesses = [];

var computerGuessOptions = ["r", "p", "s"];
var randomComputerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];

var usersWins = document.getElementById("wins_count");
var usersLosses = document.getElementById("losses_count");
var usersTies = document.getElementById("ties_count");

usersWins.innerText = wins;
usersLosses.innerText = losses;
usersTies.innerText = ties;

document.getElementById("start-game-button").onclick = function(){
	document.getElementById("start-game-button").style.display = "none";
	document.getElementById("game-div").style.display = "contents";
}

document.addEventListener('keydown', function(e) {

	randomComputerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];
	
	var userGuess = e.key;

	document.getElementById("my_guess").innerText = userGuess;
	document.getElementById("computer_Guess").innerText = randomComputerGuess;

	playersGuesses.push(userGuess);

	console.log(playersGuesses);

	if(playersGuesses.length > 10){
		document.getElementById("players_guesses").innerText = playersGuesses.slice(playersGuesses.length - 10, playersGuesses.length);
	} else {
		document.getElementById("players_guesses").innerText = playersGuesses;
	}

	if(userGuess === "r" || userGuess === "p" || userGuess === "s"){
		if(userGuess === "r" && randomComputerGuess === "p"){
			losses++;
			usersLosses.innerText = losses;
		} else if (userGuess === "r" && randomComputerGuess === "s"){
			wins++;
			usersWins.innerText = wins;
		} else if (userGuess === "r" && randomComputerGuess === "r"){
			ties++;
			usersTies.innerText = ties;		
		} else if (userGuess === "s" && randomComputerGuess === "s"){
			ties++;
			usersTies.innerText = ties;				
		} else if (userGuess === "s" && randomComputerGuess === "p"){
			wins++;
			usersWins.innerText = wins;	
		} else if (userGuess === "s" && randomComputerGuess === "r"){
			losses++;
			usersLosses.innerText = losses;
		} else if (userGuess === "p" && randomComputerGuess === "s"){
			losses++;
			usersLosses.innerText = losses;
		} else if (userGuess === "p" && randomComputerGuess === "r"){
			wins++;
			usersWins.innerText = wins;
		} else if (userGuess === "p" && randomComputerGuess === "p"){
			ties++;
			usersTies.innerText = ties;	
		}
	} else {
		alert("The only keypress options are r, p, or s")
	}
});