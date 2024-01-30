function changeColor(color) {
    pNumber.style.color = color;
}

function adjustColor() {
    if (number < 0) {
        changeColor('red');
    } else if (number > 0) {
        changeColor('green');
    } else {
        changeColor('black');
    }
}

function decrease() {
    number--;
    pNumber.innerHTML = number;
    adjustColor();
}

function increase() {
    number++;
    pNumber.innerHTML = number;
    adjustColor();
}

function reset() {
    number = 0;
    pNumber.innerHTML = number;
    adjustColor();
}

const pNumber = document.querySelector('.nmbr');

const decBtn = document.querySelector('.dec-btn');

const resetBtn = document.querySelector('.reset-btn');

const incBtn = document.querySelector('.inc-btn');

let number = 0;

decBtn.addEventListener('click', decrease);

resetBtn.addEventListener('click', reset);

incBtn.addEventListener('click', increase);




