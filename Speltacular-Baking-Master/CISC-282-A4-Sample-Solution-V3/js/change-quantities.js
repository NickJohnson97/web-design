/******************************************************************************/
/* Helper Functions */
/******************************************************************************/
function getHTMLFractionForDecimal(decimalValue) {
	let htmlFraction = '';
	let fractionValue = decimalValue % 1;
	
	if (fractionValue == 0.25) {
		htmlFraction = "&frac14;";
	}
	else if (fractionValue == 0.5) {
		htmlFraction = "&half;";		
	}
	else if (fractionValue == 0.75) {
		htmlFraction = "&frac34;";
	}
	
	return htmlFraction;
}

function getHTMLWholeNumberForDecimal(decimalValue) {
	let wholeValue = Math.floor(decimalValue);
	let htmlWholeNumber = '';
	
	if (wholeValue) {
		htmlWholeNumber += wholeValue;
	}
	
	return htmlWholeNumber;
}


/******************************************************************************/
/* JS Solution */
/******************************************************************************/
/*
function changeIngredientQuantities(multiplier) {
	let htmlFraction = '';
	let htmlWholeNumber = '';
	let ingredientQuantity = 0;
	let ingredientSpanArray = document.getElementsByClassName("quantity");
	
	// Go through each element with 'quantity' as a class
	for (let i = 0; i < ingredientSpanArray.length; i++) {
		// Get the value for each quantity and multiply it
		ingredientQuantity = ingredientSpanArray[i].getAttribute("value");		
		ingredientQuantity *= multiplier;
		
		// Get the whole and fraction representations for the quantity
		htmlFraction = getHTMLFractionForDecimal(ingredientQuantity);
		htmlWholeNumber = getHTMLWholeNumberForDecimal(ingredientQuantity);
		
		// Set the inner text for the span to the HTML
		ingredientSpanArray[i].innerHTML = htmlWholeNumber + htmlFraction;				
	}
}

window.addEventListener("load", function() {
	let quantityButtonArray = document.getElementsByClassName("quantity-button");
	
	// Go through each element with 'quantity-button' as a class 
	for (let i = 0; i < quantityButtonArray.length; i++) {
		// Get the value for the quantity; check that one is defined
		let multiplier = quantityButtonArray[i].getAttribute("value");
		if (multiplier) {
			// Add a click event listener to the button and call the
			// changeIngredientQuantities function with the multiplier
			quantityButtonArray[i].addEventListener("click", function() {
				changeIngredientQuantities(multiplier);
			});
		}
	}
});
*/


/******************************************************************************/
/* jQuery Solution */
/******************************************************************************/
function changeIngredientQuantities(multiplier) {
	let htmlFraction = '';
	let htmlWholeNumber = '';
	let ingredientQuantity = 0;

	// Go through each element with 'quantity' as a class
	$(".quantity").each(function() {
		// Get the value for each quantity and multiply it
		ingredientQuantity = $(this).attr("value");		
		ingredientQuantity *= multiplier;
			
		// Get the whole and fraction representations for the quantity
		htmlFraction = getHTMLFractionForDecimal(ingredientQuantity);
		htmlWholeNumber = getHTMLWholeNumberForDecimal(ingredientQuantity);
			
		// Set the inner text for the span to the HTML
		$(this).html(htmlWholeNumber + htmlFraction);				
	});
}

$(document).ready(function() {
	// Go through each element with 'quantity-button' as a class 
	$(".quantity-button").each(function() {
		// Get the value for the quantity; check that one is defined
		let multiplier =  $(this).attr("value");
		if (multiplier) {
			// Add a click event listener to the button and call the
			// changeIngredientQuantities function with the multiplier
			$(this).click(function() {
				changeIngredientQuantities(multiplier);
			});
		}
	});
});

