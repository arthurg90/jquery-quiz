/*`Math.random()` generates a random number between 0 and 1. If you multiply the result by, say 100, and then use `Math.floor()`, you will get a number between 0 and 99.

Create an HTML page with a `<button>` that says "Roll the Dice!". Whenever it is clicked your page should display two numbers between 1 and 6.*/


$($ => {

	// let random = Math.random(); // a number between 0 and 1
	// let number = Math.floor(random * 100); // a number between 0 and 99

	let button = $("#button");
	let result = $("#result");

	let randumb = function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}

		button.on("click", function () {
			let output = randumb(1, 6);
			let number = Math.floor(output);
			result.text(number);
		});


});

