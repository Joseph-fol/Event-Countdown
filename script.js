const futureDate = new Date("Feb 19, 2026 16:57:59")
const targetDate = futureDate.getTime()

setInterval(() => {
    const date = new Date
    const currentDate = date.getTime()   

    const interval = targetDate - currentDate
    // console.log(interval);

    const day = Math.floor((interval/(1000 * 60 * 60 * 24)))
    console.log(day);

    const hour = Math.floor((interval/(1000 * 60 * 60)) % 24)
    // console.log(hour);

    const minute = Math.floor((interval /(1000 * 60))% 60)
    // console.log(minute);

    const seconds = Math.floor((interval/(1000)) % 60)
    
    const display = document.getElementById("display")
    display.innerText = `${day}d : ${hour}hr : ${minute}min : ${seconds}secs`

    if (interval < 0) {
        display.innerText = `Countdown Completed`
    } 

}, 1000);