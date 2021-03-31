import Config from "./config.js";

var room;

document.addEventListener("RoomConnectEvent", function(e) {
  room = e.detail;
  //console.log("timer got room ", e.detail.id);
  room.onMessage("timer:start", (message) => {
    Config.STARTPAUSEICON.innerHTML = "pause";
    Config.STARTPAUSETOOLTIP.innerHTML = "pause";
  });
  room.onMessage("timer:stop", (message) => {
    Config.STARTPAUSEICON.innerHTML = "play_arrow";
    Config.STARTPAUSETOOLTIP.innerHTML = "start";
  });
  room.onMessage("timer:tick", (message) => {
    updateViews(message.seconds);
  });
  room.onMessage("timer:end", (message) => {
    alert('Time is up!')
  });
});

Config.STARTPAUSEBUTTON.addEventListener("click", function() {
  if (Config.STARTPAUSEICON.innerHTML === "pause") {
    room.send("timer:stop");
  } else {
    room.send("timer:start");
  }
});

Config.TIMER15.addEventListener("click", function() {
  room.send("timer:set", { seconds: 900 }) //15 minutes
})

Config.TIMER30.addEventListener("click", function() {
  room.send("timer:set", { seconds: 1800 }) //30 minutes
})

Config.TIMER45.addEventListener("click", function() {
  room.send("timer:set", { seconds: 2700 }) //45 minutes
})


//function to calculate seconds and fill the html-tag
function updateViews(sec_num) {
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  Config.MINUTESVIEW.innerHTML = minutes;
  Config.SECONDSVIEW.innerHTML = seconds;
}
