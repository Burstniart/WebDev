
console.log("in here")

let numA, numB;

const screen = document.querySelector(".screen");
screen.innerText = "0";

document.querySelector(".erase").addEventListener("click", function() {
    screen.innerText=" ";
})

document.querySelector(".container").addEventListener("click", function(event){
    let dude = event.target.innerText;
    let target = parseInt(dude);
    if (event.target.innerText == "C" || event.target.innerText == "<-") {
        screen.inenrText = "";
        numA = 0;
        numB = 0;
    } else if ( !isNaN(target) ) {
        if ( isNaN( parseInt( screen.innerText ))) {
            screen.innerText = "";
        }
        screen.innerText += event.target.innerText;
        console.log(screen.innerText);
    } else if ( isNaN( target ) ) {
        if (numA != 0) {
        numA = screen.innerText;
        screen.innerText = dude;
        } else {
            numB = screen.innerText;
            /*implement aritmethic operations*/
        }
    }
})


