var SLOGANS = ["Always get there on time.","Get to where you need to be.","Forget the sorry's. Always get there on time.","You can't always rely on public transport. But you can rely on this.","Public transport can suck. Luckily, you've got this app."];

/**
* Returns a random slogan from the given list
**/
function getSlogan() {
	return SLOGANS[getRandomInt(0,SLOGANS.length - 1)];
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
	// Runs when the page is loaded
	document.getElementById("slogan").innerHTML = getSlogan();
});