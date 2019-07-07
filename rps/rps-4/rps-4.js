/*
	1. Write a conditional comparing the users keypress to the computers randomized value
	   Write it as if you were playing rocks, paper, scissors
	   i.e. rocks beat scissors, paper beats rock, you get it
	   There will be an && in this conditional
	   Keep pressing the button you choose in the conditional until the conditional is met
	   i.e. if the conditional is saying that you pressed r, keep pressing r until the conditional is met
	   once the conditional is met, log it
	2. Append your guess to the appropriate place on the dom when the conditional is met
	3. Append the computers guess to the appropriate place on the dom when the conditional is met
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
	
	if(e.key === "r" || e.key === "p" || e.key === "s"){

	} else {
		alert("The only keypress options are r, p, or s")
	}
});