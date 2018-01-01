/*Create a page with a `<div>` on it, that is 200px &times; 200px. It should have a black border and its background colour should be white. When you click on it, it should cycle background colour through the following list:


            #C14412
            #EBB31A
            #8F5318
            #009EAD
            #395967 
use Array

*/


$($ => {
	let box = $(".box");

    let colArray = [
        "#C14412",
        "#EBB31A",
        "#8F5318",
        "#009EAD",
        "#395967"
        ];
	
    let count = 0;

    box.on("click", function () {
        let colour = colArray[count];

        box.css({background: colour});

        count = (count + 1) % colArray.length;
    });

});
