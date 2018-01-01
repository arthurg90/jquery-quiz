
//Create a page with a list of animals. When you click on one of the animal names, it should be moved to the top of the list. Bonus points for interesting animals.
//move items up and down the list



$($ => {

	let list = $("#list")

        list.on("click", "li", function () {
            let li = $(this);
            list.prepend(li);
        });

});

  






