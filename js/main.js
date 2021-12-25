// Действующие элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// Расчеты
const currentYear = new Date().getFullYear();
const nexYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Устанавливаем год на страницу
year.innerText = currentYear + 1;

function updateCounter() {



const currentTime = new Date();
const diff = nexYear - currentTime;


  //Перевод в дни
const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  // Часов всего, далее остаток от деления на 24 (преобразования в дни), получаем ... часов
const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  // Минут всего, далее остаток от преобразования в часы, минуты осталось
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  // Секунд всего соталось, далее остаток от преобразования в минуты, секунд осталось
const secondsLeft = Math.floor(diff / 1000) % 60;

console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

days.innerText = daysLeft;
hours.innerText = hoursLeft < 10 ? '0' + hoursLeft: hoursLeft;
minutes.innerText = minutesLeft < 10 ? '0' + minutes: minutesLeft;
seconds.innerText = secondsLeft < 10 ? '0' + days: secondsLeft;

}

setInterval(updateCounter, 1000);

setTimeout(function () {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000)

