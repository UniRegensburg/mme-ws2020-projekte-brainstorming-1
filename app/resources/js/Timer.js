var minutes = 10,
seconds = 30,
countdownInterval,
initalSeconds = 30,
initalMinutes = 10;

const minutesView = document.getElementById("minutes"),
 secondsView = document.getElementById("seconds"),
 startPauseButton = document.getElementById("button-start-pause"),
 startPauseIcon = document.getElementById("pauseIcon"),
 resetButton = document.getElementById("button-reset");

minutesView.innerHTML = minutes;
secondsView.innerHTML = seconds;

startPauseButton.addEventListener("click", function() {
    if(startPauseIcon.innerHTML === "pause") {
        startPauseIcon.innerHTML = "play_arrow";
        clearInterval(countdownInterval);
    } else {
        startPauseIcon.innerHTML = "pause";
        countdownInterval = setInterval(startTimer, 1000);
    }
});

resetButton.addEventListener("click", function(){
    clearInterval(countdownInterval);
    startPauseIcon.innerHTML = "play_arrow";
    seconds = initalSeconds;
    minutes = initalMinutes;
    minutesView.innerHTML = minutes;
    secondsView.innerHTML = seconds;
});

// Unterteilung in function reduceMinutes() und reduceSeconds() ?
function startTimer() {
    seconds = seconds - 1;
    if(seconds < 10) {
        secondsView.innerHTML = "0"+ seconds;
    } else {
        secondsView.innerHTML = seconds;
    }

    if(seconds === 59 && minutes > 0) {
        minutes = minutes - 1;
        if(minutes < 10) {
            minutesView.innerHTML = "0" + minutes;
        } else {
            minutesView.innerHTML = minutes;
        }  
    }

    if(seconds <= 0) {
        if(minutes <= 0) {
            clearInterval(countdownInterval);
        }
        seconds = 60;
    }
}

class Timer {
    timer() { 
        countdownInterval = setInterval(startTimer, 1000); 
    }
}

export default Timer;