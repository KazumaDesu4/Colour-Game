const colour = ["#FF0000", "#0000FF", "#FFFFF00", "#00FF00", "#800080", "#FFA500", "#A52A2A", "#808080"];

function random_colour() {
  return colour[Math.floor(Math.random()*colour.length)];
}

function changeColour(colour) {
	document.getElementById("colourText").innerHTML = (random_colour(colour));
}

function resetWin() {
	document.getElementById("text").innerHTML = "";
}

function compare(myColour) {
	if (document.getElementById("colourText").innerHTML == myColour) {
		document.getElementById("text").innerHTML = "You won";
	}
		
	else {
		document.getElementById("text").innerHTML = "You lost";
	}
}