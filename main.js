const hoursTens = document.getElementById('hoursTens');
const hoursOnes = document.getElementById('hoursOnes');
const minutesTens = document.getElementById('minutesTens');
const minutesOnes = document.getElementById('minutesOnes');
const secondsTens = document.getElementById('secondsTens');
const secondsOnes = document.getElementById('secondsOnes');

function addZero(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

function updateClock() {
    let now = new Date();

    const hours = addZero(now.getHours());
    const minutes = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());

    hoursTens.textContent = Math.floor(hours/10).toString();
    hoursOnes.textContent = hours % 10;
    minutesTens.textContent = Math.floor(minutes / 10).toString();
    minutesOnes.textContent = minutes % 10;
    secondsTens.textContent = Math.floor(seconds / 10).toString();
    secondsOnes.textContent = seconds % 10;
}

setInterval(updateClock, 1000);