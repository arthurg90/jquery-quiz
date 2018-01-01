
//Create a page with an `<input type="number">` and a button on it. When the button is clicked, the total of all previously entered numbers should be displayed.
//on click take the input value, store it in a variable, take another input value , add it to the variable, clear the input field each time, display total every time



$($ => {

    let add = $("#add");            //make the button a jquery element
    let input = $("#usr")           //input jquery element to pull the item info from
    let answer = $("#answer")
    let total = 0;

    add.on("click", () => {
        let inputVal = +input.val();   //takes the input value from the input field(the + makes it a number)
        total += inputVal;
        answer.text(total);

       
    });

});






