
//Create an `<input type="password" />` on a new page. If the length of the password is less than 10, the background colour of the input should be red. If the length of the password is between 10 and 18 the background colour should be orange. If the length is more than 18 characters it should go green. The background colour should update as the user is typing. Add some text to let the user know how they're doing.


$($ => {

    let input = $("#input");           //input jquery element to pull the item info from
    let feedback = $("#feedback");
    
    input.on("input", () => {
    	let inputValue = input.val();
    	let passLength = inputValue.length;
    	
        if (passLength <= 10) {
        	feedback.text("Lame!");
        	input.css({
			    background: "red",
			});
        }
        if (passLength > 10 && passLength <= 18) {
        	feedback.text("Okay!");
        	input.css({
			    background: "orange",
			});
        }
        if (passLength > 18) {
        	 feedback.text("Awesome!");
        	 input.css({
			    background: "green",
			});
        }	
    });

});






