/* eslint-disable no-undef */
import { selectedColor } from "./color.js";
import Config from "../utilis/config.js";

// Arrowspaths are taken from the arrow from Microsoft Word
var pathSingleArrow =
  "M461 505.844 913.26 505.844 913.26 516.157 461 516.156ZM908.104 495.532 939.042 511.001 908.104 526.469Z",
  pathdoubleArrow =
  "M485.781 676.844 912.26 676.844 912.26 687.157 485.781 687.156ZM490.937 697.469 460 682 490.937 666.531ZM907.104 666.532 938.042 682 907.104 697.469Z",
  pathAngledArrow =
  "M469 786.844 713.177 786.844 713.177 1021.4 708.021 1016.24 921.26 1016.24 921.26 1026.55 702.864 1026.55 702.864 792 708.021 797.156 469 797.156ZM916.104 1005.93 947.042 1021.4 916.104 1036.86Z",
  path, arrowDraw,
  origX, origY,
  color = Config.COLORDEFAULT,
  arrowMenue = Config.ARROWMENUE;

class Arrow {

  showMenue(canvas) {
    Config.RECTMENUE.classList.add("hide");
    Config.CIRCLEMENUE.classList.add("hide");
    Config.ARROWMENUE.classList.remove("hide");
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

  //draws the selected arrow on the place where user clicked
  drawArrow(canvas, arrow, pan) {

    canvas.on('mouse:down', function(o) {
      arrowMenue.classList.add("hide");

      var pointer = canvas.getPointer(o.e);

      if (selectedColor) { color = selectedColor; }

      if (arrow.getType() === "single") {
        path =
          pathSingleArrow;
      } else if (arrow.getType() === "double") {
        path =
          pathdoubleArrow;
      } else if (arrow.getType() === "angled") {
        path
          = pathAngledArrow;
      }

      origX = pointer.x;
      origY = pointer.y;

      arrowDraw = new fabric.Path(path);
      arrowDraw.set({ fill: color, top: origY, left: origX - 120 });

      canvas.add(arrowDraw.scale(0.5));

    });

    canvas.on('mouse:up', function(o) {
      canvas.off('mouse:down');
      pan.enablePan(canvas);
    });
  }

}

export default Arrow;
