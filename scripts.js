/**
 * var names = document.querySelector(".item18")
console.log(names);
console.log(names.innerText);



names.addEventListener("click", () => {
    total++
    console.log(total)
} );

var total = 1;

function dog()
 */

//to get the entire display, use the ID
let display = document.getElementById('item1');

//to get get all of the buttons. Converted the list into an array for easier function
let buttons = Array.from(document.getElementsByClassName('button'));

//using the addEventListener that the instructor showed in a previous example
//this provides mapping through the array and applies click to every button in the array
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            //add the clear function to the C in the calculator. break line required to do clear and not inputting the letter "C"
            case 'C':
                display.innerText = '';
                break;
            //adding the functionality to the equal sign to process the calculations
            //the break statement is needed in order to not display the equal sign after the calculation is processed
            case '=':
                display.innerText = eval(display.innerText);
                break;
            //default I want to add the inner text of the button to the innter text of display => see line 19
           default:
               display.innerText += e.target.innerText; 
        }
    });
});


 
