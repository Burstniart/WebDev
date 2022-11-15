/*In your experiments.js,

    Write some code that declares two variables, character and timesToRepeat.
    Using a loop, repeat that character that many times and then console.log it.
    Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log 'fffff'.
    Try a few different combinations to make sure you got it right e.g. 'a' and 10, 'c' and 100, '🐶' and 3.
*/

let character, timesToRepeat

character  = '🐶'
timesToRepeat = 3

let answer = '' 

for (let i = 0; i < timesToRepeat; i++) {
    answer += character
}

console.log(answer)

const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "limegreen";

const elemToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elemToChange.length; i++) {
    const currElemt = elemToChange[i];
    currElemt.innerText = "Modified byatch!";
}

const button = document.querySelector(".event-button")
button.addEventListener("click", function () {
    alert("Surprise MotherFucker")
})

const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");

input.addEventListener("keyup", function() {
    paragraph.innerText = input.value
})
