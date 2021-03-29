const colyseus = require('colyseus');
const Timer = require('./timer');

class DrawingRoom extends colyseus.Room {
  // When room is initialized
  onCreate(options) {
    console.log("new Drawing room ID:", this.roomId, " Created.");
    this.Timer = new Timer(this.onTimerTick.bind(this), this.onTimerEnd
      .bind(this));
    this.Timer.setSeconds(0);
    this.objects = new Map();

    this.onMessage("object:added", (client, message) => {
      console.log("object added by ", client.id);
      this.clients.forEach(element => {
        if (client.id != element.id) {
          element.send("object:added", message);
        }
      });
      this.objects.set(message.object.id, message.object);
    });

    this.onMessage("object:modified", (client, message) => {
      console.log("object modified by ", client.id);
      this.clients.forEach(element => {
        if (client.id != element.id) {
          element.send("object:modified", message);
        }
      });
      this.objects.set(message.object.id, message.object);
    });

    this.onMessage("object:removed", (client, message) => {
      console.log("object removed by ", client.id);
      this.clients.forEach(element => {
        if (client.id != element.id) {
          element.send("object:removed", message);
        }
      });
      this.objects.set(message.object.id, message.object);
    });

    //Timer Broadcast to Clients
    this.onMessage("timer:start", (client, message) => {
      this.Timer.start();
      this.broadcast("timer:start");
      this.broadcast("timer:tick", { seconds: this.Timer.seconds });
    });
    this.onMessage("timer:stop", (client, message) => {
      this.Timer.stop();
      this.broadcast("timer:stop");
    });
    this.onMessage("timer:set", (client, message) => {
      this.Timer.setSeconds(message.seconds);
      this.broadcast("timer:tick", { seconds: message.seconds });
    });
  }

  // Authorize client based on provided options before WebSocket handshake is complete
  onAuth(client, options, request) { return true }

  // When client successfully join the room
  onJoin(client, options, auth) {
    for (let element of this.objects.values()) {
      client.send("object:added", { object: element })
    }
    client.send("timer:tick", { seconds: this.Timer.seconds });
  }

  // When a client leaves the room
  onLeave(client, consented) {}

  // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
  onDispose() {}

  onTimerTick(seconds) {
    this.broadcast("timer:tick", { seconds: seconds });
  }

  onTimerEnd() {
    this.broadcast("timer:end");
  }
}

module.exports = DrawingRoom