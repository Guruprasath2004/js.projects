const timerel = document.getElementById("timer");
const startbutton = document.getElementById("start");
const stopbutton = document.getElementById("stop");
const resetbutton = document.getElementById("Reset")

function startTimer(){
    startTime = Date.now() - elapsedTime
    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timerel.textContent = formatTime(elapsedTime);
    },10);

    startbutton.disabled = true
    stopbutton.disabled = false
}
function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime % 1000) / 10) ;
    const seconds = Math.floor((elapsedTime % (1000*60)) / 1000) ;
    const minutes = Math.floor((elapsedTime % (1000*60*60)) / (1000*60)) ;
    const hours = Math.floor(elapsedTime / (1000*60*60)) ;
    return(
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + "." +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + "." +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." + 
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    )
    
}
function stopTimer(){
    clearInterval(timerInterval);
    startbutton.disabled = false;
    stopbutton.disabled = true;
}
function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerel.textContent = "00:00:00"
    startbutton.disabled = false;
    stopbutton.disabled = true;
}

let startTime = 0;
let elapsedTime = 0;
let timerInterval;



startbutton.addEventListener("click",startTimer)
stopbutton.addEventListener("click", stopTimer)
resetbutton.addEventListener("click", resetTimer)