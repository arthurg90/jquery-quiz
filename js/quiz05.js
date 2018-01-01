
//When a user clicks on one of the links, you should update the `#output` element to say the name of the chosen link. Use event delegation to make it totes efficient.


$($ => {

    let link = $("#links");
    let output = $("#output")
    link.on("click", "a", function (event) {
    	event.preventDefault();
    	let a = $(this);
    	let fn = a.text();     
		output.text(fn);

    });
});



