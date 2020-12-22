const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');
const text = document.getElementById('text');
const reset = document.getElementById('reset');

let currentNumber;

function update() {
    text.innerHTML = currentNumber;
    localStorage.setItem('number', JSON.stringify(currentNumber))
}

function addNumber() {
    currentNumber++;
    update();
}

function subtractNumber() {
    if (currentNumber > 0) {
        currentNumber--;
        update();
    }
}

function resetNumber() {
    localStorage.clear();
    location.reload();
}

function displayNumber() {
    if (localStorage.getItem('number') === null) {
        currentNumber = 0;
        text.innerHTML = 0;
    } else {
        currentNumber = JSON.parse(localStorage.getItem('number'));
        text.innerHTML = currentNumber;
    }
}


rightSide.addEventListener('click', addNumber);

leftSide.addEventListener('click', subtractNumber);

reset.addEventListener('click', resetNumber);

document.addEventListener('DOMContentLoaded', displayNumber);