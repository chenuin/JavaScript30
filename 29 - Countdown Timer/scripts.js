const buttons = document.querySelectorAll('[data-time]');
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
let coundown;

function timer(seconds) {
    clearInterval(coundown);

    const now = Date.now();
    const end = now + seconds * 1000;

    displayCountdown(seconds);
    displayEndTime(end);

    coundown = setInterval(() => {
        leftSeconds = Math.round((end - Date.now()) / 1000);

        if (leftSeconds < 0) {
            clearInterval(coundown);
            return;
        }

        displayCountdown(leftSeconds);
    }, 1000);
}

function getTwoDigitNumber(num) {
    return `${num}`.padStart(2, '0');
}

function displayCountdown(seconds) {
    const min = getTwoDigitNumber(parseInt(seconds / 60));
    const sec = getTwoDigitNumber(seconds % 60);

    timeLeft.textContent = `${min}:${sec}`;
}

function displayEndTime(timestamp) {
    const time = new Date(timestamp);
    const sec = getTwoDigitNumber(time.getSeconds());
    const min = getTwoDigitNumber(time.getMinutes());
    const hour = getTwoDigitNumber(time.getHours());

    endTime.textContent = `Countdown end at ${hour}:${min}:${sec}`;
}

function handleButton() {
    timer(parseInt(this.dataset.time));
}

function handleSubmit(e) {
    e.preventDefault();

    timer(this.minutes.value * 60);

    this.reset();
}

buttons.forEach(button => button.addEventListener('click', handleButton));
document.customForm.addEventListener('submit', handleSubmit);
