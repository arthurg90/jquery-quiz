// The following code will run as close to 60 times per second as possible. We can use this to animate things smoothly (at 60 frames per second). This is an example of an infinite loop that's actually very useful.
// Use the code above, along with jQuery, to make the image in `animate.html` bounce horizontally across the screen.
//Animation start position would be left 0 end position would be left 1000


$($ => {

	let cat = $("#block");
	let width = $("#canvas").width() - cat.width();

	let left = 0; // keep track of left position
	let velocity = 12;  // keep track of speed

	let loop = time => {
		// add velocity to left
        // will go down if velocity is negative
	    left += velocity;
	    
	    cat.css("left", left);
        
        // if left goes over width or under 0 reverse direction

	     if (left > width || left < 0) {
	                velocity *= -1;
	            }

	// run the loop again
	    requestAnimationFrame(loop);
	};

	loop(0);


});

