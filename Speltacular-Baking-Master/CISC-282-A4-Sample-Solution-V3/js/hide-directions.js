/******************************************************************************/
/* JS Solution */
/******************************************************************************/
/*
window.addEventListener("load", function() {
	// Go through each list item in the directions
	let directionItemArray = document.querySelectorAll(".directions li");	
	for (let i = 0; i < directionItemArray.length; i++) {
		// Prepend the button to the item's content
		directionItemArray[i].innerHTML = '<button class="hide-direction" aria-label="Hide step"><span aria-hidden="true">&#10004;</span></button>' + directionItemArray[i].innerHTML;
	}
	
	// Go through each button in the directions
	let hideDirectionArray = document.querySelectorAll(".directions li .hide-direction");
	for (let i = 0; i < hideDirectionArray.length; i++) {
		// Get the parent item and check it
		let directionItem = hideDirectionArray[i].parentElement;
		if (directionItem) {
			// Add a click event listener to the button that hides the parent
			// item
			hideDirectionArray[i].addEventListener("click", function() {
				directionItem.classList.add("hidden");
			});
		}
	}
});
*/


/******************************************************************************/
/* jQuery Solution */
/******************************************************************************/
$(document).ready(function() {
	// Go through each list item in the directions
	$(".directions li").each(function() {
		// Prepend the button to the item's content
		$(this).prepend('<button class="hide-direction" aria-label="Hide step"><span aria-hidden="true">&#10004;</span></button>');
	});
	
	// Go through each button in the directions
	$(".directions li .hide-direction").each(function() {
		// Get the parent item and check it
		let directionItem = $(this).parent();
		if (directionItem) {
			// Add a click event listener to the button that hides the parent
			// item
			$(this).click(function() {
				directionItem.addClass("hidden");
			});
		}
	});
});
