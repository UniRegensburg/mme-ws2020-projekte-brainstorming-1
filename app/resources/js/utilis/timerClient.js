var room;

const minutesView = document.getElementById("minutes"),
  secondsView = document.getElementById("seconds"),
  startPauseButton = document.getElementById("button-start-pause"),
  startPauseIcon = document.getElementById("pauseIcon"),
  resetButton = document.getElementById("button-reset"),
  timer15 = document.getElementById("timer15"),
  timer30 = document.getElementById("timer30"),
  timer45 = document.getElementById("timer45");

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
    alert('Time is up!')
  });
});

startPauseButton.addEventListener("click", function() {
  if (startPauseIcon.innerHTML === "pause") {
    room.send("timer:stop");
  } else {
    room.send("timer:start");
  }
});

resetButton.addEventListener("click", function() {
  room.send("timer:set", { seconds: 0 })
});

timer15.addEventListener("click", function() {
  room.send("timer:set", { seconds: 900 })
})

timer30.addEventListener("click", function() {
  room.send("timer:set", { seconds: 1800 })
})

timer45.addEventListener("click", function() {
  room.send("timer:set", { seconds: 2700 })
})

function updateViews(sec_num) {
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  minutesView.innerHTML = minutes;
  secondsView.innerHTML = seconds;
}
