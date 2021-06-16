var buttons = document.getElementsByClassName("quantity-button");
for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
			console.log(buttons[2].value);
			//console.log(mult);
	});
	
	buttons[0].onclick = function() {
		var mult = 1;
		starterValue.innerHTML = 1 * mult;
		waterValue.innerHTML = "&frac34;";
		yeastValue.innerHTML = "&frac12;";
		speltInt.innerHTML = 2 * mult;
		speltFrac.innerHTML = "&frac12;"
		saltValue.innerHTML = 1 * mult;
	};
	
	buttons[1].onclick = function() {
		var mult = 2;
		starterValue.innerHTML = 1 * mult;
		var water = 3 * mult;
		waterValue.innerHTML = "6&frasl;4";
		yeastValue.innerHTML = 0.5 * mult;
		speltInt.innerHTML = 2 * mult + 1;
		speltFrac.innerHTML = ""
		saltValue.innerHTML = 1 * mult;
	}
	buttons[2].onclick = function() {
		var mult = 3;
		starterValue.innerHTML = 1 * mult;
		waterValue.innerHTML = "9&frasl;4";
		yeastValue.innerHTML = "3&frasl;2";
		speltInt.innerHTML = 2 * mult + 1;
		speltFrac.innerHTML = "&frac12;"
		saltValue.innerHTML = 1 * mult;
	}
};

