/* eslint-disable no-undef */
import Config from "../utilis/config.js";

var selectedColor;

class Color {

  showMenue(canvas) {
    Config.RECTMENUE.classList.add("hide");
    Config.CIRCLEMENUE.classList.add("hide");
    Config.ARROWMENUE.classList.add("hide");
    Config.TEXTBOXMENUE.classList.add("hide");
    Config.FREEDRAWMENUE.classList.add("hide");
    Config.COLORMENUE.classList.remove("hide");
    Config.COLORMENUEOBJ.classList.add("hide");

    canvas.discardActiveObject().renderAll();
  }

  selectColor(position, canvas, freeDraw) {

    switch (position) {
      case 1:
        selectedColor = "#F94144";
        break;
      case 2:
        selectedColor = "#F3722C";
        break;
      case 3:
        selectedColor = "#00ACC1";
        break;
      case 4:
        selectedColor = "#F9C74F";
        break;
      case 5:
        selectedColor = "#90BE6D";
        break;
      case 6:
        selectedColor = "#43AA8B";
        break;
      case 7:
        selectedColor = "#577590";
        break;
      case 8:
        selectedColor = "#E0E0E0";
        break;
      case 9:
        selectedColor = "#9E9E9E";
        break;
      case 10:
        selectedColor = "#616161";
        break;
      default:
        selectedColor = "#F94144";
    }
    Config.COLORMENUE.classList.add("hide");
    Config.COLORICON.style.color = selectedColor;

    if (freeDraw.getIsActive()) {
      freeDraw.freeDrawing(canvas, freeDraw,
        selectedColor, true);
    }
  }

}

export default Color;
export { selectedColor };