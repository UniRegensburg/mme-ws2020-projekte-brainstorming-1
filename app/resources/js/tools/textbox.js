/* eslint-disable no-undef */
import { selectedColor } from "./color.js";
import Config from "../utilis/config.js";

var text = Config.TEXTBOXDEFAULTTEXT,
  font = Config.TEXTBOXDEFAULTFONT,
  textboxDraw, origX, origY,
  color = Config.COLORDEFAULT,
  textColor, backgroundColor, shadow,
  textboxMenue = Config.TEXTBOXMENUE,
  slider = Config.TEXTBOXSLIDER,
  sliderOutput = Config.TEXTBOXSLIDEROUTPUT;

class Textbox {

  showMenue(canvas) {
    Config.RECTMENUE.classList.add("hide");
    Config.CIRCLEMENUE.classList.add("hide");
    Config.ARROWMENUE.classList.add("hide");
    Config.TEXTBOXMENUE.classList.remove("hide");
    Config.FREEDRAWMENUE.classList.add("hide");
    Config.COLORMENUE.classList.add("hide");
    Config.COLORMENUEOBJ.classList.add("hide");

    canvas.discardActiveObject().renderAll();

    sliderOutput.textContent = "Text size: " + slider.value;
    slider.oninput = function() {
      sliderOutput.innerHTML = "Text size: " + this.value;
    };
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

  //draws the selected textbox on the place where user clicked
  drawTextbox(canvas, textbox, pan) {

    canvas.on('mouse:down', function(o) {
      textboxMenue.classList.add("hide");

      var pointer = canvas.getPointer(o.e);

      if (selectedColor) { color = selectedColor; }
      if (textbox.getType() === "notFilled") {
        textColor = color;
        backgroundColor = "transparent";
        shadow = "transpatent";
      } else if (textbox.getType() ===
        "filled") {
        textColor = "#EEEEEE";
        backgroundColor = color;
        shadow =
          "#9E9E9E 4px 4px 10px";
      } //shadow: "color, offsetX, offsetY, blur"

      origX = pointer.x;
      origY = pointer.y;

      textboxDraw = new fabric.Textbox(text, {
        fontSize: slider.value,
        fontFamily: font,
        width: slider.value * 8,
        left: origX - (slider.value * 8) / 2,
        top: origY,
        backgroundColor: backgroundColor,
        fill: textColor,
        shadow: shadow,
      });

      canvas.add(textboxDraw).setActiveObject(textboxDraw);
      textboxDraw.enterEditing();

    });

    canvas.on('mouse:up', function(o) {
      canvas.off('mouse:down');
      pan.enablePan(canvas);

      //textboxes can not be scaled in height
      textboxDraw.setControlsVisibility({
        mt: false,
        mb: false,
      });
    });
  }
}

export default Textbox;