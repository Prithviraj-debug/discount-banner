const countdown = () => {
    var mon = new Date(Date.now()).toLocaleString('en-US', { month: 'short' });
    var nxtDate = new Date().getDate() + 1;
    var currYear = new Date().getFullYear();
    const countDate = new Date(mon + ',' + nxtDate + ',' + currYear).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //Time works
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    //Calculate
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / min);
    const textSec = Math.floor((gap % min) / sec);

    //Update HTML
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".min").innerHTML = textMin;
    document.querySelector(".sec").innerHTML = textSec;

    // console.log(gap);
};

setInterval(countdown, 1000);
