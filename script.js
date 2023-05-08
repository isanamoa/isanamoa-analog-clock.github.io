
// Update function for setting up the hour, minutes and seconds of the clock
const clockFunc = () => {

    const myDate = new Date()
    const hour = myDate.getHours(),
        minute = myDate.getMinutes(),
        seconds = myDate.getSeconds();

    console.log(hour, minute, seconds);

    const secondsAng = seconds * 6,
        minuteAng = minute * 6,
        hourAng = hour * 30 + (minute / 2);

    console.log(hourAng, minuteAng, secondsAng);

    document.getElementById('hours').setAttribute('transform', `rotate(${hourAng} 245, 250)`);
    document.getElementById('minutes').setAttribute('transform', `rotate(${minuteAng} 245, 250)`);
    document.getElementById('seconds').setAttribute('transform', `rotate(${secondsAng} 245, 250)`);

}
//clockFunc()
// Update function for updating the clock handles per second
setInterval(() => clockFunc(), 1000);