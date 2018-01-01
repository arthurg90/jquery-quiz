
//Create a page with a button that says "Catch Me!". When you click the button, it should move down the page by 50 pixels.

// Remember the jQuery method .position() will give you back an object with the top and left position of the element:
// let el = $("#some-id");

// el.position().top; // the top of the element
// el.position().left; // the left of the element

// Also, don't forget to add the "px" to css properties:

// let left = 40;

// el.css({
//     left: left + "px",
// });



$($ => {

	let button = $("#button");

    let left = 40;
    let top = 50;

 
    button.on("click", function () {
        let position1 = button.position().top;
        
        button.css({
           position: "absolute", 
           top: position1 + 50 + "px",
        });
    });

});

  

