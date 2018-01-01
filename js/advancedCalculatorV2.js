// Boilerplate for writing javascript/jquery

// 1. Make sure the .js file is linked with the html & css:
// 	- Check browser
//  - console.log("Hello");
// 2. Write out the problem in plain english
// 3. Declare your variables (think about naming the arguments and values - what do they take and what they return - array/string/number/boolean)
// 4. Write out the structure/Boilerplate of the problem
// 5. Is it a loop? conditional? event?



//Create a mini calculator. It should have two text inputs and four buttons: +, -, ×, /. When you click one of the buttons it should do the correct mathematical operation using the two values from the text inputs (e.g. if + is pressed, it should add the two values together). Output the answer in a <p> tag below.
//Use a single click event handler*

//2x inputs, 4 buttons - will need event targeting
//order of execution - inputOne, inputTwo, 1 of the 4 buttons => on click - outputs a <p> at the end




//Event Handler:

$($ => {

	let functions = $("#functions");
	let input1 = $("#inputOne");
	let input2 = $("#inputTwo");
	let answer = $("#answer");

	functions.on("click", "button", function () {		
		let button = $(this);	
		let val1 = +input1.val();
		let val2 = +input2.val();

		let fn = button.text();

		switch (fn) {
			case "+": result = val1 + val2; break;
			case "-": result = val1 - val2; break; 
			case "*": result = val1 * val2; break; 
			case "/": result = val1 / val2; break; 
		}

		answer.text(result);
		
		

	});

});


/*

            let fns = {
                "+": (a, b) => a + b,
                "-": (a, b) => a - b,
                "÷": (a, b) => a / b,
                "×": (a, b) => a * b,
                "%": (a, b) => a % b,
            };

            let functions = $("#functions");
            let input1 = $("#value-1");
            let input2 = $("#value-2");
            let answer = $("#answer");

            Object.keys(fns).forEach(key => {
                let button = $("<button />");
                button.text(key);
                functions.append(button);
            })

            functions.on("click", "button", function () {
                let button = $(this);
                let fn = button.text(); 

                let result = fns[fn](+input1.val(), +input2.val());

                answer.text(result);
            });
*/