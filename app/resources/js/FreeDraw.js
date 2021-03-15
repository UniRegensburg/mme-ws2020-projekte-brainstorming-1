import {selectedColor} from "./Color.js";
import Config from "./Config.js";

var freeDrawButton = Config.FREEDRAWBUTTON,
defaultColor = Config.COLORDEFAULT,
isActive, color1, value,
slider = document.getElementById("slider-freedraw"),
sliderOutput = document.getElementById("slider-freedraw-output"),
freeDrawMenue = document.getElementById("freeDrawPicker");

class FreeDraw{

    showMenue(freeDraw, canvas){
        freeDrawMenue.classList.remove("hide");
        sliderOutput.textContent = "Pen size: " + slider.value;
        slider.oninput = function() {
            sliderOutput.innerHTML = "Pen size: " + this.value;
            freeDraw.freeDrawing(canvas, freeDraw.getColor(), true);
          };

    }

    constructor(isActive){
        this.isActive = isActive;
        this.color = "green";
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    getIsActive(){
        return this.isActive;
    }

    setIsActive(isActive){
        this.isActive = isActive;
    }

    freeDrawing(canvas, color, isActive){

        canvas.on('mouse:down', function(o){
            freeDrawMenue.classList.add("hide");});

        color1 = color;
        if(selectedColor){color1 = selectedColor;}
    
        canvas.freeDrawingBrush.color = color1;
        canvas.freeDrawingBrush.width = parseInt(slider.value);

        canvas.isDrawingMode = isActive;
    
        this.setIsActive(isActive);
        this.setColor(color1);

    }   
}

export default FreeDraw;