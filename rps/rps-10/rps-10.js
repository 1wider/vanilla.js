/*
	1. Last Challenge, this will be fun.
	2. Create a button on the dom with text saying "START GAME" and give it an id of start-game-button
	3. - All of the information besides the h1 tag should be hidden
	   - This will go in the global scope, top line
	   - That means you have to move all of the information besides the h1 & the button
	     inside a div, and then hide that div. Give the div an id of "game-div"
	   - To do that, you will use 'document.getElementById("game-div").style.display = "none"' in the global scope
	   - Look at that syntax, you're using the css display in javascript to hide the div
	4. - Once the button is clicked, you will hide the start button, and show the game
	   - To hide the button, you will use 'document.getElementById("game-div").style.display = "none"'
	   - To display the game, you will use 'document.getElementById("game-div").style.display = "all"'
	   - Remember to create an on click event function on the button, and put both of these calls
	     inside of that onclick function

*/

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