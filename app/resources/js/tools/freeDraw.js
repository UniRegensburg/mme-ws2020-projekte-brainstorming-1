/* eslint-disable no-undef */
import { selectedColor } from "./color.js";
import Config from "../utilis/config.js";

var colorDraw;

class FreeDraw {

  showMenue(freeDraw, canvas) {
    Config.RECTMENUE.classList.add("hide");
    Config.CIRCLEMENUE.classList.add("hide");
    Config.ARROWMENUE.classList.add("hide");
    Config.TEXTBOXMENUE.classList.add("hide");
    Config.FREEDRAWMENUE.classList.remove("hide");
    Config.COLORMENUE.classList.add("hide");
    Config.COLORMENUEOBJ.classList.add("hide");

    canvas.discardActiveObject().renderAll();

    Config.FREEDRAWSLIDEROUTPUT.textContent = "Pen size: " + Config
      .FREEDRAWSLIDER.value;
    Config.FREEDRAWSLIDER.oninput = function() {
      Config.FREEDRAWSLIDEROUTPUT.innerHTML = "Pen size: " + this.value;
      freeDraw.freeDrawing(canvas, freeDraw, freeDraw.getColor(), true);
    };
  }

  constructor(isActive) {
    this.isActive = isActive;
    this.color = Config.COLORDEFAULT;
    this.type = "pen";
  }
  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getIsActive() {
    return this.isActive;
  }

  setIsActive(isActive) {
    this.isActive = isActive;
  }

  freeDrawing(canvas, freeDraw, color, isActive) {

    canvas.on('mouse:down', function(o) {
      Config.FREEDRAWMENUE.classList.add("hide");
    });

    colorDraw = color;
    if (selectedColor) { colorDraw = selectedColor; }

    if (freeDraw.getType() === "pen") {
      canvas.freeDrawingBrush.color =
        colorDraw;
    } else if (freeDraw.getType() === "marker") {
      canvas
        .freeDrawingBrush.color = colorDraw + "80";
    } //80 = 50% transparent

    canvas.freeDrawingBrush.width = parseInt(Config.FREEDRAWSLIDER.value);

    canvas.isDrawingMode = isActive;

    this.setIsActive(isActive);
    this.setColor(colorDraw);

  }
}

export default FreeDraw;