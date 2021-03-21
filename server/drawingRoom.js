const colyseus = require('colyseus');

class DrawingRoom extends colyseus.Room {
    // When room is initialized
    onCreate (options) {
        console.log("new Drawing room ID:" , this.roomId, " Created.");
        this.onMessage("greeting", (client, message) => {
            console.log("blyt")
			console.log(message);
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