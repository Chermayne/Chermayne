var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var btnMinus = document.getElementById("btn-minus");
var btnAdd = document.getElementById("btn-add");
var logo = document.getElementById("logo");

var displayWinner = document.querySelector("#display-winner");
var maxInput = document.getElementById("set-total");
var totalDisplay = document.getElementById("total-display");

// STARTING SETTINGS
var p1score = 0;
var p2score = 0;
var total = 5;
var gameOver = false;


// SETTINGS
maxInput.addEventListener("change", function(){
    totalDisplay.textContent = this.value;
    total = Number(this.value);
    reset();
})

btnMinus.addEventListener("click", function(){
    if(total > 1){
        total--;
        maxInput.stepDown(1);
        totalDisplay.textContent = total;
        reset();
    }
})

btnAdd.addEventListener("click", function(){
    if(total < 99) {
        total++;
        maxInput.stepUp(1);
        totalDisplay.textContent = total;
        reset();
    }
})


// RESET
resetButton.addEventListener("click", function(){
    reset();
})

function reset(){
    gameOver = false;
    p1score = 0;
    p1Button.textContent = ("+");
    p1Button.classList.remove("winner");
    p2score = 0;
    p2Button.textContent = ("+");
    p2Button.classList.remove("winner");
    logo.innerHTML = "SCORE KEEPER";
    logo.classList.remove("winner")
}


// PLAYER BUTTONS
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === total){
            p1Button.classList.add("winner");
            logo.innerHTML = "PLAYER 1 WINS";
            logo.classList.add("winner");
            gameOver = true
            if (p2score === 0) {
                p2Button.textContent = 0;
            }
        }
    }
    p1Button.textContent = p1score;
})

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(p2score === total){
            p2Button.classList.add("winner");
            logo.innerHTML = "PLAYER 2 WINS";
            logo.classList.add("winner");
            gameOver = true
            if (p1score === 0) {
                p1Button.textContent = 0;
            }
        }
    }
    p2Button.textContent = p2score;
})
