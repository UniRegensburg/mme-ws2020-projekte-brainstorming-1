/* eslint-disable no-undef */
import Config from "./config.js";

var canvas, room;

class Canvas {
  //draws canvas the same size then the window
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

      //task to do if object is added by other users
      room.onMessage("object:added", (message) => {
        //console.log("new object received from server");
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

      //task to do if object is modified by other users
      room.onMessage("object:modified", (message) => {
        //console.log("modified object received from server");
        fabric.util.enlivenObjects([message.object], function(
          objects) {
          var origRenderOnAddRemove = canvas.renderOnAddRemove;
          canvas.renderOnAddRemove = false;

          objects.forEach(function(o) {
            canvas.getObjects().find(obj => obj.id == o.id)
              .set(o);
          });

          canvas.renderOnAddRemove = origRenderOnAddRemove;
          canvas.renderAll();
        });
      }, true);

      //task to do if object was removed by other users
      room.onMessage("object:removed", (message) => {
        //console.log("removed object received from server");
        fabric.util.enlivenObjects([message.object], function(
          objects) {
          var origRenderOnAddRemove = canvas.renderOnAddRemove;
          canvas.renderOnAddRemove = false;
          objects.forEach(function(o) {
            canvas.remove(canvas.getObjects().find(obj => obj.id == o.id));
          });

          canvas.renderOnAddRemove = origRenderOnAddRemove;
          canvas.renderAll();
        });
      });
    }, true);

    canvas.on("object:added", function(options) {
      if (options.target) {
        var obj = options.target;
        //console.log("created")
        if (!obj.id) {
          // If object created by you, initially id will be undefined
          // Set the id and sync object
          obj.set("id", Date.now() + '-' + room.sessionId);
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

    canvas.on("object:modified", function(options) {
      if (options.target) {
        var obj = options.target;
        //console.log("modified")
        obj.toJSON = (function(toJSON) {
          return function() {
            return fabric.util.object.extend(toJSON.call(this), {
              id: this.id
            });
          };
        })(obj.toJSON);
        room.send("object:modified", { object: obj.toJSON() });
      }
    });

    canvas.on("object:removed", function(options) {
      if (options.target) {
        var obj = options.target;
        if (obj.removed)
          return; //Object already removed

        obj.set("removed", true);
        obj.toJSON = (function(toJSON) {
          return function() {
            return fabric.util.object.extend(toJSON.call(this), {
              id: this.id,
              uid: this.uid,
              removed: this.removed
            });
          };
        })(obj.toJSON);
        room.send("object:removed", { object: obj.toJSON() });
      }
    });

    return canvas;
  }
}

export default Canvas;