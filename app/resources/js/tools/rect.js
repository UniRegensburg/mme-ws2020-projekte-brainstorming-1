/* eslint-disable no-undef */
import { selectedColor } from "./tools/color.js";
import Config from "../utilis/config.js";

var isDown, origX, origY, rectangle, color = Config.COLORDEFAULT,
  fill, stroke;

class Rect {

  showMenue(canvas) {

    Config.RECTMENUE.classList.remove("hide");
    Config.CIRCLEMENUE.classList.add("hide");
    Config.ARROWMENUE.classList.add("hide");
    Config.TEXTBOXMENUE.classList.add("hide");
    Config.FREEDRAWMENUE.classList.add("hide");
    Config.COLORMENUE.classList.add("hide");
    Config.COLORMENUEOBJ.classList.add("hide");

    canvas.discardActiveObject().renderAll();
  }

  constructor(type) {
    this.type = type;
  }

  setType(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

  // from https://jsfiddle.net/wcwabpwc/
  drawRect(canvas, rect, pan) {

    canvas.on('mouse:down', function(o) {

      Config.RECTMENUE.classList.add("hide");

      var pointer = canvas.getPointer(o.e);

      if (selectedColor) { color = selectedColor; }
      if (rect.getType() === "withBorder") { fill = "transparent";
        stroke = 3; } else if (rect.getType() === "filled") { fill =
        color;
        stroke = 0; }

      isDown = true;
      origX = pointer.x;
      origY = pointer.y;

      rectangle = new fabric.Rect({
        left: origX,
        top: origY,
        fill: fill,
        stroke: color,
        strokeWidth: stroke,
      });
      canvas.add(rectangle);
    });

    canvas.on('mouse:move', function(o) {

      if (!isDown) return;
      var pointer = canvas.getPointer(o.e);
      if (origX > pointer.x) {
        rectangle.set({ left: Math.abs(pointer.x) });
      }
      if (origY > pointer.y) {
        rectangle.set({ top: Math.abs(pointer.y) });
      }
      rectangle.set({ width: Math.abs(origX - pointer.x) });
      rectangle.set({ height: Math.abs(origY - pointer.y) });
      canvas.renderAll();
    });

    canvas.on('mouse:up', function(o) {
      isDown = false;
      canvas.off('mouse:down');
      pan.enablePan(canvas);
      canvas.fire('object:modified', { target: rectangle });
    });

  }
}

export default Rect;