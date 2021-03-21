/* eslint-disable no-undef */
import Config from "./Config.js";

var canvas, room;

class Canvas {
  drawCanvas() {
    canvas = new fabric.Canvas("canvas", {
      height: window.innerHeight,
      width: window.innerWidth,
      backgroundColor: Config.COLORCANVAS,
      stateful: true,
    });

    document.addEventListener("RoomConnectEvent", function(e) {
      canvas.clear()
      room = e.detail;
      console.log("got room ", e.detail.id);

      room.onMessage("object:added", (message) => {
        console.log("new object received from server");
        fabric.util.enlivenObjects([message.object], function(
        objects) {
          var origRenderOnAddRemove = canvas.renderOnAddRemove;
          canvas.renderOnAddRemove = false;

          objects.forEach(function(o) {
            canvas.add(o);
          });

          canvas.renderOnAddRemove = origRenderOnAddRemove;
          canvas.renderAll();
        });
      });

      room.onMessage("object:modified", (message) => {
        console.log("modified object received from server");
        fabric.util.enlivenObjects([message.object], function(
        objects) {
          var origRenderOnAddRemove = canvas.renderOnAddRemove;
          canvas.renderOnAddRemove = false;

          objects.forEach(function(o) {
            canvas.getObjects().find(obj => obj.id == o.id).set(o);
          });

          canvas.renderOnAddRemove = origRenderOnAddRemove;
          canvas.renderAll();
        });
      });
    }, true);

    canvas.on('object:added', function(options) {
      if (options.target) {
        var obj = options.target;
        console.log("created")
        if (!obj.id) {
          // If object created by you, initially id will be undefined
          // Set the id and sync object
          obj.set('id', Date.now() + '-' + room.sessionId);
          obj.toJSON = (function(toJSON) {
            return function() {
              return fabric.util.object.extend(toJSON.call(this), {
                id: this.id,
              });
            };
          })(obj.toJSON);
          room.send("object:added", { object: obj.toJSON() });
        }
      }
    });

    canvas.on('object:modified', function(options) {
        if (options.target) {
          var obj = options.target;
          console.log("modified")
          room.send("object:modified", { object: obj.toJSON() });
        }
      });

    return canvas;
  }

  update(element) {
    canvas.add(element);
    canvas.renderAll();
  }
}

export default Canvas;