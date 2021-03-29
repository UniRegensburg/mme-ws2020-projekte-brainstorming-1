var room;

const minutesView = document.getElementById("minutes"),
 secondsView = document.getElementById("seconds"),
 startPauseButton = document.getElementById("button-start-pause"),
 startPauseIcon = document.getElementById("pauseIcon"),
 resetButton = document.getElementById("button-reset");

document.addEventListener("RoomConnectEvent", function(e) {
    room = e.detail;
    console.log("timer got room ", e.detail.id);
    room.onMessage("timer:start", (message) => {
        startPauseIcon.innerHTML = "pause";
    });
    room.onMessage("timer:stop", (message) => {
        startPauseIcon.innerHTML = "play_arrow";
    });
    room.onMessage("timer:tick", (message) => {
        updateViews(message.seconds);
    });
    room.onMessage("timer:end", (message) => {
        // todo: what happens if timer is done?
    });
});

startPauseButton.addEventListener("click", function() {
    if(startPauseIcon.innerHTML === "pause") {
        room.send("timer:stop");
    } else {
        room.send("timer:start");
    }
});

resetButton.addEventListener("click", function(){
    room.send("timer:set", {seconds: 120})
});

function updateViews(sec_num) {
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    minutesView.innerHTML = minutes;
    secondsView.innerHTML = seconds;
}
