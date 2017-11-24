//Very RAW
//TODO: Organize into objects.

var numSqrs = 9;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var pickedColorDisplay = document.getElementById("pickedColorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

function init() {
    modeButtonSet();
    squareListenersSet()
    resetAll();
}
init(); // --------------------------------------- Call init

resetButton.addEventListener("click", function () {
    resetAll();
});

function modeButtonSet() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSqrs = 3;
            } else if (this.textContent === "Normal") {
                numSqrs = 6;
            } else {
                numSqrs = 9;
            }
            resetAll(); // resets;
        });
    }
}

function squareListenersSet() {
    for (var i = 0; i < squares.length; i++) { // loops through the ammount of ".squares"
        squares[i].style.backgroundColor = colors[i]; // assigns colors based on the position value in the "colors" array
        squares[i].addEventListener("click", function () { // adds click listeners to squares
            var clickedColor = this.style.backgroundColor; // grab color of clicked square
            if (clickedColor === pickedColor) { // compare color of pickedColor
                messageDisplay.textContent = "CORRECT!";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) {
    //generate array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) { // repeat num times
        // get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //generate RGB values (0-255),(0-255),(0-255)
    var r = Math.floor(Math.random() * 256); //red
    var g = Math.floor(Math.random() * 256); //green
    var b = Math.floor(Math.random() * 256); //blue
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}

function resetAll() {
    //generate all new colors
    colors = generateColors(numSqrs);
    //pick new random color from array
    pickedColor = pickColor();
    //change colorDisplay to picked color
    pickedColorDisplay.textContent = pickedColor;
    //reset original text in button
    messageDisplay.textContent = "";
    resetButton.textContent = "NEW COLORS";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}






// function colorMouseover(btn) {
//     btn[0].addEventListener("mouseover", function () {
//         btn[0].style.backgroundColor = pickedColor;
//         btn[0].style.color = "white";
//     });
//     btn[0].addEventListener("mouseout", function () {
//         btn[0].style.backgroundColor = "white";
//         btn[0].style.color = "#232323";
//     });
//     btn[1].addEventListener("mouseover", function () {
//         btn[1].style.backgroundColor = pickedColor;
//         btn[1].style.color = "white";
//     });
//     btn[1].addEventListener("mouseout", function () {
//         btn[1].style.backgroundColor = "white";
//         btn[1].style.color = "#232323";
//     });
//     btn[2].addEventListener("mouseover", function () {
//         btn[2].style.backgroundColor = pickedColor;
//         btn[2].style.color = "white";
//     });
//     btn[2].addEventListener("mouseout", function () {
//         btn[2].style.backgroundColor = "white";
//         btn[2].style.color = "#232323";
//     });
// }
