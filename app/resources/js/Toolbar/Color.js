import ConfigUI from "../configUI.js";

var selectedColor;

class Color{  

    showMenue(canvas){
      ConfigUI.RECTMENUE.classList.add("hide");
      ConfigUI.CIRCLEMENUE.classList.add("hide");
      ConfigUI.ARROWMENUE.classList.add("hide");
      ConfigUI.TEXTBOXMENUE.classList.add("hide");
      ConfigUI.FREEDRAWMENUE.classList.add("hide");
      ConfigUI.COLORMENUE.classList.remove("hide");
      ConfigUI.COLORMENUEOBJ.classList.add("hide");

      canvas.discardActiveObject().renderAll();
    }

    selectColor(position, canvas, freeDraw){

        switch (position) {
            case 1:
                selectedColor = "#F94144";
              break;
            case 2:
                selectedColor = "#F3722C";
              break;
            case 3:
              selectedColor = "#00ACC1";
            //selectedColor = "#F8961E";
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
        ConfigUI.COLORMENUE.classList.add("hide");
        ConfigUI.COLORICON.style.color = selectedColor;

        if(freeDraw.getIsActive()){freeDraw.freeDrawing(canvas, freeDraw, selectedColor, true);}
    }

}

export default Color;
export {selectedColor};