// ----------------- Query Selectors -----------------

let hr = document.querySelector('.hour');
let min = document.querySelector('.minute');
let sec = document.querySelector('.second');

// ----------------- Functions -----------------

function setDate() {

    let now = new Date();
    
    // ---------- seconds ----------

    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds / 60) * 360) + 90;

    sec.style.transform = `rotate(${secondsDegrees}deg)`

    // ---------- minutes ----------

    let minutes = now.getMinutes()
    let minutesDegrees = ((minutes / 60) * 360) + 90;
    min.style.transform = `rotate(${minutesDegrees}deg)`

    // ---------- hours ----------

    let hours = now.getHours();
    let hoursDegrees = ((hours / 12) * 360) + 90;
    hr.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)

