import randomColor from '../modul1/color';

const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');


startBtn.addEventListener('click', onStart);
stoptBtn.addEventListener('click', onStop);

let interval = null;

function onStart(evt) {
    interval = setInterval(() => {
        bodyColor.style.backgroundColor = randomColor();
    }, 1000);
    startBtn.setAttribute('disabled', 'disabled');
    stoptBtn.removeAttribute('disabled');
};

function onStop(evt) {
    startBtn.removeAttribute('disabled');
    stoptBtn.setAttribute('disabled', 'disabled');
    clearInterval(interval);
};
