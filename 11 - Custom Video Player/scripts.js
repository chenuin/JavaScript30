const player = document.querySelector('.player');
const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const slider = document.querySelectorAll('.player__slider');
const skip = document.querySelectorAll('[data-skip]');

function handleToggle() {
    console.log()
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function handlePlayIcon() {
    toggle.textContent = '❚❚'
}

function handlePauseIcon() {
    toggle.textContent = '►';
}

function handleProgressDisplay () {
    const {currentTime, duration} = video;
    const percentage = currentTime ?
        currentTime / duration * 100 :
        0;

    progressBar.style.flexBasis = `${percentage}%`;
};

function handleSlider() {
    const {name, value} = this;

    video[name] = parseFloat(value);
}

function handleSkip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress({offsetX}) {
    const currentTime = offsetX / progress.offsetWidth * video.duration;

    video.currentTime = currentTime;
}

handleProgressDisplay();

video.addEventListener('click', handleToggle);
toggle.addEventListener('click', handleToggle);
video.addEventListener('play', handlePlayIcon);
video.addEventListener('pause', handlePauseIcon);
video.addEventListener('timeupdate', handleProgressDisplay);

slider.forEach(elem => {
    elem.addEventListener('click', handleSlider);
    elem.addEventListener('mousemove', handleSlider);
});

skip.forEach(elem => {
    elem.addEventListener('click', handleSkip);
});

let mousedown = false;
progress.addEventListener('click', handleProgress);
progress.addEventListener('mousemove', (e) => mousedown && handleProgress(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
