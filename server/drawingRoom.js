const colyseus = require('colyseus');

class DrawingRoom extends colyseus.Room {
    // When room is initialized
    onCreate (options) {
        console.log("new Drawing room ID:" , this.roomId, " Created.");
        this.onMessage("object:added", (client, message) => {
			console.log("object added by ", client.id);
            this.clients.forEach(element => {
                if(client.id != element.id) {
                    element.send("object:added", message);
                }
            });
		});
        this.onMessage("object:modified", (client, message) => {
			console.log("object added by ", client.id);
            this.clients.forEach(element => {
                if(client.id != element.id) {
                    element.send("object:modified", message);
                }
            });
		});
    }

    // Authorize client based on provided options before WebSocket handshake is complete
    onAuth (client, options, request) { return true }

    // When client successfully join the room
    onJoin (client, options, auth) { }

    // When a client leaves the room
    onLeave (client, consented) { }

    // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
    onDispose () { }
}

module.exports = DrawingRoom