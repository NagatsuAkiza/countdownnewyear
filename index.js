const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");

document.getElementById("currentYear").textContent = new Date().getFullYear();

function countdown() {
  const newYear = new Date("January 1, 2026 00:00:00");
  const now = new Date();
  const diff = newYear - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);

  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minsEl.innerText = mins;
  secEl.innerText = sec;
}

countdown();
setInterval(countdown, 1000);
