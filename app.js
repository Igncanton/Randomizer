const body = document.querySelector('body');
const text = document.querySelector('h1');
const btnColores = document.getElementById('btnColor');
const btnBackground = document.getElementById('btnBackground');
const btnFont = document.getElementById('btnFont');

const input = document.getElementById('input');
const reset = document.getElementById('btnReset');

let colors = ['red', 'green', 'yellow', 'purple', 'blue', 'white'];

let font = ['Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans'];


let randomNumber = function () {
    return Math.floor(Math.random() * colors.length);
};

let randomFont = function () {
    return Math.floor(Math.random() * font.length);
};

btnColores.addEventListener('click', function () {
    let newColor = randomNumber();
    text.style.color = colors[newColor];
});

btnBackground.addEventListener('click', function () {
    let newColor = randomNumber();
    body.style.backgroundColor = colors[newColor];
})

btnFont.addEventListener('click', function () {
    let newFont = randomFont();
    text.style.fontFamily = font[newFont];
})

input.addEventListener('input', () => {
    let t = input.value;
    text.innerHTML = t;
})

reset.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
    text.style.color = 'black';
    text.style.fontFamily = 'sans serif';
    text.innerHTML = '. . .';
    input.value = '';

})


btns = function () {
    btns.style.backgroundColor = 'white';
}