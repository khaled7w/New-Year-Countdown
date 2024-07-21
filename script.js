//Select DOM elements
const numberOfDays = document.querySelector('.number-of-days');
const numberOfHours = document.querySelector('.number-of-hours');
const numberOfMinutes = document.querySelector('.number-of-mins');
const numberOfSeconds = document.querySelector('.number-of-seconds');
const shownYear = document.querySelector('.current-year');
const container = document.querySelector('.container');
const spinner = document.querySelector('.spinner');
container.style.visibility = 'hidden';
shownYear.style.visibility = 'hidden';

//Show spinner
setTimeout(() => {
  spinner.style.visibility = 'hidden';
  container.style.visibility = 'visible';
  shownYear.style.visibility = 'visible';
}, 3000);

//calculate the number of past days
function days_passed(dt) {
  var current = new Date(dt.getTime());
  var previous = new Date(dt.getFullYear(), 0, 1);
  return Math.ceil((current - previous + 1) / 86400000);
}

//get and render data
function renderData() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getUTCDate();
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getUTCMinutes();
  const currentSeconds = new Date().getUTCSeconds();
  const passedDays = days_passed(new Date());
  const remainingDays = 365 - passedDays;
  const remainingHours = 24 - currentHour;
  const remainingMinutes = 60 - currentMinutes;
  const remainingSeconds = 60 - currentSeconds;
  numberOfDays.textContent = remainingDays;
  numberOfHours.textContent = remainingHours;
  numberOfMinutes.textContent = remainingMinutes;
  numberOfSeconds.textContent = remainingSeconds;
  shownYear.textContent = currentYear + 1;
}

//Keep data updated every 500 miliseconds
setInterval(renderData, 500);
