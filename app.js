const dayOfTheWeekCount = document.querySelector('.day-text-count');
const monthCount = document.querySelector('.month-count');
const yearCount = document.querySelector('.years-count');
const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');
const timeSetCount = document.querySelector('.timeSet-counter');

let fixHours;
let fixMinutes;
let fixSeconds;

function watch() {
    let today = new Date();
    //console.log(today);
    //!TEXT DAY OF THE WEEK
    let daysOfTheWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    let thisDayOfTheWeek = today.getDay();

    let givemeDayOfTheWeek = (dayOfTheWeekCount.textContent = daysOfTheWeek[thisDayOfTheWeek - 1]);
    //!MONTH OF THE YEAR

    let monthsOfTheYear = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Nov',
        'Dec',
    ];
    let thisMonth = today.getMonth();

    monthCount.textContent = monthsOfTheYear[thisMonth];
    //!NUMBER DAY OF THE WEEK

    let thisDay = today.getDate();
    daysCount.textContent = thisDay;
    //console.log(thisDay);
    //!YEAR

    let thisYear = today.getFullYear();
    yearCount.textContent = thisYear;
    //console.log(thisYear);
    //!HOURS

    let thisHour = today.getHours();
    pairNumbers(thisHour, hoursCount);
    //console.log(thisHour);
    //!MINUTES
    let thisMinutes = today.getMinutes();

    pairNumbers(thisMinutes, minutesCount);
    //console.log(thisMinutes);

    //!SECONDS
    let thisSeconds = today.getSeconds();

    pairNumbers(thisSeconds, secondsCount);
    animationChange(thisSeconds, secondsCount);
    //console.log(thisSeconds);
    //!TIME SET COMPROBATION
    if (thisHour < 12) {
        timeSetCount.textContent = 'am';
    } else {
        timeSetCount.textContent = 'pm';
    }
}
function animationChange(value, textChange) {
    if (value++) {
        textChange.animate([{ opacity: '0' }, { opacity: '1' }], {
            duration: 500,
            fill: 'forwards',
        });
    }
}
function pairNumbers(valueChange, textChange) {
    if (valueChange < 10) {
        textChange.textContent = `0${valueChange}`;
    } else textChange.textContent = `${valueChange}`;
}
setInterval(watch, 1000);
