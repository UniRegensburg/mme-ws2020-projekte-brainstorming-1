import FreeDraw from "./FreeDraw.js";

var colorMenue = document.getElementById("colorPicker"), 
icon = document.getElementById("icon-colorpicker"),
selectedColor, freeDraw;

class Color{  

    showMenue(){
        colorMenue.classList.remove("hide");
    }

    init(fd){
      this.freeDraw = fd;}

    selectColor(position, canvas){

      //freeDraw;

        switch (position) {
            case 1:
                selectedColor = "#F94144";
              break;
            case 2:
                selectedColor = "#F3722C";
              break;
            case 3:
                selectedColor = "#F8961E";
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
            default:
                selectedColor = "#F94144";

        }

        colorMenue.classList.add("hide");
        icon.style.color = selectedColor;

        if(this.freeDraw.getIsActive()){this.freeDraw.freeDrawing(canvas, selectedColor, true);}
    }

}

export default Color;
export {selectedColor};