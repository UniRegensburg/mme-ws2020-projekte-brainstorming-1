const colyseus = require('colyseus');
const Timer = require('./timer');

class DrawingRoom extends colyseus.Room {
    // When room is initialized
    onCreate (options) {
        console.log("new Drawing room ID:" , this.roomId, " Created.");
        this.Timer = new Timer(this.onTimerTick, this.onTimerEnd);

        this.objects = new Map();

        this.onMessage("object:added", (client, message) => {
			console.log("object added by ", client.id);
            this.clients.forEach(element => {
                if(client.id != element.id) {
                    element.send("object:added", message);
                }
            });
            this.objects.set(message.object.id, message.object);
		});
        this.onMessage("object:modified", (client, message) => {
			console.log("object modified by ", client.id);
            this.clients.forEach(element => {
                if(client.id != element.id) {
                    element.send("object:modified", message);
                }
            });
            this.objects.set(message.object.id, message.object);
		});
        this.onMessage("timer:start", (client, message) => {
            this.Timer.setSeconds(message.seconds);
            this.Timer.start();
        });
        this.onMessage("timer:stop", (client, message) => {
            this.Timer.stop();
        });
    }

    // Authorize client based on provided options before WebSocket handshake is complete
    onAuth (client, options, request) { return true }

    // When client successfully join the room
    onJoin (client, options, auth)  {   
        for (let element of this.objects.values()) {
            client.send("object:added", {object: element})
                  }
    }

    // When a client leaves the room
    onLeave (client, consented) { }

    // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
    onDispose () { }

    onTimerTick(seconds) {
        this.broadcast("timer:tick", {seconds: seconds});
    }

    onTimerEnd() {
        this.broadcast("timer:end");
    }
}

module.exports = DrawingRoom