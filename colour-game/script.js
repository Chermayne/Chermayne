var numSquares = 6;
var colours = []; // sets the colours
var pickedColour; // colour to match in order to win

var squares = document.getElementsByClassName("square"); // selects each square
var squaresFront = document.getElementsByClassName("square-front");
var squaresBack = document.getElementsByClassName("square-back");
var colourDisplay = document.getElementById("colour-display"); // selects the colour display in the heading
var messageDisplay = document.querySelector("#message"); // displays correct or wrong message
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var selectedButton = document.getElementsByClassName("selected");
var difficultyButtons = document.getElementsByClassName("difficulty");
var squareHover = document.getElementsByClassName("square:hover");

reset();

// *** BUTTONS ***

// difficulty buttons
for(var i = 0; i < difficultyButtons.length; i++){
    difficultyButtons[i].addEventListener("click", function(){
        
        difficultyButtons[0].classList.remove("selected");
        difficultyButtons[1].classList.remove("selected");
        // add selected class
        this.classList.add("selected");
        
        // specify numSquares
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        
        reset();
    });
}

// reset button
resetButton.addEventListener("click", function(){
    reset();
});


// *** FUNCTIONS ***

function reset(){
    // generate all new colours
    colours = generateRandomColours(numSquares);

    // pick new random colour from array
    pickedColour = pickColour();

    // changing display in heading
    colourDisplay.textContent = pickedColour;

    // change colours of squares and determine how many squares are shown
    for(var i = 0; i < squares.length; i++){
        squares[i].style.boxShadow = "";
        squares[i].style.transform = "";
        squares[i].style.cursor = "pointer";

        if(colours[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
        // what happens when right square is clicked
        squares[i].addEventListener("click", function(){
            var clickedColour = this.style.backgroundColor;
            if(pickedColour === clickedColour){
                messageDisplay.textContent = "Correct!";
                changeColours(clickedColour);
                h1.style.backgroundColor = clickedColour;
                resetButton.textContent = "Play again?";
            }
            
            // what happens if wrong square is clicked
            else{
                this.style.backgroundColor = "#EBF2EB";
                messageDisplay.textContent = "Try Again"
                this.style.boxShadow = "none";
                this.style.cursor = "default";
            }
        });
    }

    // reset h1 background color
    h1.style.backgroundColor = "#EBF2EB";

    // change button back to original text
    resetButton.textContent = "New colours";

    // change message to empty
    messageDisplay.textContent = "";
}

// changes all squares to the same colour when correct square is clicked
function changeColours(colour){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colour;
        squares[i].style.boxShadow = "none";
        squares[i].style.transform = "none";
        squares[i].style.cursor = "default";
    }
}


// randomly picks a colour that needs to be guessed
function pickColour(){
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

// generates random colours for colours array
function generateRandomColours(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColour());
        }
    return arr;
}

// generates an array of random colours
function randomColour(){
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
