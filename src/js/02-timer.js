import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import addLeadingZero from '../modul2/addLeadingZero';
import convertMs from '../modul2/convert_ms';


const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysValue = document.querySelector('.value[data-days]');
const hoursValue = document.querySelector('.value[data-hours]');
const minutesValue = document.querySelector('.value[data-minutes]');
const secondsValue = document.querySelector('.value[data-seconds]');

let futureTime = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: Date.now(),
    minuteIncrement: 1,


    onClose(selectedDates) {
        futureTime = selectedDates[0].getTime();
        
        if (futureTime < options.defaultDate) {
            startBtn.setAttribute('disabled', 'disabled');
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            startBtn.removeAttribute('disabled');
        }
  },
};

flatpickr(inputEl, options);

startBtn.setAttribute('disabled', 'disabled');
startBtn.addEventListener('click', onStart);

function onStart(evt) {
    startBtn.setAttribute('disabled', 'disabled');
    inputEl.setAttribute('disabled', 'disabled');
    

    const interval = setInterval(() => {
        const currentTime = Date.now();
        const restTime = futureTime - currentTime;
        const convertTime = convertMs(restTime);
        changeTime(convertTime);
        if (restTime < 1000) {
            inputEl.removeAttribute('disabled');
            clearInterval(interval)
        }

    }, 1000);
}


function changeTime({ days, hours, minutes, seconds }) {
    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
}

