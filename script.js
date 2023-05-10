
// Update function for setting up the hour, minutes and seconds of the clock
const clockFunc = () => {

    const myDate = new Date()
    const seconds = myDate.getSeconds(),
        minute = myDate.getMinutes(),
        hour = myDate.getHours();

    //console.log(hour, minute, seconds);
    // To get rotation angle, calc the number of degree/per second, per minute and per hour
    const secondsAng = seconds * 6,
        minuteAng = minute * 6 + seconds/60,
        //Alt A
        hourAng = hour * 30 + (minute / 2);
        // Alt B
        //hourAng = hour > 12 ? (hour -12) * 30 : hour * 30;
    //console.log(hourAng, minuteAng, secondsAng);

    document.getElementById('hours').setAttribute('transform', `rotate(${hourAng} 244, 251)`);
    document.getElementById('minutes').setAttribute('transform', `rotate(${minuteAng} 244, 251)`);
    document.getElementById('seconds').setAttribute('transform', `rotate(${secondsAng} 244, 251)`);

}
//clockFunc()
// Update function for updating the clock handles per second
setInterval(() => clockFunc(), 1000);