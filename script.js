const secondsHand = document.getElementById('seconds-hand');
const minsHand = document.getElementById('minutes-hand');
const hourHand = document.getElementById('hours-hand');
const toggle = document.getElementById('toggle');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
  } else {
    html.classList.add('dark');
  }
});
function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  const timeInterval = 6;

  secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)`;
  minsHand.style.transform = `rotate(${mins * timeInterval + seconds / 10}deg)`;
  hourHand.style.transform = `rotate(${hours * 30 + mins / 2}deg)`;

  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const date = now.getDate();
  const day = now.getDay();
  const month = now.getMonth();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const year = now.getFullYear();

  timeEl.innerHTML = `${hoursForClock}:${
    mins < 10 ? `0${mins}` : mins
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span> ${year}`;
}
setInterval(setTime, 100);
