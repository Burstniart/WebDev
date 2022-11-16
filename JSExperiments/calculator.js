
console.log("in here")

let runningTotal = 0;

let previousOperator = null;


const screen = document.querySelector(".screen");
screen.innerText = "0";
/*
document.querySelector(".erase").addEventListener("click", function() {
    screen.innerText=" ";
})
*/
function handleMath(value) {
    if (screen.innerText == "0") {
        return;
    }

    const intBuffer = parseInt(screen.innerText);
    if(runningTotal == 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);    
    }
    previousOperator = value;

    screen.innerText = "0";
}

function flushOperation(intBuffer) {
    if (previousOperator == "+") {
        runningTotal += intBuffer;
    } else if (previousOperator == "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator == "x") {
        runningTotal *= intBuffer;
    } else if (previousOperator == "/") {
        runningTotal /= intBuffer;
    }
    console.log(runningTotal)
}

document.querySelector(".container").addEventListener("click", function(event){
    let dude = event.target.innerText;
    let target = parseInt(dude);
    if ( dude == "C" || event.target.innerText == "<-") {
      screen.innerText = "0"; 
    } else if ( !isNaN(target) ) {
        if (screen.innerText == "0") {
            screen.innerText = dude;
        } else {
        screen.innerText += event.target.innerText;
        }
    } else if ( isNaN( target ) ) {
        switch (dude) {
            case "+":
            case "-":
            case "x":
            case "/":
                handleMath(dude)
                break;
            case "=":
                if (previousOperator === null) {
                    // need two numbers to do math
                    return;
                  }
                  flushOperation(parseInt(screen.innerText));
                  previousOperator = null;
                  screen.innerText = "" + runningTotal;
                  runningTotal = 0;
                  break;
        }
    }
})


