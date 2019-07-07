/*
	1. Create an array that has 3 separate values: "r", "p", & "s" & store it in a variable
	2. Create a variable that stores a random string for that array
	3. Create an onkeypress function
	4. Console.log the randomized value every time a key is pressed
	5. 5. Make sure the value is changed each time. You have to re-assign the random computer guess value
*/

var wins = 0;
var losses = 0;
var ties = 0;

document.getElementById("wins_count").innerText = wins;
document.getElementById("losses_count").innerText = losses;
document.getElementById("ties_count").innerText = ties;