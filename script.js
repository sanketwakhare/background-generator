var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

window.onload = function () {
	setGradient();
	var random1 = document.querySelector(".random1");
	random1.addEventListener("click", generateRandomColors);
	color1.addEventListener("input", setGradient);
	color2.addEventListener("input", setGradient);
}

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
};

function getRandomNumber() {
	var max = 255;
	var min = 0;
	var col = Math.random() * (max - min) + min;
	return Math.floor(col);
}

function generateRandomColors() {
	var r1 = getRandomNumber();
	var g1 = getRandomNumber();
	var b1 = getRandomNumber();
	color1.value = fullColorHex(r1, g1, b1);

	var r2 = getRandomNumber();
	var g2 = getRandomNumber();
	var b2 = getRandomNumber();
	color2.value = fullColorHex(r2, g2, b2);

	setGradient();
};


var rgbToHex = function (rgb) {
	var hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex;
	}
	return hex;
};

var fullColorHex = function (r, g, b) {
	var red = rgbToHex(r);
	var green = rgbToHex(g);
	var blue = rgbToHex(b);
	return "#" + red + green + blue;
};


