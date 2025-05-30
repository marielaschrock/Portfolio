const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("November 17 2025 00:00:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance < 0){
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('poll-form');
    const result = document.getElementById('result');
  
    if (form && result) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const choice = document.querySelector('input[name="gender"]:checked');
        if (choice) {
          result.innerHTML = `<p>Thanks for voting! You guessed <strong>${choice.value}</strong>.</p>`;
          form.reset();
        } else {
          result.innerHTML = `<p>Please make a selection!</p>`;
        }
      });
    }
  });
  