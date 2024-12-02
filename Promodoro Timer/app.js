const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const TimerEl = document.getElementById("timer")

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

    TimerEl.innerHTML = formattedTime;
}


function starttimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if (timeLeft === 0){
            clearInterval(interval);
            alert("Time is Up!");
            timeLeft = 1500;
        }
    }, 1000);
};
function stoptimer(){
    clearInterval(interval);
}
function resettimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startEl.addEventListener("click", starttimer)
stopEl.addEventListener("click", stoptimer)
resetEl.addEventListener("click", resettimer)