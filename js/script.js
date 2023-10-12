"use strict";
const menu = document.getElementById('menu')
let burgerVis = 0;

function burgerm() {
	if (burgerVis == 0) {
		menu.style = "display:block";
		burgerVis = 1;
	} else {
		menu.style = "display:none";
		burgerVis = 0;
	}
}